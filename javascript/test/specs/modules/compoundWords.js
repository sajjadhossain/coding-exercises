var chai = require('chai');
var _ = require('lodash');
var wordsToTest = [
  {
    input: 'shut',
    result: false,
    words: ''
  },
  {
    input: 'shutter',
    result: false,
    words: ''
  },
  {
    input: 'stock',
    result: false,
    words: ''
  },
  {
    input: 'shutterstock',
    result: true,
    words: 'shut,shutter,stock'
  },
  {
    input: 'snap',
    result: false,
    words: ''
  },
  {
    input: 'chat',
    result: false,
    words: ''
  },
  {
    input: 'snapchat',
    result: true,
    words: 'snap,chat'
  }
];

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
