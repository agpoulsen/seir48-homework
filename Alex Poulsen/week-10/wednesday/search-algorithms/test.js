const myArray = [1,2,3,4,5,6,7,8,9,10];

function recursiveBinarySearch(arr, element, startIndex=0, endIndex=(arr.length-1)){

  console.log(startIndex, endIndex)

  if (startIndex === endIndex) {
    if ( startIndex === element ) {
      return startIndex;
    } else {
      return -1;
    }
  } else {
    const middleIndex = Math.floor( (startIndex + endIndex) / 2);
    console.log( startIndex, middleIndex, endIndex)
    if (arr[middleIndex] === element) {
      return middleIndex;
    }
    if ( element < middleIndex ) {
      return recursiveBinarySearch( arr, element, startIndex, middleIndex - 1 )
    } else {
      return recursiveBinarySearch( arr, element, middleIndex + 1)
    }
  }
    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
}

console.log(recursiveBinarySearch(myArray, 4))
