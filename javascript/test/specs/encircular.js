var chai = require('chai');
var _ = require('lodash');
var inputs = {
  1: {
    input: '4, G, L, G, G',
    expectedOutcome: 'NO'
  },
  2: {
    input: '2, G, L',
    expectedOutcome: 'YES'
  },
  3: {
    input: '1, R',
    expectedOutcome: 'YES'
  }
}

describe('encircular', function() {
  var doesCircleExist = require('../../encircular').doesCircleExist;

  _.forEach(inputs, function(value, key) {
    it('doesCircleExist(' + value.input + ') => ' + value.expectedOutcome, function() {
      chai.assert(doesCircleExist(value.input) === value.expectedOutcome, 'Expected: ' + value.expectedOutcome + '; Returned: ' +  doesCircleExist(value.input));
    });
  });
});
