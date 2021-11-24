function binarySearch(arr, element){

  let lowerIndex = 0;
  let upperIndex = arr.length - 1;

  while ( lowerIndex <= upperIndex ) {
    const middleIndex = lowerIndex + Math.floor(( upperIndex - lowerIndex ) / 2 );

    if ( element === arr[ middleIndex ] ) {
      return middleIndex;
    }

    if ( element < arr[middleIndex] ) {
      upperIndex = middleIndex - 1;
    } else {
      lowerIndex = middleIndex + 1
    }
  }
  return -1;
};

function recursiveBinarySearch(arr, element, startIndex=0, endIndex=(arr.length-1)){

  if (startIndex === endIndex) {
    if ( arr[startIndex] === element ) {
      return startIndex;
    } else {
      return -1;
    }
  } else {
    const middleIndex = Math.floor( (startIndex + endIndex) / 2);
    if (arr[middleIndex] === element) {
      return middleIndex;
    }
    if ( element < arr[middleIndex] ) {
      return recursiveBinarySearch( arr, element, startIndex, middleIndex - 1 )
    } else {
      return recursiveBinarySearch( arr, element, middleIndex + 1, endIndex )
    }
  }
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}
