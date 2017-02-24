/*
 * jshint node:true, mocha:true
 */
var assert = require('chai').assert,
    _ = require('lodash'),
    forEach = require('../../../modules/forEach'),
    testData = [
        1,
        { 1: 1 },
        [ 1, 2 ],
        new Object(),
        new Array(),
        'test'
    ];

describe('for each', function () {
    _.forEach(testData, function (data, key) {
        it('forEach(' + data + ')' + ' => ' + data, function () {
            forEach(data, function (collection, key, value) {
                return assert(
                    collection === data[key],
                    '\n     Expected Result: ' + collection + '\n     Actual Result: ' + data[key]
                );
            });
        });
    });
});
