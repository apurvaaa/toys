// yet to do extra credit

/**
 * A heap is a special kind of tree in which a parent node is ordered only in
 * respect to its immediate children. Unlike the binary search tree you may have
 * implemented, where the entire tree is ordered, in a heap the only order
 * guaranteed is between a node and its parent.
 *
 * In a binary heap each node should have only zero, one, or two children. Each node
 * must have 2 children before the next oldest node can have any children. Therefore
 * the 0th node will be the parent of the 1st and 2nd nodes, the 1st node will be the
 * parent of the 3rd and 4th nodes, and the 2nd node will be the parent of the 5th and
 * 6th nodes. In a specific kind of binary heap, the binary min heap, every node is
 * less than its immediate children:
 * 
 *          0
 *     1         2
 *   3   4     5   6
 *  7
 *
 * There is only one place at any given time in a binary heap where a node can be
 * added or removed. In the example above, the next node will be inserted as the second
 * child of 3. If we were to remove a node instead, we would remove the 7. This mimics
 * the behavior of a stack and allows us to manage the heap in a very memory efficient way,
 * using a list or array. For example, the heap pictured above can be described as:
 *
 * [0, 1, 2, 3, 4, 5, 6, 7]
 *
 * where we always add to or remove from the end of the array.
 *
 * A well known fact, utilized with binary heaps stored in arrays, is that
 * we can calculate the index of a node's parent or children using math:
 *
 * parentIndex = Math.floor( (index - 1) / 2 )
 * childrenIndices = [index * 2 + 1, index * 2 + 2]
 *
 * When adding a new node to a binary min heap, it could be that we violate the property of the
 * heap whereby every node is of lower value than its children. Thus whenever we insert into
 * a binary min heap, we must compare the inserted node to its parent, and swap their positions
 * if it is less than its parent. After a swap it must compare itself to its new parent, continuing
 * until it is no longer less than its parent.
 *
 * Something similar happens when we want to remove the root node. Because we can only remove from the
 * end of the array we swap the position of the last node and the root node and then remove the now-last
 * node from the heap. The new root node now must be compared to its children and if it is not less than
 * both of them, be swapped with whichever of the two of them is the smallest. It is then compared with its
 * new children and this swapping continues until it is less than both its children.
 *
 * You can see a great visualization of a binary min heap in action here, play around with it until you can
 * easily guess how the heap will behave with both insertion and removal:
 * https://www.cs.usfca.edu/~galles/visualization/Heap.html
 */


// Below is a binary heap whose nodes are integers. Its storage is an array and
// its `getRoot` method is already written. `BinaryHeap`'s `this._compare` method is hard-coded to return
// whether the fist element passed into it is less than the second. Use it when comparing nodes.
//
// Implement the `insert` and `removeRoot` methods, each operating in logarithmic time relative
// to the size of the heap, and each restoring the heap's property of parent to child sorting. Use
// the equations above to navigate parent / child relationships in the storage array, and write any
// helper functions needed to assist you.
//
// TODO: Extra credit: `BinaryHeap`'s `this._compare` is hard-coded to assist in making a min heap, modify `BinaryHeap`
// to accept an optional argument which is a function used as the sorting mechanism for the heap.
// That way you can use your `BinaryHeap` class to construct a max heap or min heap or whatever.
//
// TODO: Extra extra credit: Implement `heapSort`. `heapSort` takes an array, constructs it into a `BinaryHeap`
// and then iteratively returns the root of the `BinaryHeap` until its empty, thus returning a sorted array.



function BinaryHeap () {
    this._heap = [];
    // this compare function will result in a minHeap, use it to make comparisons between nodes in your solution
    this._compare = function (i, j) { return i < j };
  }
  
  // This function works just fine and shouldn't be modified
  BinaryHeap.prototype.getRoot = function () {
    return this._heap[0];
  }

  BinaryHeap.prototype.areChildrenSmaller = function (curIndex, child1, child2) {
    // console.log('heap which is prob : ', this._heap);
    if (this._compare(this._heap[curIndex], this._heap[child1]) || this._compare(this._heap[curIndex], this._heap[child2]))
      return false;
    else return true;
  }

  BinaryHeap.prototype.insert = function (value) {
    //insert value at end of array
    this._heap.push(value);
    if (this._heap.length === 1) return;
    let curIndex = this._heap.length - 1;
    let parIndex = this.getParentIndex(curIndex);
    while((curIndex !== 0) && !this._compare(this._heap[parIndex], this._heap[curIndex])) {
      // swap with parents
      let temp = this._heap[parIndex];
      this._heap[parIndex] = this._heap[curIndex];
      this._heap[curIndex] = temp;

      // update parIndex and curIndex
      curIndex = parIndex;
      parIndex = this.getParentIndex(curIndex);
    }
    console.log('after insertion: ', this._heap);
  }
  
  BinaryHeap.prototype.removeRoot = function () {
    if (this._heap.length === 0) return 'empty heap';

    //swap tail with head
    let temp = this._heap[0];
    this._heap[0] = this._heap[this._heap.length - 1];
    //pop tail
    const headVal = this._heap.pop();

    if (this._heap.length === 0) return;

    let curIndex = 0;
    let [child1, child2] = this.getChildrenIndices(curIndex);
    while((child1 <= (this._heap.length - 1)) && this.areChildrenSmaller(curIndex, child1, child2)) {
      console.log(' heap before while starts : ', this._heap);
      let swapIndex;
      //if child2 doesnt exist
      if (child2 > (this._heap.length - 1)) {
        swapIndex = child1;
      }
      else {
        //smallest child
        swapIndex = (this._compare(this._heap[child1], this._heap[child2])) ? child1 : child2;
      }
      // swap with child
      let temp = this._heap[swapIndex];
      this._heap[swapIndex] = this._heap[curIndex];
      this._heap[curIndex] = temp;

      // update parIndex and curIndex
      curIndex = swapIndex;
      [child1, child2] = this.getChildrenIndices(curIndex);
    }
    console.log('after root removal: ', this._heap);
  
  }




  BinaryHeap.prototype.getParentIndex = (childIndex) => {
    return Math.floor( (childIndex - 1) / 2 );
  }

  BinaryHeap.prototype.getChildrenIndices = (parentIndex) => {
    return [parentIndex * 2 + 1, parentIndex * 2 + 2];
  }

/*
  let binHeap = new BinaryHeap();
  binHeap.insert(2);
  binHeap.insert(5);
  binHeap.insert(3);
  binHeap.insert(6);
  binHeap.insert(1);
  binHeap.insert(8);
  binHeap.removeRoot();
  */

  // ------------------------------------------------
  // using ES6:
class maxHeap {
  constructor (arr = [null]) {
    this.heapArray = arr;
  }
  
  insert = (ele) => {
    this.heapArray.push(ele)
    let i = this.heapArray.length - 1
    while(i > 0) {
      this.heapifyDown(i);
      i--;
    } 
  }

  extractMax = () => {
    if (this.heapArray.length <= 1) {
      return this.heapArray[0]
    }
    [this.heapArray[this.heapArray.length - 1], this.heapArray[1]] = [this.heapArray[1], this.heapArray[this.heapArray.length - 1]]
    const ele = this.heapArray.pop()
    this.heapifyDown(1)
    return ele;
  }

  peek = () => {
    if (this.heapArray.length >= 2) {
      return this.heapArray[1]
    }
    return this.heapArray[0]
  }

  heapifyDown = (index) => {
    let i = index;
    let leftIndex = 2 * i;
    let rightIndex = 2 * i + 1
    let left = (leftIndex < this.heapArray.length) ? this.heapArray[leftIndex] : null;
    let right = (rightIndex < this.heapArray.length) ? this.heapArray[rightIndex] : null;
    while((left && this.heapArray[i] < left) || (right && this.heapArray[i] < right)) {
      if (left && right) {
        if (left >= right) {
          if (this.heapArray[i] < left) {
            [this.heapArray[i], this.heapArray[leftIndex]] = [this.heapArray[leftIndex], this.heapArray[i]]
            i = leftIndex
          }
        } else {
          if (this.heapArray[i] < right) {
            [this.heapArray[i], this.heapArray[rightIndex]] = [this.heapArray[rightIndex], this.heapArray[i]]
            i = rightIndex
          }
        }
      } else if (left) {
        if (this.heapArray[i] < left) {
          [this.heapArray[i], this.heapArray[leftIndex]] = [this.heapArray[leftIndex], this.heapArray[i]]
          i = leftIndex
        }
      } else {
        if (this.heapArray[i] < right) {
          [this.heapArray[i], this.heapArray[rightIndex]] = [this.heapArray[rightIndex], this.heapArray[i]]
          i = rightIndex;
        }
      }
      leftIndex = 2 * i;
      rightIndex = 2 * i + 1
      left = (leftIndex < this.heapArray.length) ? this.heapArray[leftIndex] : null;
      right = (rightIndex < this.heapArray.length) ? this.heapArray[rightIndex] : null;
    }
  }
}

let binHeap = new maxHeap();
binHeap.insert(2);
binHeap.insert(5);
binHeap.insert(3);
binHeap.insert(6);
binHeap.insert(1);
binHeap.insert(8);
console.log(binHeap.extractMax());

//-----

const MinHeap = class {
  compare (a, b) {
      return a - b
  }
constructor (compareFunc = null, arr = []) {
  this.heapArray = [null,...arr];
  if (compareFunc) this.compare = compareFunc
}

insert (ele) {
  this.heapArray.push(ele)
  let i = this.heapArray.length - 1
  while(i > 0) {
    this.heapifyDown(i);
    i--;
  } 
}

extractMin () {
  if (this.heapArray.length <= 1) {
    return null
  }
  [this.heapArray[this.heapArray.length - 1], this.heapArray[1]] = [this.heapArray[1], this.heapArray[this.heapArray.length - 1]]
  const ele = this.heapArray.pop()
  this.heapifyDown(1)
  return ele;
}

peek () {
  if (this.heapArray.length >= 2) {
    return this.heapArray[1]
  }
  return null;
}

heapifyDown (index) {
  let i = index;
  let leftIndex = 2 * i;
  let rightIndex = 2 * i + 1
  let left = (leftIndex < this.heapArray.length) ? this.heapArray[leftIndex] : null;
  let right = (rightIndex < this.heapArray.length) ? this.heapArray[rightIndex] : null;
  while((left && this.compare(this.heapArray[i], left) > 0) || (right && this.compare(this.heapArray[i],right) > 0)) {
    if (left && right) {
      if (this.compare(left,right) <= 0) {
        if (this.compare(this.heapArray[i], left) > 0) {
          [this.heapArray[i], this.heapArray[leftIndex]] = [this.heapArray[leftIndex], this.heapArray[i]]
          i = leftIndex
        }
      } else {
        if (this.compare(this.heapArray[i], right) > 0) {
          [this.heapArray[i], this.heapArray[rightIndex]] = [this.heapArray[rightIndex], this.heapArray[i]]
          i = rightIndex
        }
      }
    } else if (left) {
      if (this.compare(this.heapArray[i], left) > 0) {
        [this.heapArray[i], this.heapArray[leftIndex]] = [this.heapArray[leftIndex], this.heapArray[i]]
        i = leftIndex
      }
    } else {
      if (this.compare(this.heapArray[i], right) > 0) {
        [this.heapArray[i], this.heapArray[rightIndex]] = [this.heapArray[rightIndex], this.heapArray[i]]
        i = rightIndex;
      }
    }
    leftIndex = 2 * i;
    rightIndex = 2 * i + 1
    left = (leftIndex < this.heapArray.length) ? this.heapArray[leftIndex] : null;
    right = (rightIndex < this.heapArray.length) ? this.heapArray[rightIndex] : null;
  }
}
}