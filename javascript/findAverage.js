// Objective: Return average of all numbers passed

// A module that returns the average of all numbers passed in an object
module.exports = function findAverage(numbers) {
  // Set total to 0
  var total = 0;
  // For each number in the array
  for(var i = 0; i < numbers.length; i++) {
      // return an auto incremented total
      total += numbers[i];
  }

  // Average equals total divided by the legnth of the array
  var average = total / numbers.length;

  return average;
};
