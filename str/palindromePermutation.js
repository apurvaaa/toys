const couldBePalindrome = (str) => {
    const hash = {};
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (hash[char] === undefined) {
            hash[char] = true;
        } else {
            delete hash[char];
        }
    }
    if ((Object.keys(hash)).length > 1)
        return false;
    else return true;
}