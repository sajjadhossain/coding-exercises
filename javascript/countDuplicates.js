// example input = [8, 1, 3, 1, 4, 5, 6, 3, 2, ]
// example output = 2

// n = 8 and numbers = [1, 3, 1, 4, 5, 6, 3, 2].

// The first line contains an integer, n, denoting the size of the numbers array.
// Each line increment of the n subsequent lines (where 0 ≤ increment < n) contains an integer describing the value of numbers i.

module.exports = function(input) {
  // The total number of integers passed through input
  var totalNumbers = input[0];
  // All duplicates will be pushed here
  var duplicates = [];
  // An object to write all numbers to
  var instances = {};

  for(var increment = 1; increment < totalNumbers + 1; increment++) {
    // The item to search for
    var item = input[increment];
    // Add to the instances object,
    // if more than one item found add one, else 1
    instances[item] = instances[item] >= 1 ? instances[item] + 1 : 1;
  }

  // if the instances is greater than 2, push it to duplicates array
  for(var key in instances) {
    if (instances[key] >= 2) {
      duplicates.push(instances[key]);
    }
  }

  // Legnth of duplicates
  var totalDuplicates = duplicates.length

  return totalDuplicates;
};
