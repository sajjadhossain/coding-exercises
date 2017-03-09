/* jslint node:true, mocha:true */
var nestedObjects = require('../../../modules/nestedObjects').returnValues,
    assert = require('chai').assert,
    _ = require('lodash'),
    testData = [
        {
            input: [1,2,3,[4,5],[6]],
            output: [1,2,3,4,5,6]
        },
        {
            input: [[[3]]],
            output: [3]
        },
        {
            input: [[[1,2],[3], 4]],
            output: [1,2,3,4]
        },
        {
            input: 3,
            output: 'Not an object'
        }
    ],
    callFunction;

describe('nested objects', function (object) {
    _.forEach(testData, function (data) {
        it('nestedObjects(' + JSON.stringify(data.input) + ') => ' + JSON.stringify(data.output), function () {
            callFunction = nestedObjects(data.input).toString();
            assert(
                callFunction === data.output.toString(),
                'Expected Result: ' + data.output + ' Actual Result: ' + callFunction
            );
        });
    });
});
