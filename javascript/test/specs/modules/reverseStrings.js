var chai = require('chai');
var _ = require('lodash');
var stringsByLetterToTest = {
  1: {
      'reverse': '.ecnetnes a si sihT',
      'expected': 'This is a sentence.',
  },
  2: {
    'reverse': '.ecnetnes rehtona si sihT',
    'expected': 'This is another sentence.'
  },
  3: {
    'reverse': '.ecnetnes rerehtona si sihT',
    'expected': 'This is anotherer sentence.'
  }
};
var stringsBySpaceToTest = {
  1: {
      'reverse': 'sentence. a is This',
      'expected': 'This is a sentence.',
  },
  2: {
    'reverse': 'sentence. another is This',
    'expected': 'This is another sentence.'
  },
  3: {
    'reverse': 'sentence. anotherer is This',
    'expected': 'This is anotherer sentence.'
  }
};

describe('reverse string by letter', function() {
  _.forEach(stringsByLetterToTest, function(string) {
    var reverseStringByLetters = require('../../reverseString.js').byLetter;

    it('reverseStringByLetters(' + string.reverse + ')' + ' => ' + string.expected, function() {
      chai.assert(reverseStringByLetters(string.reverse) === string.expected, 'Expected ' + reverseStringByLetters(string.reverse) + ' to equal ' + string.expected)
    });
  });
});

describe('reverse string by space', function() {
  _.forEach(stringsBySpaceToTest, function(string) {
    var reverseStringBySpace = require('../../reverseString.js').bySpace;

    it('reverseStringBySpace(' + string.reverse + ')' + ' => ' + string.expected, function() {
      chai.assert(reverseStringBySpace(string.reverse) === string.expected, 'Expected ' + reverseStringBySpace(string.reverse) + ' to equal ' + string.expected)
    });
  });
});

describe('reverse string by letter without methods', function() {
  _.forEach(stringsByLetterToTest, function(string) {
    var reverseStringByLettersWithoutMethods = require('../../reverseString.js').byLetterWithoutMethods;

    it('reverseStringByLettersWithoutMethods(' + string.reverse + ')' + ' => ' + string.expected, function() {
      chai.assert(reverseStringByLettersWithoutMethods(string.reverse) === string.expected, 'Expected ' + reverseStringByLettersWithoutMethods(string.reverse) + ' to equal ' + string.expected)
    });
  });
});

describe('reverse string by space without methods', function() {
  _.forEach(stringsBySpaceToTest, function(string) {
    var reverseStringBySpaceWithoutMethods = require('../../reverseString.js').bySpaceWithoutMethods;

    it('reverseStringBySpaceWithoutMethods(' + string.reverse + ')' + ' => ' + string.expected, function() {
      chai.assert(reverseStringBySpaceWithoutMethods(string.reverse) === string.expected, 'Expected ' + reverseStringBySpaceWithoutMethods(string.reverse) + ' to equal ' + string.expected)
    });
  });
});