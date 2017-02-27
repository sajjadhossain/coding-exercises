/*
 * jslint node:true, mocha:true
 */
var assert = require('chai').assert,
    getNeighbors = require('../../../algorithms/getNeighbors'),
    input = '0,0',
    output = {
        '1': [ 1, 1 ],
        '2': [ -1, -1 ],
        '3': [ 1, -1 ],
        '4': [ -1, 1 ]
    };

describe('get neighbors', function () {
    it('getNeighbors(' + input + ')' + ' => ' + JSON.stringify(output), function () {
        assert(
            JSON.stringify(getNeighbors.coordinates(input)) === JSON.stringify(output),
            'Expected Result: ' + JSON.stringify(output) + ' Actual Result: ' + JSON.stringify(getNeighbors.coordinates(input))
        );
    });
});
