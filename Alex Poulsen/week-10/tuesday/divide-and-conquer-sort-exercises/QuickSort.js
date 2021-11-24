function quickSort(arr){
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr.pop(); // can use .shift() as well

  // O(2N) less code
  const lessThan = arr.filter( element => element < pivot );
  const greaterThan = arr.filter( element => element >= pivot );

  //0(N) more code
  // const lessThan = [];
  // const greaterThan = [];
  //
  // arr.forEach((element) => {
  //   if ( element < pivot ) {
  //     lessThan.push(element);
  //   } else {
  //     greaterThan.push(element);
  //   }
  // });

  // ES6
  return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)]
}

module.exports = quickSort;
