var chai = require('chai');
var _ = require('lodash');
var indexesToTest = {
  1: 1,
  2: 1,
  3: 2,
  4: 3,
  5: 5,
  6: 8,
  7: 13,
  8: 21,
  9: 34,
  10: 55
};

describe('recursive fibonacci sequence', function() {
  _.forEach(indexesToTest, function(value, key) {
    var recursiveFibonacci = require('../../fibonacciSequence').recursiveFibonacci;

    it('recursiveFibonacci(' + key + ')' + ' => ' + value, function() {
      chai.assert(recursiveFibonacci(key) === value, 'Expected ' + recursiveFibonacci(key) + ' to equal ' + value);
    })
  });
});

describe('looped fibonacci sequence', function() {
  _.forEach(indexesToTest, function(value, key) {
    var loopedFibonacci = require('../../fibonacciSequence').loopedFibonacci;

    it('loopedFibonacci(' + key + ')' + ' => ' + value, function() {
      chai.assert(loopedFibonacci(key) === value, 'Expected ' + loopedFibonacci(key) + ' to equal ' + value);
    })
  });
});
