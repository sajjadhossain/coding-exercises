var chai = require('chai');
var _ = require('lodash');
var inputs = {
  1: {
    input: '2 G L',
    expectedOutcome: 'NO'
  },
  2: {
    input: '1 GRGL',
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
