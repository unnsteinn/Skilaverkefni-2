// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
const getNthCharacterInArray = (a, n) => {
  return a[n - 1];
};

//Test cases:
console.log("Array-dæmi 1:");
console.log(getNthCharacterInArray([1, 2, 3, 4, 5], 3)); // Expected 3
console.log(getNthCharacterInArray([10, 9, 8, 7, 6], 5)); // Expected 6
console.log(getNthCharacterInArray([7, 2, 1, 6, 3], 1)); // Expected 7

// ========================================

// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
// Tip: use the array prototype function slice()
const removeFirstThreeElements = (a) => {
  return a.slice(3);
};

//Test cases:
console.log("Array-dæmi 2:");
console.log(removeFirstThreeElements([1, 2, 3, 4])); // Expected [4]
console.log(removeFirstThreeElements([5, 4, 3, 2, 1, 0])); // Expected [2, 1, 0]
console.log(removeFirstThreeElements([99, 1, 1])); // Expected []

// ========================================

// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
// Tip: use the array prototype function slice()
const removeLastNElements = (a, n) => {
  return a.slice(-n);
};

//Test cases:
console.log("Array-dæmi 3:");
console.log(removeLastNElements([1, 2, 3, 4, 5], 2)); // Expected [4, 5]
console.log(removeLastNElements([1, 2, 3], 6)); // Expected [1, 2, 3]
console.log(removeLastNElements([1, 2, 3, 4, 5, 6, 7, 8], 3)); // Expected [6, 7, 8]

// ========================================
// Write a function that takes an array (a) as argument
// Return the number of elements in a
// Tip: How do you find the length of an array?
const countNumberOfElements = (a) => {
  return a.length;
};

//Test cases:
console.log("Array-dæmi 4:");
console.log(countNumberOfElements([1, 2, 2, 4])); // Expected 4
console.log(countNumberOfElements([9, 9, 9])); // Expected 3
console.log(countNumberOfElements([4, 3, 2, 1, 0])); // Expected 5
// ========================================

// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
// Tip: There are multiple ways to solve this e.g.
// - Use .filter() to filter only negative numbers, and count them
// - Use .forEach() to iterate through all numbers and count negatives

const countNumberOfNegativeValues = (a) => {
  const negativeNumbers = a.filter((num) => num < 0);
  return negativeNumbers.length;
};

//Test cases:
console.log("Array-dæmi 5:");
console.log(countNumberOfNegativeValues([1, -2, 2, -4])); // Expected 2
console.log(countNumberOfNegativeValues([0, 9, 1])); // Expected 0
console.log(countNumberOfNegativeValues([4, -3, 2, 1, 0])); // Expected 1

// ========================================

// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers
// Tip: forEach, c-style loop (or even .reduce() for the brave)
const calcSumOfArrayOfNumbers = (a) => {
  let sum = 0;
  a.forEach((num) => {
    sum += num;
  });
  return sum;
};

//Test cases:
console.log("Array-dæmi 6:");
console.log(calcSumOfArrayOfNumbers([10, 100, 40])); // Expected 150
console.log(calcSumOfArrayOfNumbers([10, 100, 1000, 1])); // Expected 1111
console.log(calcSumOfArrayOfNumbers([-50, 0, 50, 200])); // Expected 200

// ========================================
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
// Tip: forEach, c-style loop (or even .reduce() for the brave)
// to get the sum, then divide by number of elements in array
const calcAvgOfArrayOfNumbers = (arr) => {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum / arr.length;
};

//Test cases:
console.log("Array-dæmi 7:");
console.log(calcAvgOfArrayOfNumbers([10, 100, 40])); // Expected 50
console.log(calcAvgOfArrayOfNumbers([10, 100, 1000])); // Expected 370
console.log(calcAvgOfArrayOfNumbers([-50, 0, 50, 200])); // Expected 50

// ========================================
// Write a function that takes an array of strings as argument
// Return the longest string
// Tip: It's possible to get length of string with .length
// E.g. 'Gunnsteinn'.length = 10
const getLongestStringFromArray = (arr) => {
  let longestString = "";
  arr.forEach((str) => {
    if (str.length > longestString.length) {
      longestString = str;
    }
  });
  return longestString;
};

//Test cases:
console.log("Array-dæmi 8:");
console.log(getLongestStringFromArray(["help", "me"])); // Expected 'help'
console.log(getLongestStringFromArray(["I", "need", "candy"])); // Expected 'candy'

// ========================================
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
// Tip: STRICTLY equal, ====
const areAllEqual = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      return false;
    }
  }
  return true;
};

//Test cases:
console.log("Array-dæmi 9:");
console.log(areAllEqual([true, true, true, true])); // Expected true
console.log(areAllEqual(["test", "test", "test"])); // Expected true
console.log(areAllEqual([1, 1, 1, 2])); // Expected false
console.log(areAllEqual(["10", 10, 10, 10])); // Expected false
// ========================================
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
// Tip: Make use of the spread syntax (...), as the parameters suggest
const mergeAllArrays = (...arrays) => {
  return arrays.flat();
};

//Test cases:
console.log("Array-dæmi 10:");
console.log(mergeAllArrays([1, 2, 3], [4, 5, 6])); // Expected [1, 2, 3, 4, 5, 6]
console.log(mergeAllArrays(["a", "b", "c"], [4, 5, 6])); // Expected ['a', 'b', 'c', 4, 5, 6]
console.log(mergeAllArrays([true, true], [1, 2], ["a", "b"])); // Expected [true, true, 1, 2, 'a', 'b']
