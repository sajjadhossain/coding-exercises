/*
* jshint node:true, mocha:true
*/
var assert = require('chai').assert,
    _ = require('lodash'),
    isPrimeNumber = require('../../../modules/isPrimeNumber');
    testData = [
        {
            'input': 1,
            'result': false
        },
        {
            'input': 4,
            'result': false
        },
        {
            'input':  3,
            'result': true
        },
        {
            'input':  20,
            'result': false
        },
        {
            'input':  199,
            'result': true
        }
    ];

describe('is prime number', function () {
    _.forEach(testData, function (data) {
        it('isPrimeNumber(' + data.input + ')' + ' => ' + data.result, function() {
            assert(
                isPrimeNumber(data.input) === data.result,
                '\n     Expected Result: ' + data.result + '\n     Actual Result: ' + isPrimeNumber(data.input)
            );
        });
    });
});
