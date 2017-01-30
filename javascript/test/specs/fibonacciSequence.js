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

describe('fibonacci sequence', function() {
  _.forEach(indexesToTest, function(value, key) {
    var fib = require('../../fibonacciSequence');

    it('fib(' + key + ')' + ' => ' + value, function() {
      return chai.assert(fib(key) === value, 'Expected ' + fib(key) + ' to equal ' + value);
    })
  });
});
