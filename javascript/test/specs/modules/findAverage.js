/*
* jshint node:true, mocha:true
*/
var assert = require('chai').assert,
    _ = require('lodash'),
    findAverage = require('../../../modules/findAverage'),
    testData = [
        {
            'numbers': [1,2,3,4,5,6,7,8,10],
            'average': 5.111111111111111
        },
        {
            'numbers': [1,2,3,4,5],
            'average': 3
        },
        {
            'numbers':  [1,1,1],
            'average': 1
        }
    ];

describe('find averages', function () {
    _.forEach(testData, function (data) {
        it('testData(' + data.numbers.toString() + ')' + ' => ' + data.average, function() {
            assert(
                findAverage(data.numbers) === data.average,
                '\n     Expected Result: ' + findAverage(data.numbers) + '\n     Actual Result: ' + data.average
            );
        });
    });
});
