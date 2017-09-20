/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

/*var recursiveRounds = function(sequenceOfThrows, throws, rounds) {
  var newSequence = [];	
  var singleSeq = [];
  for(var i = 0; i < sequenceOfThrows.length; i++) {
    for (var j = 0; j < throws.length; j++) {
      singleSeq = sequenceOfThrows[i].concat(throws[j]);
      newSequence.push(singleSeq);
    }
  }

  if (rounds === 1) {
    return newSequence;
  }
  return recursiveRounds(newSequence, throws, --rounds);
  
}

var rockPaperScissors = function(rounds) {
	var sequenceOfThrows = [['rock'], ['paper'], ['scissors']];
  var throws = ['rock' , 'paper', 'scissors'];
  if (rounds === undefined) {
  	rounds = 3;
  } 
  
  return recursiveRounds(sequenceOfThrows, throws, --rounds);

}*/
// bottom up iterative
var rockPaperScissors = function (rounds) {
    let round = rounds || 3;
    let seed = ['Rock', 'Paper', 'Scissors'];
    let result = [['Rock'], ['Paper'], ['Scissors']];
    
    while (--round > 0) {
      let previous = result;
      result = []; 
  
      for (let ele of previous) {
        for (let s of seed) {
          let e = ele.slice();
          e.push(s);
          result.push(e);
        }
      }
    }
    return result;
  }

  // TODO: top down recursive