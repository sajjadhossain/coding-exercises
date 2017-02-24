var assert = require('chai').assert,
    _ = require('lodash'),
    compoundWords = require('../../../modules/compoundWords'),
    isCompoundWord = compoundWords.isCompoundWord,
    returnCompoundWords = compoundWords.returnCompoundWords,
    testData = [
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
    ],
    dictionary;

describe('is compound word', function() {
    dictionary = [];

    _.forEach(testData, function (data) {
        dictionary.push(data.input);
    });

    _.forEach(testData, function(data) {
        it('isCompoundWord(' + data.input + ', [' + dictionary + '])' + ' => ' + data.result, function () {
              assert(
                  isCompoundWord(data.input, dictionary) === data.result,
                  'Expected Result:' + data.result + '\n     Actual Result: ' + isCompoundWord(data.input, dictionary)
              );
        });
    });
});

describe('return compound words', function() {
    dictionary = [];

    _.forEach(testData, function (data) {
        dictionary.push(data.input);
    });

    _.forEach(testData, function(data) {
        it('returnCompoundWords(' + data.input + ', [' + dictionary + '])' + ' => ' + data.words, function () {
            assert(
                returnCompoundWords(data.input, dictionary) === data.words,
                'Expected Result:' + data.words + '\n     Actual Result: ' + returnCompoundWords(data.input, dictionary)
            );
        });
    });
});
