// my notes: walked through what I have been doing. Speak in depth about a project.
// I think I should have written unit tests for these questions.



// create factory so that this is true

var twoAdder = factory(4)
twoAdder(2) //6

function factory(x) {
  return function(y) {
    return x + y
  }
}


//Given:
/*  class Node {
    int value;
    Node left;
    Node right; 
  } */
  
  //Implement:
  /**
   * Prints the value for each node in the tree rooted at Node n, with some sort of separator between levels of the tree.
   */
  /*
  Example:
          1
         /     \
        2       3
      /   \       \
     4     5       6
          /  \     /
         7    8   9
  
  Output for above tree should be
  1
  2 3
  4 5 6
  7 8 9
  */
  let print = (n) => {
      
      //create queue
      let que = [n, -1]
      let collect = ''
      while (que.length > 0) {
          
          let ele = que.shift()
          if (ele !== -1) {
              collect += ele.value + ' '
              
              if (ele.left) {
              que.push(ele.left)
              
              }
              if (ele.right ) {
                  que.push(ele.right)
              }
          } else {
              console.log(collect)
              collect = ''
              if (que.length === 0) break;
              que.push(-1)
          }
      }
  } 
  