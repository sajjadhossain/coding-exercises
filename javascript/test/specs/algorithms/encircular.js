/*
 * jslint node:true, mocha:true
 */
var assert = require('chai').assert,
    _ = require('lodash'),
    doesCircleExist = require('../../../algorithms/index').encircular.doesCircleExist,
    testData = [
      {
        input: '2 G L',
        output: 'NO, YES'
      },
      {
        input: '1 GRGL',
        output: 'NO'
      }
    ];

describe('encircular', function () {
    _.forEach(testData, function (data) {
        it('doesCircleExist(' + data.input + ') => ' + data.output, function() {
            assert(
                doesCircleExist(data.input) === data.output,
                'Expected Result: ' + data.output + ' Actual Result: ' +  doesCircleExist(data.input)
            );
        });
    });
});
