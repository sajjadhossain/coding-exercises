/*
 * jshint node:true, mocha:true
 */
var assert = require('chai').assert
    , Bathroom = require('../../Bathroom');

describe('Bathroom', function () {
    it.skip('ask(user,type,question,response) => some desired output', function () {
        assert(
            Bathroom.ask(user,type,question,response) === 'expected value',
                'Expected Result: expected output, Actual Result: ' + Bathroom.ask(user,type,question,response)
        );
    });
    it.skip('respond(user,type,question,response) => some desired output', function () {
        assert(
            Bathroom.respond(user,type,question,response) === 'expected value',
                'Expected Result: expected output, Actual Result: ' + Bathroom.respond(user,type,question,response)
        );
    });
    it.skip('reason(user,type,question,response) => some desired output', function () {
        assert(
            Bathroom.reason(user,type,question,response) === 'expected value',
                'Expected Result: expected output, Actual Result: ' + Bathroom.reason(user,type,question,response)
        );
    });
    it.skip('gratitude(user,type,question,response) => some desired output', function () {
        assert(
            Bathroom.gratitude(user,type,question,response) === 'expected value',
                'Expected Result: expected output, Actual Result: ' + Bathroom.gratitude(user,type,question,response)
        );
    });
    it.skip('flush(user,type,question,response) => some desired output', function () {
        assert(
            Bathroom.flush(user,type,question,response) === 'expected value',
                'Expected Result: expected output, Actual Result: ' + Bathroom.flush(user,type,question,response)
        );
    });
    it.skip('toilet(user,type,question,response) => some desired output', function () {
        assert(
            Bathroom.toilet(user,type,question,response) === 'expected value',
                'Expected Result: expected output, Actual Result: ' + Bathroom.toilet(user,type,question,response)
        );
    });
});
