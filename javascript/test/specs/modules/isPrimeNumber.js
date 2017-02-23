/*
* jshint node:true, mocha:true
*/
var assert = require('chai').assert,
    _ = require('lodash'),
    isPrimeNumber = require('../../../modules/isPrimeNumber');
    testData = [
        1: {
            'input': 1,
            'result': false
        },
        2: {
            'input': 4,
            'result': false
        },
        3: {
            'input':  3,
            'result': true
        },
        4: {
            'input':  20,
            'result': false
        },
        5: {
            'input':  199,
            'result': true
        }
    ];

describe('is prime number', function() {
    _.forEach(valuesToTest, function(value) {
        it('isPrimeNumber(' + value.input + ')' + ' => ' + value.result, function() {
            assert(
                isPrimeNumber(value.input) === value.result,
                'Expected Result: ' + isPrimeNumber(value.input) + ' Actual Result: ' + value.result
            );
        });
    });
});
