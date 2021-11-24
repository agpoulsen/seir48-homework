  function bubbleSort(array) {

    let needToIterate = true; // Assume the worst: iterate at least once.

    let end = array.length - 1;

    while (needToIterate) {
      needToIterate = false; // Assume we're done

      for (let i = 0; i < end; i++) {
        if (array[i] > array[i + 1]) {
          // const temp = array[i];
          // array[i] = array[i+1];
          // array[i+1] = temp;

          //parallel assignment
          //destructuring

          [ array[i], array[i+1] ] = [ array[i+1], array[i] ]; // destructuring for parallel assignment
          needToIterate = true;
        }
      }
      end--;
    }


  // for (let i = 0; i < array.length; i++) {
  //   for (let j = 0; j < array.length; j++) {
  //     if (array[j] > array[j + 1]) {
  //       let temp = array[j];
  //       array[j] = array[j + 1];
  //       array[j + 1] = temp;
  //     }
  //   }
  // }

    return array;
}

module.exports = bubbleSort;
