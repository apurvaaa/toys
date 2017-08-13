// i : 2 strings
// o : true if strings differ from each other by at most 1 mistake, else false
// c : 
// e : 
// 3 ways there can be a mistake = extra 1 char, missing 1 char, replaced char

const oneAway = (str1, str2) => {
    if ((str1.length > str2.length + 1) || (str1.length < str2.length - 1)) {
        return false;
    }
    let mistakes = 0;
    let j = 0;
    let i = 0;
    while (i < str1.length && j < str2.length) {
        if (str1[i] === str2[j]) {
            i++;
            j++;
        } else {
            if (str1.length > str2.length) {
                i++;
                mistakes++;
            } else if (str1.length < str2.length) {
                j++;
                mistakes++;
            } else {
                i++;
                j++;
                mistakes++;
            }
        }
        if (mistakes === 2) {
            return  false;
        }
    }
    return true;
}


// recursively (incomplete):   |length(a[i:]) - length(b[j:])| + mistakes < 2

const oneAwayRecursive = (str1, str2, i = 0, j = 0, mistakes = 0) => {
    if ((str1.length > str2.length + 1) || (str1.length < str2.length - 1)) {
        return false;
    }
    if (mistakes === 2) return false;
    if (i === str1.length && j !== str2.length && mistakes === 1) return false;
    if (j === str2.length && i !== str1.length && mistakes === 1) return false;
    if (str1[i] === str2[j]) return oneAwayRecursive(str1, str2, i++, j++, mistakes);
    else {
        return oneAwayRecursive(str1, str2, i++, j, mistakes++) || oneAwayRecursive(str1, str2, i, j++, mistakes++) || oneAwayRecursive(str1, str2, i++, j++, mistakes++);
    }
}

// extension: we have to check user input word with the dictionary we have. What are teh ways we can implement it? Which is most efficient?


// answer: 
// 1 . we can run all the words in the dictionary through the oneaway function written above, comparing it with the word we have as user input - big constant * O(n)
// 2 . we can generateall possible 1 off mistakes from the given user input word. and check to see if they are in the dictionary. Assuming dictionary is a hash table. - O(n * #ofAlphabets)
// 3 . Assuming we will have to take a lot of inputs, we can condense the dictionary to a trie holding only just the words and no meanings. each node will be a char. and chars overlap on many words. Now we can generate all possible one off words from the words one the trie and add them to the trie. This will make it O(n) every time an input is entered. n = length of input.