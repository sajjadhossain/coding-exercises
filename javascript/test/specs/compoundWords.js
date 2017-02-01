var chai = require('chai');
var _ = require('lodash');
var wordsToTest = {
  1: {
    input: 'shut',
    result: false,
    words: ''
  },
  2: {
    input: 'shutter',
    result: false,
    words: ''
  },
  3: {
    input: 'stock',
    result: false,
    words: ''
  },
  4: {
    input: 'shutterstock',
    result: true,
    words: 'shut,shutter,stock'
  }
}

describe('is compound word', function() {
  var isCompoundWord = require('../../compoundWords').isCompoundWord;
  var words = [];

  _.forEach(wordsToTest, function (word) {
    words.push(word.input);
  });

  _.forEach(wordsToTest, function(word) {
    it('isCompoundWord(' + word.input + ')' + ' => ' + word.result, function() {
      chai.assert(isCompoundWord(word.input, words) === word.result, 'Expected ' + isCompoundWord(word.input, words) + ' to equal ' + word.result);
    });
  });
});

describe('return compound words', function() {
  var returnCompoundWords = require('../../compoundWords').returnCompoundWords;
  var words = [];

  _.forEach(wordsToTest, function (word) {
    words.push(word.input);
  });

  _.forEach(wordsToTest, function(word) {
    it('returnCompoundWords(' + word.input + ')' + ' => ' + word.words, function() {
      chai.assert(returnCompoundWords(word.input, words) === word.words, 'Expected ' + returnCompoundWords(word.input, words) + ' to equal ' + word.words);
    });
  });
});
