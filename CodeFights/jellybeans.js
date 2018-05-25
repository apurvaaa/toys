/*
TODO:
Kavi loves jellybeans (some more than others). On the dining room table is a row of jellybeans with a note underneath that reads “DO NOT EAT.” Kavi knows that as long as he does not take away any three consecutive jellybeans, no one will notice that they any are missing. Given a list values of numbers reflecting how much Kavi likes each jellybean in order, return the maximum sum of values Kavi can obtain without anyone knowing that jellybeans were taken.

Example
For values = [1, 2, 3, 4, 5, 6], the output should be jellybeans(values) = 16; Kavi should take all the jellybeans except those at positions 0 and 3.

*/

function jellybeans(values) {
    let max, maxIndex, index, count = 0, i , tagger = new Array(values.length) ;
    let copy = values.slice(0)
    tagger.fill(false, 0)
    let sortedAndUnique = copy.sort((a,b) => b - a)
    sortedAndUnique = sortedAndUnique.filter((ele, index) => {
        if (sortedAndUnique.indexOf(ele) === index) {
            return true
        } else 
            return false
    })
    i = 0
    while (i < sortedAndUnique.length) {
        max = sortedAndUnique[i];
        console.log(max)
        index = - 1;
        while (values.indexOf(max, index + 1) !== - 1) {
            maxIndex = values.indexOf(max, index + 1)
            console.log('index: ', maxIndex, tagger)
            if (!isThreeConsecutive(maxIndex, tagger) && !tagger[maxIndex]) {
                tagger[maxIndex] = true
                count += values[maxIndex]
            }
            index = maxIndex
        }
        
        i++
    }
    return count
}


const isThreeConsecutive = (index, tagger) => {
    if (index - 1 >= 0 && index - 2 >= 0) {
        if (tagger[index - 1] && tagger[index - 2]) {
            return true
        }
    }
    if (index - 1 >= 0 && index + 1 < tagger.length) {
        if (tagger[index - 1] && tagger[index + 1]) {
            return true
        }
    }
    if (index + 1 < tagger.length && index + 2 < tagger.length) {
        if (tagger[index + 1] && tagger[index + 2]) {
            return true
        }
    }
}

// tests
console.log(jellybeans([29, 81, 39, 98, 33, 35, 66, 49, 49, 55, 69, 25, 25, 56, 100, 46, 70, 27, 41, 23, 14, 40, 88, 47, 26, 10, 39, 16, 52, 74, 53, 86, 18, 19, 70, 94, 52, 58, 51, 78, 84, 45, 68, 22, 18, 47, 80, 70, 57, 81]))
// ans: 1932
