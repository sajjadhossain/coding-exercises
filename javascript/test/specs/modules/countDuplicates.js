var chai = require('chai');
var _ = require('lodash');
var inputs = {
  1: {
    input: [17,1,6,1,2,3,4,6,6,4,3,0,11,24,11,66,41,42],
    expectedOutcome: 5
  },
  2: {
    input: [5,1,1,2,3,4],
    expectedOutcome: 1
  }
}

describe('count duplicates', function() {
  var countDuplicates = require('../../countDuplicates');

  _.forEach(inputs, function(value, key) {
    it('countDuplicates(' + value.input + ') => ' + value.expectedOutcome, function() {
      chai.assert(countDuplicates(value.input) === value.expectedOutcome, 'Expected: ' + value.expectedOutcome + '; Returned: ' +  countDuplicates(value.input));
    });
  });
});
