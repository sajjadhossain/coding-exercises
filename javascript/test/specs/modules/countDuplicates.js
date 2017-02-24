/*
 * jshint node:true, mocha:true
 */
var assert = require('chai').assert,
    _ = require('lodash'),
    countDuplicates = require('../../../modules/countDuplicates'),
    testData = [
        {
            input: [17,1,6,1,2,3,4,6,6,4,3,0,11,24,11,66,41,42],
            expectedOutcome: 5
        },
        {
            input: [5,1,1,2,3,4],
            expectedOutcome: 1
        }
    ];

describe('count duplicates', function () {
    _.forEach(testData, function (data) {
        it('countDuplicates(' + data.input + ') => ' + data.expectedOutcome, function() {
            assert(
                countDuplicates(data.input) === data.expectedOutcome,
                '\n     Expected Result: ' + data.expectedOutcome + '\n     Actual Result: ' + countDuplicates(data.input)
            );
        });
    });
});
