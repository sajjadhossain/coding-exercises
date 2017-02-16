// TODO
// Objective 1: Return true or false if objects match
// Objective 2: Return difference of objects passed as parameters to function

// Using lodash for part 2 of this exercise
var _ = require('lodash');

module.exports = {
  // 1. A module that compares and returns boolean for two objects passed
  doObjectsEqual: function(object1, object2) {
    // Return the result from the strict equal statement
    return JSON.stringify(object1) === JSON.stringify(object2);
  },
  // 2. A module that compares and returns the difference for two objects passed
  listObjectDifferences: function(object1, object2) {
    // Reduce the the first object
    var reduceConcatAndReturnDifferentKey = _.reduce(object1, function(result, value, key) {
        // Return the value from _.isEqual foreach key in the second object
        return _.isEqual(value, object2[key]) ?
            // Push the key to an array
            result : result.concat(key);
    }, []);

    // Return the array of diffenciating keys as a string
    return reduceConcatAndReturnDifferentKey.toString();
  }
}
