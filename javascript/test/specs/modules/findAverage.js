var chai = require('chai');
var _ = require('lodash');
var setsToTest = {
  1: {
    'numbers': [1,2,3,4,5,6,7,8,10],
    'average': 5.111111111111111
  },
  2: {
    'numbers': [1,2,3,4,5],
    'average': 3
  },
  3: {
    'numbers':  [1,1,1],
    'average': 1
  }
};

describe('find averages', function() {
  _.forEach(setsToTest, function(set) {
    var findAverage = require('../../findAverage');

    it('findAverage(' + set.numbers.toString() + ')' + ' => ' + set.average, function() {
      chai.assert(findAverage(set.numbers) === set.average, 'Expected ' + findAverage(set.numbers) + ' to equal ' + set.average)
    });
  });
});
