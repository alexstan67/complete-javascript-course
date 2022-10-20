// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Coding challenge #1
const arr = [17, 21, 23];

function printForecast(arr) {
  // Variables init
  let result = "...";

  // We iterate in the array
  for (let i = 0; i < arr.length; i++) {
    // We store the temperature
    let temp = arr[i];

    // We write the string for current temperature
    const currentData = `${temp}°C in ${i + 1} days ...`;
    // We concat the result into a main string
    result += currentData;
  }
  console.log(result);
}

console.log(printForecast(arr));
