// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax( arr, i=0, max=null ){
    // This function returns the largest number in a given array.
  if (i >= arr.length) {
    return max;
  };
  if (arr[i] > max || max === null) {
    max = arr[i];
  };
  return findMax(arr, i+1, max);
};

function factorial( n ){
  // This function returns the factorial of a given number

  if ( n === 1 ) {
    return 1;
  }
  return n * factorial( n - 1);
}

function fibonacci( n ){
  // This function returns the Nth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci( n - 2 ) + fibonacci( n - 1 );
};

function coinFlips( n ){
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
  // const sides = ['H', 'T'];
  //
  // if (n === 1) {
  //   return ['H', 'T'];
  // }
  // else {
  //   r = coinFlips(n - 1);
  //   resultArr = [];
  //   for (let i = 0; i < r.length; i++) {
  //     for (let j = 0; j < sides.length; j++) {
  //       resultArr.push(r[i] + sides[j])
  //     }
  //   }
  //   return resultArr;
  // };

  const combinations = [];

  //Helper function:
  const flip = function(soFar='') {
    if (soFar.length === n) {
      combinations.push( soFar ); // base case
    } else {
      flip(soFar + 'H');
      flip(soFar + 'T');
    };
  }
  flip();
  return combinations;
};


function letterCombinations(arr){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]

    if (arr === []) {
      return '';
    }
    else {
      rArr = arr.pop();
      console.log(rArr)
    };
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
