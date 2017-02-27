var assert = require('chai').assert,
    _ = require('lodash'),
    maxStep = require('../../../algorithms/jumpingJack').maxStep,
    testData = [
        {
            input: [2,2],
            output: 3
        },
        {
            input: [2,1],
            output: 2
        },
        {
            input: [3,3],
            output: 5
        }
    ];

describe('jumping jack', function () {
    _.forEach(testData, function (data) {
        it('maxStep(' + data.input + ') => ' + data.output, function() {
            assert(
                maxStep(data.input) === data.output,
                'Expected Result: ' + data.output + '; Actual Result: ' + maxStep(data.input)
            );
        });
    });
});
