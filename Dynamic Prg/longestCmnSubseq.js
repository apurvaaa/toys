// Longest common subsequence problem from Geek for geeks
// subsequence is a sequence that can be derived from another sequence 
// by deleting some elements without changing the order of the remaining elements.
/* The longest common subsequence (LCS) problem is the problem of finding the 
longest subsequence common to all sequences in a set of sequences (often just two 
sequences). It differs from the longest common substring problem: unlike substrings,
 subsequences are not required to occupy consecutive positions within the original sequences. The longest common subsequence problem is a classic computer science problem, the basis of data comparison programs such as the diff utility, and has applications in bioinformatics. It is also widely used by revision control systems such as Git for reconciling multiple changes made to a revision-controlled collection of files.
*/

const longestCommSubseq = (s1, s2) => {
    
    const lcsHelper = (str1,str2, i, subSeq) => {
        // find the ss ending index in s1 and s2
        let k = 0;
        let i1, i2 = 0;
        while (k !== subStr.length) {
            i1 = s1.indexOf(subStr[k], i1)
            i2 = s2.indexOf(subSeq[k], i2)
            k++
        }
        //case where we dont keep i 1+ 1 element in substr
        if (str1.length === i1 + 1 || str2.length === i2 + 1) {

        }

        //case where we keep i1 + 1 element in substr

        
    }
}