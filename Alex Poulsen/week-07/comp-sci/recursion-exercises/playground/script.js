function coinFlips( n, resultArr=[] ){
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
  const sides = ['H', 'T']

  if (n === 0) {
    return resultArr;
  };
  
  return coinFlips( n - 1, resultArr );

};

console.log(coinFlips(2));
