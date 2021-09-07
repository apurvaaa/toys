[TOC]

# Sorting

## 1. Brute Force: Selection Sort

###### PseudoCode

```js
// Selection Sort

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // find i th smallest ele and swap with A[i]
    let min = i
    // during linear scan of arr[1 .. n]:
			// if you find a smaller ele than arr[min] update min
		// swap[ the min ele with A[i]]
  }
}

```

###### Analyze

1. _Correctness_: 

   - In i^th^ iteration we would have arr[1.. i-1] sorted. Then we will find the i^th^ smallest and put it in arr[i]. 
   - => n^th^ iteration arr[1.. n-1 is sorted]

2. _Performance_:

   a. Time:  $\theta$ (n^2^)

   b. Space: 

   ----

   

## 2. Decrease and Conquer: Bubble Sort



###### PseudoCode

```js
// bubble sort

const bubbleSort = (array) => {
  // repeat n times:
  	// while scanning the array from r -> l: [j = n-1]
  		// if array[j-1] > array[j]
  			// swap [array[j], array[j - 1]]
}
```

###### Correctness

For i^th^, (i - 1) smallest elements are on L of i^th^ element. Then we bubble down the next smallest element from r -> l

###### Complexity

1. _Time:_ $\theta$ (n^2^)
2. _Space:_ $\theta$ (n)

###### Notes

- Bubble sort performance is worst possible. For all cases

----

## 3. Decrease and Conquer: Insertion sort

###### Pseudocode

```js
// recursive - top down

const insertionSort = (array, n) => {
  if (n < 1) return
  insertionSort(array, n -1)
  let j = n - 1, ele = array[n]
  while (j > 0 && A[j] > ele)
    // shift Right (A[j])
    j = j - 1
  array[j+1] = ele
}

// interative - bottom up
const insertionSort = array => {
  if (n <= 1) return
  for (let i = 2; i <= n; i++) {
    ele = A[i]
    j = i - 1
		while (j >= 1 && A[j] > ele) {
      array[j+1] = array[j]
      j = j - 1
    } 
    array[j +1] = ele
  }
}

```

###### Complexity

1. _Time_: 

   Avg and worst case- O(n^2^), 

   Best case: O(n)

2. _Space_: $\theta$ (n)

----

## 4. Divide & Conquer: Merge Sort



- Divide into smaller subproblems ususally of same size. Solve Subproblems. Combine solutions (usually with recursion)

```js
const mergeSort = array => {
  let n = length(array)
  if (n <= 1) return array
  
  const left = mergeSort(array[1:n/2])
  const right = mergeSort(array[n/2 + 1: n])
  return merge(left,right)
}

const merge = (left, right) => {
  let i = left.start
  let j = right.start
  const aux = empty array of length of left.length + right.length
  while (i <= left.end && j <= right.end) {
    if (left[i] <= right[j]) {
      aux[k++] = left[i++]
    } else {
      aux[k++] = right[j++]
    }
  }
  return aux
}
```

###### Complexity

1. _Time_: $\theta$ (n log n) 
   - i.e. > n, < n^2^
   - log n < n < n log n < n^2^ < 2^n^ 
2. _Space_: not in place, aux array is O(n)

__Tim Sort__: Mix of insertion and merge sort (almost sorted / small input : insertion sort) - merge sort otherwise

- Java uses it for sorting objects and Py uses it for all sorting

## 5. Divide & Conquer: QuickSort

###### Pseudocode

```js
const quickSort = array => {
  if (array.length <= 1)
    return array
  
  // pick some x = array[i] at random
  const pivot = i
  // partition rest of array into:
  	// left (< x)
  	// right (> x)
  // replace A with [L, x, R]
  quickSort(left)
  quickSort(right)
}
```

###### Complexity

1. _Time_: o (n log n), Avg case too. Worst case O(n^2^)
2. Space: in place. So, no Aux

- Is not a stable sort, though is in place. (vs Merge Sort - is stable)
- MS can be done in parallel. Not QS is we are optimizing on space
- QS is marginally better than MS in average case
- Java uses this for ordering primitives
- Randomized QS is always better

## 6. Transform & Conquer: Heap Sort

### (Priority Queue ADT with Binary Heap)

###### Operations:

1. Insert
2. Extract min / max
3. Can also have heaping down/heapify up
4. Can also have create Heap from Array

###### Calculations:

- Root Level = 0
- h = log (n + 1) - 1
- it starts from 1st spot of array
- parent of a node = Math.floor(i / 2)
- child of a node = 2 i , 2 i + 1

###### Insert

- Insert at end of array as last child then bubble up the parent path. 
- Time is max height = O(log n)

###### Extract min/ max

- swap root with last leaf node then adjust the heap by bubble down
- Time is max height = O(log n)

###### Create Heap

- Inserting n times takes time O (n log n)
- But creating heap of n elements can be done in O(log n)
- _How_?
  - Dont use 0th position
  - Scan array from R -> L and fix the heap tree in it
  - i.e. heapify-down

## Problems

![SortProb](/Users/apurva.vijaya/Dev/toys/Images/SortProb.png)

### Sort an array

![SortProb1](/Users/apurva.vijaya/Dev/toys/Images/SortProb1.png)

#### What algorithms will you use to solve this?

- `Bubble sort` and `Selection Sort` are having worst case complexity - O(n^2^)
- If array is almost sorted, use `InsertionSort` - O(n) n = number of out of place elements 
- Merge Sort and Heapsort - O(n log n)
- Use Randomized Quicksort - high probabliity average case O(n log n) 
- Stable: Merge Sort - if duplicates in same order as in input
- QS and HS: dont need extra aux space
- Implicit Stack space of QS
- QS runs emperically fastest but could take O(n^2^)
- Use HS - no stack space used, wont take O(n^2^)
- Use MergeSort for stable and paralell
- if arary are integers, primitives, so, we dont need MS
- If we can look at the inetgers as bitstrings, Radix sort is fastest

> learn how to code QS < 5 mins cause you use std library, HS, MS in under 10 mins

- in Radix it is easier to look at 1 byte rather than a bit
- Radix pass negative numbers will have a 1 in their sign bit

### 1. Two Sum

![SortsProb2](/Users/apurva.vijaya/Dev/toys/Images/SortsProb2.png)

- ___Descision Problem___
- brute force: look at all pairs of numbers and see if there is a pair
- Divide and Conquer: doesnt work
- Decrease and Conquer: do 1 level work and pass on
  - ake leaf nodes do most of the work
- Transform and Conquer:
  1. sort using BST: _input rearrangement_
  2. use Hash table: _representation change_ (then solution in O(n))
  3. _problem reduction_ : reduce problem to previously known problem
- if we do pre-sorting, then do binary search, time: O(n log n)

> ___presorting patterns___:
>
> - Sorting + binary search
> - Sorting + one pass
> - Sorting + 2 pointer pass

### 2. Two Sum

- return the 2 indices of the 2 numbers which add up to the target
- sneaky way of saying - no presorting
  - then brute force

### 3 Sum

- Decrease and conquer: _Problem Reduction_
- becomes a two sum problem with a lazy manager

### Intersection of 2 sorted arrays

- Brute Force: intersection of 2 arrays.. all pairs of numbers from both arrays. O(m x n)
- Decrease & Conquer: linear way through 1 array:
  - lazy manager checks if 1 number and checks if that is there in the other - O(n^2^)
    - How to speed up the search?
  - => do Binary Search on longer array as input arrays are sorted  O(n log n)
  - => keep a pointer to keep track of the previous look up, so that the input size for binary search (or linear search) reduces O(m + n) || O(max(m, n)) : [basically Merge Sort]
  - => could use hash table for search: look up is constant: O(n) - but uses aux space

>  Search engine: find list of documents which contain a word, given docs and target word

### Intersection of unsorted arrays

- hash table or sort one of the arrays

### Merge 2 sorted arrays (/ union)

- 2nd array is length of arr1 + arr2

### Kth largest in an array - not kth distinct element - exists

- ___Selection Problem___
- Brute Force: O(n log n) + O(1) : sort + look up 
  - Cant do better than O(n) in sort
- What if we sort only till n ? Selection/Bubble sort: O(n k) + O(1) : we find the largest element k times
  - If k = n / 2  : O(nk) -> O(n^2^)
  - This doesnt work
- We find largest element k times: Can we find the max element faster?
  - max heap ( / min heap) : pluck out root k times -> O(k log n) + O(n) [to create Heap]
  - if k = n / 2, it is O(nlog n) same as brute force
- You can maintain k variables to handle top k elements -> O(n^2^) for k = n / 2
- Change representation of top k? Use min heap to hold k top variables 
  - will need to insert new things into k
  - will need to peek at min most element
  - will need to delete min- most of top k
  - update time: O(log k) -> Total time taken O(n log k); if k = n / 2, again O(n log n), same as brute force
- Quick Select - last resort
  - Average case is O(n) and is best case
  - Worst case is still O( n^2^) but chances are super low especially randomized

### Dutch flag problem

- 3 way partitioning (this is default now in Quick sort these days)

> If array has duplicates do 3 way

- Have to do it in single pass

### Kth largest in a stream

<img src="/Users/apurva.vijaya/Dev/toys/Images/SortProb7.png" alt="SortProb7" style="zoom:60%;" />

- Best solution is to keep the top k in a min heap
- Build with insert, delete and peek of heap - no need for build heap
- timein the video: 1:11

### Find Median in a stream

<img src="/Users/apurva.vijaya/Dev/toys/Images/Sortprobs8.png" alt="SortProbs8" style="zoom:50%;" />

- we will need to save all the input data for this
- maintain 1 max heap and 1 min heap

