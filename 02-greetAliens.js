/*
Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!”
*/

// Write your code here:

// usinf forEach
/* const greetAliens = arr => {
  arr.forEach(name => {
    console.log(`Oh powerful ${name}, we humans offer our unconditional surrender!`);
  })
} */

// using for in
const greetAliens = arr => {
  for (const index in arr) {
    console.log(`Oh powerful ${arr[index]}, we humans offer our unconditional surrender!`);
  }
}





// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

