// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';

// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(1983));

/*
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -1, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const otherTemperatures = [2, 4, 6, 8, 1, 3, 5, -7, 20, 'error'];

// 1) Understanding the problem
// - what is amplitude? The difference between the highest an dlowest temperature
// - How to computer max and min temperatures?
// - What's a sensor error and what to do with it?

// 2) Breaking up the problem into sub-problem
// - How to ignore errors?
// - Find max value in temperature array ✔
// - Find min value in temperature array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2
// Function should now receive 2 arrays of temperatures

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? No, merge the arrays

// 2) Breaking up the problem into sub-problem
// - Merge 2 arrays

const calcTempAmplitudeNew = function (temps1, temps2) {
  // const array1 = ['a', 'b', 'c'];
  // const array2 = ['d', 'e', 'f'];
  // const array3 = array1.concat(array2);

  // console.log(array3);
  // // expected output: Array ["a", "b", "c", "d", "e", "f"]

  const temps = temps1.concat(temps2);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew(temperatures, otherTemperatures);
console.log(amplitudeNew);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees Celsius')),
    value: 10,
  };
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  console.log(temps);
  //   let max = temps[0];
  //   let min = temps[0];
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) Identify
console.log(amplitudeBug);
*/

// CODING CHALLENGE #1

const forecast1 = [17, 21, 23];
const forecast2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let day = 1;
  let report = '... ';
  for (let i = 0; i < arr.length; i++) {
    report +=
      day === 1
        ? `${arr[i]}°C in ${day} day ... `
        : `${arr[i]}°C in ${day} days ... `;
    day++;
  }
  return report;
};

const forecasts = printForecast(forecast1);
console.log(forecasts);
//
