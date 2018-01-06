
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
/*    
    if(i!=j){
      int ii=i, jj=j-1;
      while(ii<jj){
        swap(arr, ii, jj);
        ii++;jj--;
      }
    }
  */  
    // your code goes here
/*    
    int i=0, j=arr.length-1;
    while(i<j){
      swap(arr, i, j);
      i++;j--;
    }
    */
    return arr;
  }
  
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


