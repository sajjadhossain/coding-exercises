var chai = require('chai');
var _ = require('lodash');
var forEach = require('../../forEach');
var indexesToTest = {
  1: 1,
  2: { 1: 1 },
  3: [ 1, 2 ],
  4: new Object(),
  5: new Array(),
  6: 'test'
};

describe('for each function', function() {
  _.forEach(indexesToTest, function(valueToTest, key) {
    it('forEach(' + valueToTest + ')' + ' => ' + valueToTest, function() {
      forEach(valueToTest, function(collection, key, value, scope) {
        return chai.assert(collection === valueToTest[key], 'Expected ' + collection + ' to equal ' + valueToTest[key]);
      })
    })
  });
});
