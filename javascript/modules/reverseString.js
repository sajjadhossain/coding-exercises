// Objective: Write a functions reverse orders a passed string by letter, space both with and without methods

var splitMethod = function(string, expression) {
  var result = [];
  var sentence = '';
  var stringKeyIterator = 0;
  var keyIterator = 0;
  var letter;

  while (stringKeyIterator < string.length) {
    letter = string[stringKeyIterator++];
    if (letter === expression) {
      keyIterator++;
      sentence = '';
    } else {
      sentence = sentence + letter
      result[keyIterator] = sentence;
    }
  }
  if (!result[0]) {
    result[0] = '';
  }

  return result;
};
var reverseMethod = function(param) {
    var result = '';
    var stringLength = param.length;

    for(var iterator = (stringLength - 1); iterator >= 0; iterator--) {
      if (typeof param === 'string') {
          result = result + param[iterator];
      } if (typeof param === 'object') {
        if(!result[0]) {
          result = result + param[iterator];
        } else {
          result = result + ' ' + param[iterator];
        }
      }
    }

    return result;
};

module.exports = {
  byLetter: function(string) {
    // Split the string
    var splitByLetter = string.split('');
    // Then reverse by letter, returned as an object
    var reverseSplitByLetter = splitByLetter.reverse();
    // Join after reversing and splitting by letter
    var reverseSplitByLetterAndJoin = reverseSplitByLetter.join('');

    // Return the reversed and split by letter in the console
    return reverseSplitByLetterAndJoin;
  },
  bySpace: function(string) {
    // Split the string
    var splitBySpace = string.split(' ');
    // Then reverse by space, returned as an object
    var reverseSplitBySpace = splitBySpace.reverse();
    // Join after reversing and splitting by space
    var reverseSplitBySpaceAndJoin = reverseSplitBySpace.join(' ');

    // Return the reversed and split by space in the console
    return reverseSplitBySpaceAndJoin;
  },
  byLetterWithoutMethods: function(string) {
    var reverseSplitByLetter = reverseMethod(string);

    return reverseSplitByLetter;
  },
  bySpaceWithoutMethods: function(string) {
    var splitBySpace = splitMethod(string, ' ');
    var reverseSplitBySpace = reverseMethod(splitBySpace);

    return reverseSplitBySpace;
  }
};
