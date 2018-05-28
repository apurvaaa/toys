// URLify: write a method to replace all spaces in a string with '%20'. You may 
// assume that the string has sufficient space at the end to hold the additional characters 
// and that you are given teh true length of the string

const URLify = (urlToBe) => {
    let pieces = urlToBe.split(' ');
    return pieces.join('%20')
} 
console.log(URLify('hello there. How are you ?'))