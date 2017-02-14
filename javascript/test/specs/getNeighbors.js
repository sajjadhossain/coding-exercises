var chai = require('chai');
var coordinates = '0,0';
var expectedResult = {
  1: '1,1',
  2: '1,0',
  3: '1,-1',
  4: '0,-1',
  5: '-1,-1',
  6: '-1,0',
  7: '-1,1',
  8: '1,0'
};

describe('get neighbors', function() {
  var getNeighbors = require('../../getNeighbors');

  it.skip('getNeighbors(' + coordinates + ')' + ' => ' + expectedResult, function() {
    console.log(getNeighbors(coordinates))
    // chai.assert(getNeighbors(coordinates) === expectedResult, 'Expected ' + getNeighbors(coordinates) + ' to equal ' + expectedResult);
  });
});
