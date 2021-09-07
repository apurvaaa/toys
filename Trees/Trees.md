[TOC]

# Trees

## Dictionaries

> collection of n - Key, Value pairs

- Search (key)

- Insert(key)

- Delete(key)

  > Set is a special case of dictionary where value is not there

  - search will have all the same methods as in Dictionary

## Dictionary ADT

### Data Structure

#### Array

##### Unsorted Array

- Search: O(n)
- Insert: O(1)
- Delete: O(n)

##### Sorted Array

- Search: O(log n) - binary search
- Insert: O(n)
- Delete: O(n)

#### Linked List

##### Unsorted Linked List

- Search: O(n)
- Insert: O(1)
- Delete: O(n)

##### Sorted Linked List

- Search: O(n)
- Insert: O(n)
- Delete: O(n)

> For static Dictionary/Set: Sorted Array seems to be the best as we jsut need to allow for search and that is in O(log n)

### Implementation

#### Using Arrays - HashMaps

- Hash functions + arrays
- Worst time complexity: O(n) - collision 
- Expected Time complexity (Search, Insert, Delete): O(1)

#### Using Linked Lists - Binary Search Trees

> All notes in the left subtree will be < the current node value. IIIy for the right subtree

- called Maps, Associative Arrays, Symbol tables

- insertion and deletion are to be done in a way that the tree remains balanced
- (Search Insert, Delete) in O(log n)

- number of comparision operations during search = height of the BST + 1
- If it is a balanced BST i.e. shalloest BST for given n, h ~ log n

###### Explanation

n = 2^0^ + 2^1^ + 2^2^ + ... +2^h^

2n = 2 + 2^2^ + .. + 2^h+1^

----

2n - n = 2^h+1^ - 1

n + 1 = 2^h+1^

log (n + 1) - 1 = h

h <= log(2n) - 1

h <= log 2 + log(n) - 1

h <= log(n)

=> h ~ log(n)



## Binary Search Tree Operations Implementations

### Search



```js
class TreeNode {
  let key;
  let Object;
  TreeNode left;
  TreeNode right;
  
  constructor (key) {
    this.key = key
    this.left = null
    this.right = null
  }
}
```

- code is naturally recursively. Itarative is slightly harder

```js
function search(Treenode root, int key) {
  // if (root === null) return null; - base case not necessary
  let cur = root;
  while (cur !== null) {
    if (key === cur.key) {
      return true;
    } else if (key < cur.key) {
      cur = cur.left
    } else {
      cur = cur.right
    }
  }
  return null
}
```

- time complexity for search for a balanced BST: O(log n)

### Insert

```js
function insert(root, key) {
	  // key doesnt exist - assume
  
  const newNode = new TreeNode(key)  
  // base case: root === null
  if (!root) return newNode
  
  //search where to insert
  let cur = root;
  let prev = null;
  while (cur !== null) {
    if (key === cur.key) {
      return 'key already exists';
    } else if (key < cur.key) {
      prev = cur
      cur = cur.left
    } else {
      prev = cur
      cur = cur.right
    }
  }
  
  if (prev.key > key) {
    prev.left = newNode
  } else {
    prev.right = newNode
  }
  return newNode
}
```

- Time Complexity : O (log n) assuming balanced BST
- Caveat: if sorted numbers are inserted one after another, without balancing BST, height = n => Time complexity = O(n)

### Min & Max

> Min is the lest most node in a tree

> Max is the right most node in a tree

```js
function min(root) {
	if (root === null) return root;

  let cur = root
  while (cur.left !== null) {
    cur = cur.left 
  }
  return cur.key
}
```

```js
function max(root) {
	if (root === null) return root;

  let cur = root
  while (cur.right !== null) {
    cur = cur.right 
  }
  return cur.key
}
```

- Time Complexity: O (log n) for BST, O(n) if not balanced
- BST are called ordered dictionaries because we can find max, min, sucessor and predecessor in < O(n); unlike array dictionaries (hashMaps)

### Successor & Predecessor

- Successor: The next largest key given any key in the tree. The largest number in the tree can not have a successor.
- Predecessor: The next smallest key given any key in the tree. The smallest number in the tree can not have a predecessor.

```js
function successor(root, treeNodeP) {
  // base condition: check if root is null
  if (root === null) return null
  
  // check if right subtree exists
  	// if exists: find the min of right subtree
  if (treeNodeP.right !== null) {
    	let cur = treeNodeP.right;
    	while (cur.left !== null) {
        cur = cur.left
      }
    return cur
  }
  
  	// if no exists: keep track of ancestors, find if there was an ancestor whose left tree was part of the path
  		// that ancestor is the successor
  let cur = root;
  let ances = root;
  while(cur !== treeNodeP) {
    if (cur.key < treNodeP.key) {
			ances = cur
      cur = cur.left
    } else {
      cur = cur.right
    }
  }
  return ances;
}
```

```js
// predecessor: just flip the code for successor

function predecessor(root, treeNodeP) {
  // base condition: check if root is null
  if (root === null) return null
  
  // check if left subtree exists
  	// if exists: find the max of left subtree
  if (treeNodeP.left !== null) {
    	let cur = treeNodeP.left;
    	while (cur.right !== null) {
        cur = cur.right
      }
    return cur
  }
  
  	// if no exists: keep track of ancestors, find if there was an ancestor whose right tree was part of the path
  		// that ancestor is the predecessor
  let cur = root;
  let ances = root;
  while(cur !== treeNodeP) {
    if (cur.key < treNodeP.key) {
      cur = cur.left
    } else {
      ances = cur
      cur = cur.right
    }
  }
  return ances;
}
```



### Delete

- no guarantee that the node exists. if not found, return root

```js
function delete(root, key) {
  // search where to insert, we need parent node as well
  let cur = root
  let prev = null
  while (cur !== null) {
    if (cur.key === key) {
      break
    } else if (cur.key < key) {
      prev = cur
      cur = cur.left
    } else {
      prev = cur
      cur = cur.right
    }
  } 
  if (cur === null) return root
  
  
  // case 1: the keyNode is a leaf node
  if (cur.left === null && cur.right === null) {

    // one node tree case
    if (prev === null) return null
    
    if (prev.left === cur) {
      prev.left = null
    } else {
      prev.right = null
    }
  } else if (cur.left === null || cur.right === null) {
    //case 2: the keyNode is having one subTree
    
    let child = cur.left === null ? cur.right : cur.left;

    // edge case - cur is root
    if (prev === null) {
      return child
    }

    if (prev.left === cur) {
      prev.left = child
    } else {
      prev.right = child
    }
  } else {
		// case 3: the keyNode has 2 children
  	// choose either predecessor or successor to promote
    
    // trying to find successor
    let suc = cur.right
    let prevSuc = cur
    while(suc.left !== null) {
      prevSuc = suc
      suc = suc.left
    }
    
    // switch keys with cur
    [cur.key, suc.key] = [suc.key, cur.key]
    
    // set prevSuc to suc's right child
    // takes care of case of suc not having any right child
    // => remember successor will not have a left child
    if (prevSuc.left === suc) {
      prev.left = suc.right
    } else {
      prev.right = suc.right
    }
  }
  return root
}
```

- Time Complexity: O(log n)

- Even balancing the Tree can be done in O(log n)

## N-Ary Trees Traversals

- Heirarchial data can be shown
- Different than BST: 
  - Not Binary
  - doesnt hold true the rule about left child or right child values
  - Has a list of references to children. Not just left and right

### Breath First Search

- Also called Level Order Traversal

- Binary tree stored in array is just printing out the array in sequence

```js
function bfs(root) {
  // use array as a queue
  let q = [root]
  while (q.length !== 0) {
    let cur = q.shift()
    console.log(cur.key)
    if (cur.left !== null) {
      q.push(cur.left)
    } 
    if (cur.right !== null) {
      q.push(cur.right)
    }
  }
}
```

- Time Complexity: O (n)
- Space: O(n)

### Depth First Search

![DFS3Traversals](/Users/apurva.vijaya/Dev/toys/Images/img2.png)

- Preorder, Inorder, postorder traversals
- printing the BST in the array order is in order
- in order - sorted order in BST
- One way to sort - Tree sort:
  - build BST: O(n log n)
  - then in order traversals: O(n)

```js
// recursively

function dfs(root) {
	if (root === null) return
  
  console.log(root.key)
  dfs(root.left);
  dfs(root.right)
}
```

- for n-ary tree, we can have pre-order to post-order
- aux space: height of the tree: O(n)

## Problems

### Binary Tree Level Order Traversal

- return level order traversals of the node values

<img src="/Users/apurva.vijaya/Dev/toys/Images/img3.png" alt="BSTProb1" style="zoom:50%;" />



```js
function BSTLevelTraversal(root) {
  const q = [root]
  while (q.length !== 0) {
    let ele = q.shift();
    if (ele.left) q.push(ele.left);
    if (ele.right) q.push(ele.right);
    console.log(ele.value)
  }
}
```

#### Reverse Level Order Traversal Of A Binary Tree

```js
//Given a binary tree, return the bottom-up level order traversal of the node’s labels listing each level from left to right.

function bfs(root) {
  const q = [root]
  const results = []
  
  while (q.length !== 0) {
   	let size = q.length;
    let temp = [];
    
    while (size !== 0) {
	    let ele = q.shift();
  	  if (ele.left) q.push(ele.left);
    	if (ele.right) q.push(ele.right);
    	temp.push(ele.value)
			size--;
    }
    results.shift(temp);
  }
}

```

#### Right Side View of a Binary Tree

```js
//Given a binary tree, imagine yourself standing on the right side of it and return a list of the node labels that you can see from the top to the bottom. 

const rightView = (root) => {
  const results = []
  
}
```



### Path Sum

<img src="/Users/apurva.vijaya/Dev/toys/Images/img4.png" alt="TreesProb2" style="zoom:50%;" />

```js
// descision problem
```



```js
// get all paths
// Given a Binary Tree and an integer k, find all the root to leaf paths that sum to k.

const pathSum = (root, k) => {
  const results = []
  const helper = (node, slate, leftOverK) {
    if (node === null) {
      if (leftOverK === 0) results.push(slate.slice(0))
      return
    }
    
    slate.push(node.val)
    helper(node.left, slate, leftOverK - node.val)
    helper(node.right, slate, leftOverK - node.val)
    slate.pop()
  }
  helper();
  return results
}
```



### Diameter of a Binary Tree

<img src="/Users/apurva.vijaya/Dev/toys/Images/img5.png" alt="TreesProb5" style="zoom:50%;" />

```js
//Given a binary tree, find its diameter.
const diameter = (root) => {
  const diam = 0;
	const helper = (node) => {
    if (node === null) return 0;
    
    let [left, right] = [0,0]
  
    left = helper(node.left)
    right = helper(node.right)
    if (left !== 0) left++
    if (right !== 0) right++
    if (diam < left + right) diam = left + right
    
    return Math.max(left, right) + 1
  }
  if (root) helper(root);
  return diam;
}
```



### Count Univalue Subtrees

<img src="/Users/apurva.vijaya/Dev/toys/Images/img6.png" alt="TreesProb6" style="zoom:50%;" />

### DFS - preorder, in order, postorder

> Preorder: root comes first; Inorder: root comes in the middle; Postorder: root comes in the end

```js
// in order in dfs : recursive
const dfsInOrder = (root) => {
  if (root === null) return root
  dfsInOrder(root.left);
  console.log(root.val);
  dfsInOrder(root.right);
}
```

```js
// dfs pre order in iterative
// user .reverse() at the end for post order dfs
const dfs = (root) => {
  const stk = [root];
  
  while(stk.length !== 0) {
    let ele = stk.pop()
    if (ele.left) stk.push(ele)
    console.log(stk.val)
    if (ele.right) stk.push(ele)
  }
}
```

### DFS: Convert Sorted List to Binary Search Tree

```js
// Given a singly linked list with elements sorted in ascending order, your task is to convert it into a height-balanced binary search tree.

const convert = (head) => {
// convert LL to array
	let cur = head
  const arr = []
  while (cur !== null) {
    arr.push(cur.data)
    cur = cur.next
  }
// then use helper to reconstruct BST
  cosnt helper = (start, end) => {
    if (start > end) return null
    if (start === end) return new TreeNode(arr[start])
    
    const mid = start + Math.floor((end - start) / 2)
    const node = new TreeNode(arr[mid])
    node.left = helper(start, mid - 1)
    node.right = helper(mid + 1, end)
    return node
  }
  return = helper(0, arr.length - 1)
}
```



### DFS: Given 2 types of traversals of a Binary tree, can you generate the tree?

- Yes, if the in order sequence is given along with any other another traversals solutions
- If it is BST, just pre-order or post-order is sufficient as we can get the inorder by just sorting all the elements

#### **Construct A Binary Search Tree From Its Preorder Traversal**

```js
// Construct a Binary Search Tree whose preorder traversal matches with a given list.

const buildBST = (preOrderList) => {
  const results = []
  const preO = preOrderList.slice(0)
  const inO = (preOrderList.sort((a,b) => a-b)).slice(0)
  const hashInO = {}
  let i = 0
  while (i < inO.length) {
    hashInO[inO[i]] = i
		i++
  }
  
  const helper = (pStart, pEnd, iStart, iEnd) => {
    if (pEnd < pStart) return null
    if (pEnd === pStart) return new TreeNode(preO[pStart])
    
    let midNode = new Treenode(preO[pStart])
    let midPos = hashInO[preO[pStart]]
    let len = midPos - iStart
    midNode.left = helper(pStart + 1, pStart + len, iStart, midPos - 1)
    midNode.right = helper(pStart + len + 1, pEnd, midPos + 1, iEnd)
    return midNode
  }
  return helper(0, preO.length - 1, 0, inO.length - 1);
}
```

