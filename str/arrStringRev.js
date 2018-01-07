
/*

You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

Explain your solution and analyze its time and space complexities.


input:  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
                'm', 'a', 'k', 'e', 's', '  ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
          'm', 'a', 'k', 'e', 's', '  ',
          'p', 'e', 'r', 'f', 'e', 'c', 't' ]
*/





// sol in java :


/*

import java.io.*;
import java.util.*;

class Solution {

  static char[] reverseWords(char[] arr) {
    
    reverse(arr, 0, arr.length-1);
    
    int i=0, j=0;
    
    while(j<arr.length){
      while(j<arr.length && arr[j]!=' '){
        j++;
      }
      if(j==arr.length){
        break;
      }
      reverse(arr, i, j-1);
      j++;
      i=j;
    }
    
    reverse(arr, i, j-1);

    
  //// commented  
    if(i!=j){
      int ii=i, jj=j-1;
      while(ii<jj){
        swap(arr, ii, jj);
        ii++;jj--;
      }
    }
    
    // your code goes here
   
    int i=0, j=arr.length-1;
    while(i<j){
      swap(arr, i, j);
      i++;j--;
    }
    
    return arr;
  }
  /// comment end
	public static void reverse(char[] a, int i, int j) {
    while(i<j){
      swap(a, i, j);
      i++;j--;
    }
	}
	public static void swap(char[] a, int i, int j) {
	    char temp=a[i];
	    a[i]=a[j];
	    a[j]=temp;
	}


  public static void main(String[] args) {

  }

}
*/

// best solution inline - assuming spaces are always single

const reverseArr = (arr) => {
  let first, last;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      first = 0;
      last = 0;
    }
    if (arr[i] === ' ') {
      last = i - 1
      swapIt(arr, first, last)
      first = i+1;
    }

    if (i === arr.length - 1) {
      last = i
      swapIt(arr, first, last)
    }
  }
  swapIt(arr, 0, arr.length - 1)
  return arr;
}

const swapIt = (arr, low, high) => {
  while (low < high) {
    let temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp
    low++;
    high--;
  }
}

console.log(reverseArr(['a', 'p', 'p', ' ', 'c', 'o', 'd', 'e']));

