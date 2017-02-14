var chai = require('chai');
var _ = require('lodash');
var inputs = {
  1: {
    input: '1 10 3 26 103 59',
    expectedOutcome: '1770'
  },
  2: {
    input: '100 10 3 26 103 59',
    expectedOutcome: '1230'
  }
}

describe('cutting metal surplus', function() {
  var cuttingMetalSurplus = require('../../cuttingMetalSurplus');

  _.forEach(inputs, function(value, key) {
    it.skip('cuttingMetalSurplus(' + value.input + ') => ' + value.expectedOutcome, function() {
      console.log(cuttingMetalSurplus(value.input));
      // chai.assert(doesCircleExist(value.input) === value.expectedOutcome, 'Expected: ' + value.expectedOutcome + '; Returned: ' +  doesCircleExist(value.input));
    });
  });
});
