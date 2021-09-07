/*

Write a function that takes in a non-negative integer k and a k-sorted array of integers 
and returns the sorted version of the array. 
Your function can either sort the array in place 
or create an entirely new array.

A k-sorted array is a partially sorted array in which 
all elements are at most k positions away from 
their sorted position. 
For example,
the array [3, 1, 2, 2] is k-sorted with k = 3, 
because each element in the array 
is at most 3 positions away from its sorted position.

Sample
array = [3, 2, 1, 5, 4, 7, 6, 5]
k = 3
Output
[1, 2, 3, 4, 5, 5, 6, 7]

1<=K<=N

edge
{
  "array": [],
  "k": 5
}
edge2
{
  "array": [1, 0, 1, 1, 1, 1, 1, 1],
  "k": 1
}

edge3
{
  "array": [5, 4, 3, 2, -100],
  "k": 5
}

Note that you're expected 
to come up with an algorithm that can sort 
the k-sorted array faster than in O(nlog(n)) time.
*/


// input: array of unsroted integers, k = the max positions they are out of order in
// output: sorted array in increasing order
// constraints: 
// 1. 1<=K<=N

// as k !==0 and n can be huge here, We are not using insertion sort
// using heap of size k+1 will help us here to reduce the time taken from O(n log n) to O(n log k)

function sortKSortedArray(array, k) {
  // heap ops: 1. insert  2.extract_min
	if (array.length === 0) return array;
	// ptr = 0
	let ptr = 0;
	const lastIndexOfHeap = (k === array.length) ? k : k + 1);

	// build min heap with k elements
	let heapK = buildHeap(array.slice(0, lastIndexOfHeap))
	
	// loop over rest of the array
	for (let i = k + 1; i < array.length; i++) {
		// we extract min and put it in pos ptr, ptr++
		array[ptr++] = heapK.extractMin()
		// insert next element
		heapK.insert(array[i])
	}
	
	// loop k times
	while(!heap.isEmpty()) {
		// replace the iterms in array at pos ptr with extractMin 
		array[ptr++] = heapK.extractMin()
	}
	
  return array;
}
