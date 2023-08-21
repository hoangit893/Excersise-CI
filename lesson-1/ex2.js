/**
 * Write a ARROW function called displayFullName()
 * that takes an object as an argument and prints the person's full name.
 * Use OBJECT DESTRUCTURING in the function argument. And also,
 * use TEMPLATE strings when printing the full name.
 */

// Given object
const person = {
  first: "Elon",
  last: "Musk",
  twitter: "@elonmusk",
  company: "Space X",
};
// CODE FUNCTION HERE
let displayFullName = ({ first, last }) => {
  return `${first} ${last}`;
};

// Expect output: "Elon Musk"

console.log(displayFullName(person));
