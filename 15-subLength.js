/*
Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0
 */

const subLength = (word, char) => {
  if (counter(word, char) === 2) {
    return findRange(word, char);
  } else {
    return 0;
  }
};

const counter = (word, char) => {
  let count = 0;
  for (let index = 0; index < word.length; index++) {
    if (word[index] === char) count++
  }
  return count;
};

const findRange = (word, char) => {
  let posArr = [];
  for (let index = 0; index < word.length; index++) {
    if (word[index] === char) {
      posArr.push(index);
    }
  }
  let result = posArr[1] - posArr[0] + 1;
  return result;
};

console.log(subLength('summer', 'm'));