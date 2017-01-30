// Objective: Write a function that reverse orders a passed string by space

// A constant for a function that reorders a given string
module.exports = function reverse(string) {
  // Split the string
  var splitByLetter = string.split('');
  // Then reverse by letter, returned as an object
  var reverseSplitByLetter = splitByLetter.reverse();
  // Join after reversing and splitting by letter
  var reverseSplitByLetterAndJoin = reverseSplitByLetter.join('');

  // Return the reversed and split by letter in the console
  return reverseSplitByLetterAndJoin;
};
