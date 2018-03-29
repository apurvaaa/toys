/* leet code:

You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

Define a pair (u,v) which consists of one element from the first array and one element from the second array.

Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.

Example 1:
Given nums1 = [1,7,11], nums2 = [2,4,6],  k = 3

Return: [1,2],[1,4],[1,6]

The first 3 pairs are returned from the sequence:
[1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
Example 2:
Given nums1 = [1,1,2], nums2 = [1,2,3],  k = 2

Return: [1,1],[1,1]

The first 2 pairs are returned from the sequence:
[1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
Example 3:
Given nums1 = [1,2], nums2 = [3],  k = 3 

Return: [1,3],[2,3]

All possible pairs are returned from the sequence:
[1,3],[2,3]
*/

var kSmallestPairs = function(nums1, nums2, k) {
    let sortedArr = [];
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (sortedArr.length < k || (nums1[i] + nums2[j]) < sortedArr[sortedArr.length - 1].sum) {
                sortedArr = addToSortedArr(sortedArr, k, {sum: nums1[i] + nums2[j], first: nums1[i], second: nums2[j]})
            }
        }
    }
    let result = [];
    for (let i = 0; i < sortedArr.length; i++) {
        result.push([sortedArr[i].first, sortedArr[i].second])
    }
    return result
};

const addToSortedArr = (arr, k, eleObj) => {
        if (arr.length === 0) {
            arr.push(eleObj);
            return arr;
        }
        let i = 0;
        while(arr[i] !== undefined && arr[i].sum < eleObj.sum) {
            i++
        }
        arr.splice(i, 0, eleObj)
        if (arr.length > k) 
            arr = arr.slice(0, k)

        return arr;
}

console.log(kSmallestPairs([1, 1, 2], [1,2,3], 3))