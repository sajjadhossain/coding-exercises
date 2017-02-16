var chai = require('chai');
var _ = require('lodash');
var valuesToTest = {
  1: {
    'input': NaN,
    'result': false
  },
  2: {
    'input': undefined,
    'result': false
  },
  3: {
    'input': 3.1234,
    'result': false
  },
  4: {
    'input': '2',
    'result': false
  },
  5: {
    'input': '2.0',
    'result': false
  },
  6: {
    'input': 1,
    'result': true
  }
};

describe('is integer', function() {
  _.forEach(valuesToTest, function(value) {
    var isInteger = require('../../isInteger');

    it('isInteger(' + value.input + ')' + ' => ' + value.result, function() {
      chai.assert(isInteger(value.input) === value.result, 'Expected ' + isInteger(value.input) + ' to equal ' + value.result)
    });
  });
});
