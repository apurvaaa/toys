// String Compression: Implement a function to perform basic string compression using the counts of 
// repeated chars. 
// If compressed string is not smaller than the original, your program should return the original string
// Asume string has only upper and lower case letters


const stringCompression = (str) => {
    let char, times = 0, res = '';

    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            char = str[i]
            times++
        } else {
            if (char !== str[i] || i === str.length - 1) {
                // console.log(i)
                if (i === str.length - 1) times++
                res += char + times.toString()
                times = 1
                char = str[i]
            } else {
                times++
            }
        }
    }
    return res
}

console.log(stringCompression('abccddeeeee'))