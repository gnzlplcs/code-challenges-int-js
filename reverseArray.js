/*
Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.
 */

// Write your code here:

const reverseArray = arr => {
  let result = [];
  arr.forEach(el => result.unshift(el));
  return result;
}


// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence))
// Should print ['This', 'will', 'all', 'make', 'sense.'];