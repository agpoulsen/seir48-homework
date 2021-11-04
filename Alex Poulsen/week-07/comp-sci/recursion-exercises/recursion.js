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

function coinFlips( n, resultArr=[] ){
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"

  if (n === 0) {
    return resultArr;
  };
  resultArr.push('H')
  resultArr.push('T')
  return coinFlips( n - 1, resultArr );
};

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
