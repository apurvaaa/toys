// we have access to only a mid node in a LL. WHich has to be deleted.

// i : mid node in LL
// o : nothing returned
// c : 
// e :

let delMidNode = (midNode) => {

    let cur = midNode;
    cur.value = cur.next.value;
    cur.next = cur.next.next;
}