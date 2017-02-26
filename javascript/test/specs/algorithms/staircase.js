/*
 * jslint node:true, mocha:true
 */
var assert = require('chai').assert,
    staircase = require('../../../algorithms/staircase')
    _ = require('lodash'),
    testData = [
        {
            input: 3,
            output: '   #\n  ##\n ###'
        },
        {
            input: 1,
            output: ' #'
        }
    ];

describe('staircase', function () {
    _.forEach(testData, function (data) {
        it('print(' + data.input + ') => prints the required number of stairs', function () {
            assert(
                staircase.print(data.input) === data.output,
                'Expected Result: ' + data.output + ' Actual Result: ' + staircase.print(data.input)
            );
        });
    })
});
