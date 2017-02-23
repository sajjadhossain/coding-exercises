# Fibonacci Sequence
## Objectives
### Objective 1
Write a recursive function that takes an index and returns the fibonacci value.

*Fibonacci value refers to `index - 1` + `index`.*

**Input example** = `3`

**Output example** = `5`

[Read more on Objective 1...](#Objective-1)

### Objective 2 
Write a looping function that takes an index and returns the fibonacci value.

*Fibonacci value refers to `index - 1` + `index`.*

**Input example** = `3`

**Output example** = `5`

[Read more on Objective 1...](#Objective-1)

## The Functions
I'm choosing to complete these exercise using modules for each objective. Then calling the function in a spec file. TDD if you will. I'll start with tests, then the modules.

### <div id="Objective-1">Objective 1</div>
#### The test
See the test [here](../../javascript/test/specs/modules/fibonacciSequence.js).

```js
// test/specs/compoundWords.js
var assert = require('chai').assert,
    fibonacciSequence = require('../../../modules/fibonacciSequence'),
    recursiveFibonacci = fibonacciSequence.recursiveFibonacci,
    _ = require('lodash'),
    testData = {
        1: 1,
        2: 1,
        3: 2,
        4: 3,
        5: 5,
        6: 8,
        7: 13,
        8: 21,
        9: 34,
        10: 55
    };

describe('recursive fibonacci sequence', function () {
    _.forEach(testData, function(data, key) {
        it('recursiveFibonacci(' + key + ')' + ' => ' + data, function () {
            assert(
                recursiveFibonacci(key) === data,
                'Expected Result: ' + data + ' Actual Result: ' + recursiveFibonacci(key)
            );
        })
    });
});
```
#### The test explained
We have `testData`. An object contains key value pairs. The key is the index and the value is the fibonacci value.

We created a module and exported a function called `recursiveFibonacci`. Using mocha, chai we assert that when I pass `recursiveFibonacci` a number, it returns the expected fibonacci value. We looped using `lodash`.

#### The module
See the code [here](../../javascript/modules/fibonacciSequence.js).

```js
// fibonacciSequence.js
module.exports = {
    recursiveFibonacci = function (number) {
        if (number <= 2) {
            return 1;
        }
        else {
            return recursiveFibonacci(number - 1) + recursiveFibonacci(number - 2);
        }
    }
};
```
#### The code explained
This is simple as well. Base case: return 1, if `index` is less than 2. Else return the sum of `index - 1` and `index`.

### <div id="Objective-2">Objective 2</div>
#### The test
See the test [here](../../javascript/test/specs/modules/fibonacciSequence.js).

```js
// test/specs/fibonacciSequence.js
var assert = require('chai').assert,
    fibonacciSequence = require('../../../modules/fibonacciSequence'),
    loopedFibonacci = fibonacciSequence.loopedFibonacci,
    _ = require('lodash'),
    testData = {
        1: 1,
        2: 1,
        3: 2,
        4: 3,
        5: 5,
        6: 8,
        7: 13,
        8: 21,
        9: 34,
        10: 55
    };

describe('looped fibonacci sequence', function () {
    _.forEach(testData, function(data, key) {
        it('loopedFibonacci(' + key + ')' + ' => ' + data, function () {
            assert(
                loopedFibonacci(key) === data,
                'Expected Result: ' + data + ' Actual Result: ' + loopedFibonacci(key)
            );
        })
    });
});
```
#### The test explained
We have `testData`. An object contains key value pairs. The key is the index and the value is the fibonacci value.

We created a module and exported a function called `loopedFibonacci`. Using mocha, chai we assert that when I pass `recursiveFibonacci` a number, it returns the expected fibonacci value. We looped using `lodash`.

#### The module
See the code [here](../../javascript/modules/fibonacciSequence.js).

```js
// fibonacciSequence.js
module.exports = {
    loopedFibonacci: function (number) {
        var firstVariable = 0,
            secondVariable = 1,
            fibonacci = 1,
            increment;

        for (increment = 2; increment <= number; increment += 1) {
            fibonacci = firstVariable + secondVariable;
            firstVariable = secondVariable;
            secondVariable = fibonacci;
        }
        return fibonacci;
    }
};
```
#### The code explained
This is slightly more complicated as its easy to loose track of the value of a variable that is constantly changing. We have a `fibonacci` of 1 by default. This meets the needs of our base cases. To return the fibonacci value of indexes outside of our base case, we loop from 2 to the index. For each loop we return a new value for `fibonacci`.
