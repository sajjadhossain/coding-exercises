/*
 * jshint node:true, mocha:true
 */ 
var assert = require('chai').assert
    , Test = require('../../Test'); 

describe('Test', function () {
    it.skip('test(inputString) => some desired output', function () {
        assert(
            Test.test(inputString) === 'expected value',
                'Expected Result: expected output, Actual Result: ' + Test.test(inputString)
        );
    });
});