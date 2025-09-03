
function bubbleSort(arr) {

  let pass = true;

  while (pass) {
    pass = false;

    // Iterate through the array
    for (let i = 0; i < arr.length - 1; i++) {
      const currentValue = arr[i];
      const neighbor = arr[i + 1];

      // If the current value is greater than its neighbor to the right
      // Swap those values
      if (currentValue > neighbor) {
        [arr[i], arr[i + 1]] = [neighbor, currentValue];
        pass = true;
        // Do not move this console.log
        console.log(arr.join(","));
      }

    }
    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning
  }
}

module.exports = bubbleSort;