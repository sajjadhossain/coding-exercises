/*
 * jshint node:true, mocha:true
 */
var assert = require('chai').assert,
    _ = require('lodash'),
    greatestCommonDenominator = require('../../../modules/greatestCommonDenominators'),
    testData = [
        {
            input: [10,20],
            output: 10
        },
        {
            input: [1,2,3,4,5],
            output: 1
        },
        {
            input: [2,4,6],
            output: 2
        }
    ];

describe('for each', function () {
    _.forEach(testData, function (data) {
        it('greatestCommonDenominatorOfTwo(' + data.input + ')' + ' => ' + data.input, function () {
            assert(
                greatestCommonDenominator(data.input) === data.output,
                '\n     Expected Result: ' + data.output + '\n     Actual Result: ' + greatestCommonDenominator(data.input)
            );
        });
    });
});
