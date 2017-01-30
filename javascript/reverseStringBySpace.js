// Objective: Write a function that reverse orders a passed string by space

// A module that reverses a given string by space
module.exports = function reverseBySpace(string) {
  // Split the string
  var splitBySpace = string.split(' ');
  // Then reverse by space, returned as an object
  var reverseSplitBySpace = splitBySpace.reverse();
  // Join after reversing and splitting by space
  var reverseSplitBySpaceAndJoin = reverseSplitBySpace.join(' ');

  // Return the reversed and split by space in the console
  return reverseSplitBySpaceAndJoin;
};
