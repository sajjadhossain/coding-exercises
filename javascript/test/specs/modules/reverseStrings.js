/*
* jshint node:true, mocha:true
*/
var assert = require('chai').assert,
    _ = require('lodash'),
    reverseString = require('../../../modules/reverseString.js'),
    reverseStringByLetters = reverseString.byLetter,
    reverseStringBySpace = reverseString.bySpace,
    reverseStringByLettersWithoutMethods = reverseString.byLetterWithoutMethods,
    reverseStringBySpaceWithoutMethods = reverseString.bySpaceWithoutMethods,
    testDataByLetter = [
        {
            'reverse': '.ecnetnes a si sihT',
            'expected': 'This is a sentence.',
        },
        {
            'reverse': '.ecnetnes rehtona si sihT',
            'expected': 'This is another sentence.'
        },
        {
            'reverse': '.ecnetnes rerehtona si sihT',
            'expected': 'This is anotherer sentence.'
        }
    ],
    testDataBySpace = [
        {
            'reverse': 'sentence. a is This',
            'expected': 'This is a sentence.',
        },
        {
            'reverse': 'sentence. another is This',
            'expected': 'This is another sentence.'
        },
        {
            'reverse': 'sentence. anotherer is This',
            'expected': 'This is anotherer sentence.'
        }
    ];

describe('reverse string by letter', function() {
    _.forEach(testDataByLetter, function (data) {
        it('reverseStringByLetters(' + data.reverse + ')' + ' => ' + data.expected, function() {
            assert(
                reverseStringByLetters(data.reverse) === data.expected,
                '\n     Expected Result: ' + data.expected + '\n     Actual Result: ' + reverseStringByLetters(data.reverse)
            );
        });
    });
});

describe('reverse string by space', function() {
    _.forEach(testDataBySpace, function (data) {
        it('reverseStringBySpace(' + data.reverse + ')' + ' => ' + data.expected, function() {
            assert(
                reverseStringBySpace(data.reverse) === data.expected,
                '\n     Expected Result: ' + data.expected + '\n     Actual Result: ' + reverseStringBySpace(data.reverse)
            );
        });
    });
});

describe('reverse string by letters without methods', function() {
    _.forEach(testDataByLetter, function (data) {
        it('reverseStringByLettersWithoutMethods(' + data.reverse + ')' + ' => ' + data.expected, function() {
            assert(
                reverseStringByLettersWithoutMethods(data.reverse) === data.expected,
                '\n     Expected Result: ' + data.expected + '\n     Actual Result: ' + reverseStringByLettersWithoutMethods(data.reverse)
            );
        });
    });
});

describe('reverse string by space without methods', function() {
    _.forEach(testDataBySpace, function (data) {
        it('reverseStringBySpaceWithoutMethods(' + data.reverse + ')' + ' => ' + data.expected, function() {
            assert(
                reverseStringBySpaceWithoutMethods(data.reverse) === data.expected,
                '\n     Expected Result: ' + data.expected + '\n     Actual Result: ' + reverseStringBySpaceWithoutMethods(data.reverse)
            );
        });
    });
});
