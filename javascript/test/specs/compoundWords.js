// TODO

var chai = require('chai');
var _ = require('lodash');
var wordsToTest = {
  input: ['shut', 'shutter', 'tock', 'stock', 'shutterstock'],
  result: [false, true, false, true, true]
}

// describe('is compound word', function() {
//   var isCompoundWord = require('../../compoundWords').isCompoundWord;
//
//   _.forEach(wordsToTest.input, function (word) {
//     it(/*'isCompoundWord(' + words.toString() + ')' + ' => ' + object.result*/'', function() {
//       isCompoundWord(word, wordsToTest.input)
//       // chai.assert(doObjectsEqual(object[1], object[2]) === object.result, 'Expected ' + doObjectsEqual(object[1], object[2]) + ' to equal ' + object.result);
//     });
//   });
// });
