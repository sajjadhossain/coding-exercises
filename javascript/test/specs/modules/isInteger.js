/*
 * jshint node:true, mocha:true
 */
var assert = require('chai').assert,
    _ = require('lodash'),
    isInteger = require('../../../modules/isInteger').isInteger,
    isIntegerWithoutMethods = require('../../../modules/isInteger').isIntegerWithoutMethods,
    testData = [
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

describe('is integer', function () {
    _.forEach(testData, function (data) {
        it('isInteger(' + data.input + ')' + ' => ' + data.result, function() {
            assert(
                isInteger(data.input) === data.result,
                'Expected Result: ' + data.result + ' Assert Result: ' + isInteger(data.input)
            );
        });
    });
});

describe('is integer without methods', function () {
    _.forEach(testData, function (data) {
        it('isIntegerWithoutMethods(' + data.input + ')' + ' => ' + data.result, function() {
            assert(
                isIntegerWithoutMethods(data.input) === data.result,
                'Expected Result: ' + data.result + ' Assert Result: ' + isIntegerWithoutMethods(data.input)
            );
        });
    });
});
