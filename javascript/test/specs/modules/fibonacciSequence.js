/*
 * jshint node:true, mocha:true
 */
var assert = require('chai').assert,
    fibonacciSequence = require('../../../modules/fibonacciSequence'),
    recursiveFibonacci = fibonacciSequence.recursiveFibonacci,
    loopedFibonacci = fibonacciSequence.loopedFibonacci,
    _ = require('lodash'),
    testData = {
        1: 1,
        2: 1,
        3: 2,
        4: 3,
        5: 5,
        6: 8,
        7: 13,
        8: 21,
        9: 34,
        10: 55
    };

describe('recursive fibonacci sequence', function () {
    _.forEach(testData, function(data, key) {
        it('recursiveFibonacci(' + key + ')' + ' => ' + data, function () {
            assert(
                recursiveFibonacci(key) === data,
                'Expected Result: ' + data + ' Actual Result: ' + recursiveFibonacci(key)
            );
        })
    });
});

describe('looped fibonacci sequence', function () {
    _.forEach(testData, function(data, key) {
        it('loopedFibonacci(' + key + ')' + ' => ' + data, function () {
            assert(
                loopedFibonacci(key) === data,
                'Expected Result: ' + data + ' Actual Result: ' + loopedFibonacci(key)
            );
        })
    });
});
