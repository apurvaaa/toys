// Given a binary tree t and an integer s, determine whether there is a root 
// to leaf path in t such that the sum of vertex values equals s.
//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
const hasPathWithGivenSum = (t, s) => {
    if (t === null) return false;
    // console.log(t.value, s)
    if (s === t.value && t.left === null && t.right === null) {
        return true;
    } 

    if (hasPathWithGivenSum(t.left, s - t.value)) 
        return true;
    else if (hasPathWithGivenSum(t.right, s - t.value)) 
        return true;
    return false;
}

let t = {
    "value": 4,
    "left": {
        "value": 1,
        "left": {
            "value": -2,
            "left": null,
            "right": {
                "value": 3,
                "left": null,
                "right": null
            }
        },
        "right": null
    },
    "right": {
        "value": 3,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": {
                "value": -4,
                "left": null,
                "right": null
            },
            "right": {
                "value": -3,
                "left": null,
                "right": null
            }
        }
    }
}
let t2 = {
    "value": 4,
    "left": {
        "value": 1,
        "left": {
            "value": -2,
            "left": null,
            "right": {
                "value": 3,
                "left": null,
                "right": null
            }
        },
        "right": null
    },
    "right": {
        "value": 3,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": {
                "value": -2,
                "left": null,
                "right": null
            },
            "right": {
                "value": -3,
                "left": null,
                "right": null
            }
        }
    }
}

console.log(hasPathWithGivenSum(t, 7));
console.log(hasPathWithGivenSum(t2, 7));