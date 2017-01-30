var chai = require('chai');
var _ = require('lodash');
var valuesToTest = {
  1: {
    'input': 1,
    'result': false
  },
  2: {
    'input': 4,
    'result': false
  },
  3: {
    'input':  3,
    'result': true
  },
  4: {
    'input':  20,
    'result': false
  },
  5: {
    'input':  199,
    'result': true
  }
};

describe('is prime number', function() {
  _.forEach(valuesToTest, function(value) {
    var isPrimeNumber = require('../../isPrimeNumber');

    it('isPrimeNumber(' + value.input + ')' + ' => ' + value.result, function() {
      chai.assert(isPrimeNumber(value.input) === value.result, 'Expected ' + isPrimeNumber(value.input) + ' to equal ' + value.result)
    });
  });
});