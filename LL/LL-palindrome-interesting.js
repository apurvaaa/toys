// check if LL is a palindrome or not

// case 1 : we know the length
    // iterative - use a stack to go to the middle of the LL 
    // then for the rest, compare LL data with popped data from stack

// case 2 : we dont know the length
    // iterative - go through LL to get length
    // then do the same as above

    // iterative 2 - generate a reverse clone of current LL
    // then compare half the LL

    // recursive - go through LL to find legth
    // send subsets of LL to recursively called functions, and match from middle elements to outer elements

    // recursive 2 - pass head to recursive calls, also, pass current.next
    // when we reach last element, we compare it with head and if true, return head.next
    // else return null
    // after recursive call, if null/true is returned, return null/true, whatever was returned
    // else, if current node !== returnedNode && current node value === returned node value, return retunedNode.next
    // if current node === returned node  || returned node . next === current node, return true;


    // implementing the last option
    const palindrome = (head, cur = head) => {
        
        //base case
        if (head === null) {
            return head;
        } else if (cur.next === null) {
            if (cur.value === head.value) {
                return head.next;
            } else {
                return null;
            }
        }
        let solution = palindrome(head, cur.next);
        if (solution === null || solution === true) {
            return solution;
        } else {
            if (solution !== cur && solution.value === cur.value) {
                return solution.next;
            } else if (solution === cur || solution.next === cur) {
                return true;
            } else {
                return null;
            }
        }

    }