// Objective 1: Return true or false if the word is a compound word
// Objective 2: Return compound words from an object

// Using lodash for part 1 & 2 of this exercise
var _ = require('lodash');

module.exports = {
  isCompoundWord: function(word, words) {
    // Set to false
    var isCompound = false;
    // Construct an object
    var occurances = {};

    // For each words passed
    _.forEach(words, function(value, key) {
      if (word.match(value) != null && value != word) {
        // Construct an occurance by key
        occurances[key] = {};
        // Set the value to the array returned from .match()
        occurances[key] = word.match(value);
      }

      // If occurances.legnth is greater than 2 and the value from the dictionary is not the word passed with the function
      if (Object.keys(occurances).length > 2 && value != word) {
        // Set isCompound to true
        isCompound = true;
      }
    });

    return isCompound;
  },
  returnCompoundWords: function(word, words) {
    // Construct an array
    var compoundWords = [];
    // Construct an object
    var occurances = {};

    // For each words passed
    _.forEach(words, function(value, key) {
      if (word.match(value) != null && value != word) {
        // Construct an occurance by key
        occurances[key] = {};
        // Set the value to the array returned from .match()
        occurances[key] = word.match(value);
        // Push the word the compoundWords array
        compoundWords.push(occurances[key][0]);
      }
    });

    // If the compoundWords.length is greater than 1
    if (compoundWords.length > 1) {
      // return the array as a string
      return compoundWords.toString();
    } else {
      // else return an empty string
      return '';
    }
  }
}
