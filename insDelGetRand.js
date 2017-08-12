// a class with insert delete and get Random

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.randSet = {};
    this.randList = [];
    this.len = 0; 
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.randSet[val]) {
        this.randSet[val] = this.len;
        this.randList[this.len] = val;
        this.len++;
        return true;
    } else {
        return false;
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.randSet[val]) {
        return false;
    } else {
        this.randList[this.randSet[val]] = undefined;
        delete this.randSet[val];
        // this.len--;
        return true;
    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let objKeys = Object.keys(this.randSet);
    console.log(this.randSet);
    return this.randList[Math.floor(Math.random() * objKeys.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

let rs = new RandomizedSet();
console.log(rs.insert(3));
console.log(rs.insert(3));
console.log(rs.remove(4));
console.log(rs.remove(3));
console.log(rs.insert(3));
console.log(rs.getRandom());