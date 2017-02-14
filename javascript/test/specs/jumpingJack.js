var chai = require('chai');
var _ = require('lodash');
var inputs = {
  1: {
    input: [2,2],
    expectedOutcome: 3
  },
  2: {
   input: [2,1],
   expectedOutcome: 2
  },
  3: {
   input: [3,3],
   expectedOutcome: 5
  }
}

describe('jumping jack', function() {
  var maxStep = require('../../jumpingJack').maxStep;

  _.forEach(inputs, function(value, key) {
    it('maxStep(' + value.input + ') => ' + value.expectedOutcome, function() {
      chai.assert(maxStep(value.input) === value.expectedOutcome, 'Expected: ' + value.expectedOutcome + '; Returned: ' +  maxStep(value.input));
    });
  });
});
