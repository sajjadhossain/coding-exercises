var chai = require('chai');
var _ = require('lodash');
var objectsToTest = {
  1: {
    1: { a: 1, b: 2, c: 3},
    2: { a: 1, b: 1, c: 4},
    result: false,
    difference: 'b,c'
  },
  2: {
    1: { a: 1, b: 2, c: 3},
    2: { b: 2, a: 1},
    result: false,
    difference: 'c'
  },
  3: {
    1: { a: 1, b: 2, c: 3},
    2: { a: 1, b: 2, c: 3},
    result: true,
    difference: ''
  }
};

describe('do objects equal', function() {
  _.forEach(objectsToTest, function(object) {
    var doObjectsEqual = require('../../compareObjects').doObjectsEqual;

    it('doObjectsEqual(' + JSON.stringify(object[1]) + ', ' + JSON.stringify(object[2]) + ')' + ' => ' + object.result, function() {
      chai.assert(doObjectsEqual(object[1], object[2]) === object.result, 'Expected ' + doObjectsEqual(object[1], object[2]) + ' to equal ' + object.result);
    });
  });
});

describe('list object differences', function() {
  _.forEach(objectsToTest, function(object) {
    var listObjectDifferences = require('../../compareObjects').listObjectDifferences;

    it('listObjectDifferences(' + JSON.stringify(object[1]) + ', ' + JSON.stringify(object[2]) + ')' + ' => ' + object.difference, function() {
      chai.assert(listObjectDifferences(object[1], object[2]) === object.difference, 'Expected ' + listObjectDifferences(object[1], object[2]) + ' to equal ' + object.difference);
    });
  });
});
