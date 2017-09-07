// find intersection of 2 LL if they exist -> return intersecting node

// if we know lengths, skip difference in legnths from the longest LL and compare nodes on both LL in a loop

// if both LL are to be equal, compare all nodes on a sequence

// else, loop through each LL once and find length, also, check to see if last noce is the same.
//if Last noce is the same, they do intersect, now skip some nodes on the longest LL and compare the 2 as if they were euqal length LLs

//assuming no lengths given
const intersection = (ll1, ll2) => {
    let length1 = 0;
    let length2 = 0;
    let cur1 = ll1;
    let cur2 = ll2;

    while (cur1.next !== null && cur2.next !== null) {
        cur1.next;
        cur2.next;
        length1++;
        length2++;
    }
    while (cur1.next !== null) {
        cur1.next;
        length1++;
    }
    while (cur2.next !== null) {
        cur2.next;
        length2++;
    }

    if (cur1 !== cur2) {
        return null;
    } 
    length1++;
    length2++;
    cur1 = ll1;
    cur2 = ll2;
    if (length1 > length2) {
        let diff = length1 - length2;
        while (diff !== 0) {
            cur1.next;
            diff--;
        }
    } else {
        let diff = length2 - length1;
        while (diff !== 0) {
            cur2.next;
            diff--;
        }
    }

    //compare the 2
    let found = false;
    while (!found) {
        if (cur1 === cur2) {
            found = true;
        } else {
            cur1.next;
            cur2.next;
        }
    }
    return cur1;
}