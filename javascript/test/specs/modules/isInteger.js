/*
 * jshint node:true, mocha:true
 */
var assert = require('chai').assert,
    _ = require('lodash'),
    isInteger = require('../../../modules/isInteger').isInteger,
    isIntegerWithoutMethods = require('../../../modules/isInteger').isIntegerWithoutMethods,
    valuesToTest = [
        {
            'input': NaN,
            'result': false
        },
        {
            'input': undefined,
            'result': false
        },
        {
            'input': 3.1234,
            'result': false
        },
        {
            'input': '2',
            'result': false
        },
        {
            'input': '2.0',
            'result': false
        },
        {
            'input': 1,
            'result': true
        }
    ];

describe('is integer', function() {
    _.forEach(valuesToTest, function(value) {
        it('isInteger(' + value.input + ')' + ' => ' + value.result, function() {
            assert(
                isInteger(value.input) === value.result,
                'Expected Result: ' + value.result + ' Assert Result: ' + isInteger(value.input)
            );
        });
    });
});

describe('is integer without methods', function() {
    _.forEach(valuesToTest, function(value) {
        it('isIntegerWithoutMethods(' + value.input + ')' + ' => ' + value.result, function() {
            assert(
                isIntegerWithoutMethods(value.input) === value.result,
                'Expected Result: ' + value.result + ' Assert Result: ' + isIntegerWithoutMethods(value.input)
            );
        });
    });
});
