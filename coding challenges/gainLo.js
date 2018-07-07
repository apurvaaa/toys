/* Write a function to calculate n!.
N! = n x n-1 x …. 1 */

// input? Non-negative int/long/BigInteger
// output? Non-negative int/long/BigInteger
// base case? 0! = 1

const factorial = (n) => {

	// error-checking
	if (n < 0)
		throw new Exception;

	let result = 1;
	let num = n;

	while (num !== 1) {
		Result *= num;
		num--;
	}
	return result;
}

// runtime? O(n) 
// space? O(1)

/*2. Given three strings A, B and C. Write a function that checks whether C is an interleaving of A and B. C is said to be interleaving A and B, if it contains all characters of A and B and order of all characters in individual strings is preserved. */

/* A := “ABC”
B := “DEF”
C := “ABCDEF”, “ABDCEF” -> true

|C| >= |A| + |B|

A: ABC -> fine
B: BAC -> not fine
C: AJBABCC
C: AJBCBAC

C: AJBBAC -> false

*/


/*
Input: 2 strings
Output: 1 string
Constraints: order should be preserved, length of C > length of (A and B)
Exceptions: 
*/

const interleaving = (a, b, c, pa = 0, pb = 0, pc = 0, cache) => {
	// base case
		// length of c is < length of a and b
    if (c.length < (a.length + b.length) || pc > c.length) return false;
	if (a === '' && b === '') return true

// the ele might be in a, b or in none
	if (c[pc] === a[pa]) {
		If (!cache[pc])
		cache[pc] = cache[pc] || interleaving(a,b,c, 1 + pa, pb, 1 + pc)

	}
	if (c[pc] === b[pb]) {
	if (!cache[pc])
	cache[pc] = cache[pc] || interleaving(a,b,c, pa,1 + pb, 1 +pc)
	}
	
if (!cache[pc])
	cache[pc] = cache[pc] || interleaving(a,b,c, pa, pb, 1 + pc)

	return cache[pc] 

}
/*
// complexity 
// time: 
// time? 
Runtime		:= #nodes in recursion tree
# nodes in tree 	= 3*3*3..how many times? |C|=n times
			= 3^n = O(3^n)

// space? 
	Space		:= height of tree
            =  log3(#nodes) = log3(3^n) = n = O(n)
*/

/* 3. Make [2] more time-efficient. 

Recursive problem
Top-down
Vanilla recursion: runtime? O(3^n), space? O(n)
Caching: runtime? Runtime? O(3^n), space? O(n) stack, O(n) heap
		
A: ABC -> fine
B: BAC -> not fine
C: AJBABCC

C: 
A->B->C->D	: false
A’->B’->C->D  : false */

// Bottom-up: dynamic programming
// https://people.cs.clemson.edu/~bcdean/dp_practice/