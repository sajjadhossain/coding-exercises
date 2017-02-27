/*
 * jslint node:true, mocha:true
 */
var assert = require('chai').assert,
    _ = require('lodash'),
    totalProfit = require('../../../algorithms/cuttingMetalSurplus').totalProfit,
    testData = [
        {
            input: '1 10 3 26 103 59',
            output: '1770'
        },
        {
            input: '100 10 3 26 103 59',
            output: '1230'
        }
    ];

describe('cutting metal surplus', function () {
    _.forEach(testData, function (data) {
        it('totalProfit(' + data.input + ') => ' + data.output, function() {
            console.log(totalProfit(data.input));
            // assert(
            //     totalProfit(data.input) === data.output,
            //     'Expected Result: ' + data.output + ' Actual Result: ' +  doesCircleExist(data.input)
            // );
        });
    });
});
