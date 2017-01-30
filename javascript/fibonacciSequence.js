// Objective: Write a function that takes an index and returns the fibonacci value

// A module that returns the fibonacci vallue of a given index
module.exports = function fibonacci(number) {
  // Base case if number is less than 2
  if (number <= 2) {
      return 1;
  }
  // Else if number is greater that add itself minus one and itself minus 2
  else {
      // Call itself
      return fibonacci(number - 1) + fibonacci(number - 2);
  }
};
