// function coinFlips( n ){
//   // This function returns an array of all possible outcomes from flipping a coin N times.
//   // Input type: Integer
//   // For example, coinFlips(2) would return the following:
//   // ["HH", "HT", "TH", "TT"]
//   // H stands for Heads and T stands for tails
//   // Represent the two outcomes of each flip as "H" or "T"
//   const sides = ['H', 'T'];
//
//   if (n === 1) {
//     return ['H', 'T'];
//   }
//   else {
//     r = coinFlips(n - 1);
//     resultArr = [];
//     for (let i = 0; i < r.length; i++) {
//       for (let j = 0; j < sides.length; j++) {
//         resultArr.push(r[i] + sides[j])
//       }
//     }
//     return resultArr;
//   };
// };
//
// console.log(coinFlips(5));

function letterCombinations(arr){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
  if (arr == false) {
    return [''];
  }
  console.log(arr);
  r = letterCombinations(arr.slice(0, arr.length - 1));
  resultArr = [];
  arr.forEach(e => {

  });


  return resultArr;
};

console.log(letterCombinations(["a","b","c"]));
