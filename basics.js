// Write a function that takes two numbers (a and b) as argument
//  Sum a and b
// Return the result
const calcSum = (a, b) => {
  return a + b;
};
// Test cases:
console.log("Dæmi 1:");
console.log(calcSum(1, 2)); //Expected 3
console.log(1, 10); //Expected 11
console.log(99, 1); //Expected 100

// ========================================

// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
const strictEquality = (a, b) => {
  return a === b;
};

// Test cases:
console.log("Dæmi 2:");
console.log(strictEquality(2, 3)); // Expected false
console.log(strictEquality(3, 3)); // Expected true
console.log(strictEquality(1, "1")); // Expected false
console.log(strictEquality("10", "10")); // Expected true

// ========================================

// Write a function that takes a value as argument
// Return the type of the value
const getTypeOfValue = (a) => {
  return typeof a;
};

// Test cases:
console.log("Dæmi 3:");
console.log(getTypeOfValue(1)); //Expected 'number'
console.log(getTypeOfValue(false)); //Expected 'boolean'
console.log(getTypeOfValue({})); //Expected 'object'
console.log(getTypeOfValue(null)); //Expected 'object'
console.log(getTypeOfValue("string")); // Expected 'string'
console.log(getTypeOfValue(["array"])); //Expected 'object'
/*
Test cases:
myFunction(1) Expected 'number'
myFunction(false) Expected 'boolean'
myFunction({}) Expected 'object'
myFunction(null) Expected 'object'
myFunction('string') Expected 'string'
myFunction(['array']) Expected 'object'
*/

// ========================================

// Write a function that takes a string (a) as argument
// Return the 1st character of the strgin a
// Tip: look up the string prototype function slice() or split()
const getFirstChar = (a, n) => {
  return a.slice(0, 1);
};
//Test Cases:
console.log("Dæmi 4:");
console.log(getFirstChar("abcd")); //  Expected 'a'
console.log(getFirstChar("zyxbwpl")); //Expected 'z'
console.log(getFirstChar("gfedcba")); // Expected 'g'

// ========================================

// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
// Tip: look up the string prototype function slice() or split()
const getNthChar = (a, n) => {
  return a[n - 1];
};
console.log("Dæmi 5:");

// Test Cases:
console.log("Dæmi 5:");

console.log(getNthChar("abcd", 1)); // Expected 'a'
console.log(getNthChar("zyxbwpl", 5)); // Expected 'w'
console.log(getNthChar("gfedcba", 3)); // Expected 'e'

// ========================================

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
// Tip: look up the string prototype function slice() or split()
const extractFirstHalfOfString = (a) => {
  const midpoint = Math.ceil(a.length / 2);
  return a.slice(0, midpoint);
};

console.log("Dæmi 6:");

console.log(extractFirstHalfOfString("abcdefgh")); // Expected 'abcd'
console.log(extractFirstHalfOfString("1234")); // Expected '12'
console.log(extractFirstHalfOfString("gedcba")); // Expected 'ged

// ========================================

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
const removeLastNCharactersOfString = (a) => {
  return a.slice(0, -3);
};
// Test Cases:
console.log("Dæmi 7:");

console.log(removeLastNCharactersOfString("abcdefg")); // Expected 'abcd'
console.log(removeLastNCharactersOfString("1234")); // Expected '1'
console.log(removeLastNCharactersOfString("fgedcba")); // Expected 'fged'

// ========================================

// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
// Tip: How does the % operator work?
const checkIfNumberIsEven = (a) => {
  return a % 2 === 0;
};

// Test Cases:
console.log("Dæmi 8:");

console.log(checkIfNumberIsEven(10)); // Expected true
console.log(checkIfNumberIsEven(-4)); // Expected true
console.log(checkIfNumberIsEven(5)); // Expected false
console.log(checkIfNumberIsEven(-111)); // Expected false

// ========================================

// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
const getPercentageOfNumber = (a, b) => {
  return (b / 100) * a;
};

// Test Cases:
console.log("Dæmi 9:");

console.log(getPercentageOfNumber(100, 50)); // Expected 50
console.log(getPercentageOfNumber(10, 1)); // Expected 0.1
console.log(getPercentageOfNumber(500, 25)); // Expected 125

// ========================================

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip:
// - Mind the order
// - Power operator is either Math.pow or **
//   - e.g. 2**2 = 4
const useAllTheOperators = (a, b, c, d, e, f) => {
  const step1 = a + b;
  const step2 = step1 - c;
  const step3 = step2 * d;
  const step4 = step3 / e;
  const result = Math.pow(step4, f);
  return result;
};

// Test Cases:
console.log("Dæmi 10:");

console.log(useAllTheOperators(6, 5, 4, 3, 2, 1)); // Expected 10.5
console.log(useAllTheOperators(6, 2, 1, 4, 2, 3)); // Expected 2744
console.log(useAllTheOperators(2, 3, 6, 4, 2, 3)); // Expected -8

// ========================================
