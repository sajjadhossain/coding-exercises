// TODO Objective 1: Return true or false if the word is a compound word
// TODO Objective 2: Return compound words from an object

// Using lodash for part 1 & 2 of this exercise
var _ = require('lodash');

module.exports = {
  isCompoundWord: function(word, words) {
    _.forEach(words, function (iteratee) {
      console.log(iteratee + " is found at " + words.indexOf(word));
    })
  }
}
