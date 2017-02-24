# Greatest Common Denominator
## Objectives
### Objective 1
Write a function that returns the greatest common denominator of `x` numbers.

*Greatest common divisor or denominator is the largest integer that all of the numbers passed, can be divided by.*

**Input example** = `[10,20]`

**Output example** = `10`

[Read more on Objective 1...](#Objective-1)

## The Functions
I'm choosing to complete the exercise using modules for each objective. Then calling the function in a spec file. TDD if you will. I'll start with tests, then the modules.

### <div id="Objective-1">Objective 1</div>
#### The test
See the test [here](../../javascript/test/specs/modules/greatestCommonDenominators.js).

```js
// test/specs/greatestCommonDenominators.js
var assert = require('chai').assert,
    _ = require('lodash'),
    greatestCommonDenominator = require('../../../modules/greatestCommonDenominators'),
    testData = [
        {
            input: [10,20],
            output: 10
        },
        {
            input: [1,2,3,4,5],
            output: 1
        },
        {
            input: [2,4,6],
            output: 2
        }
    ];

describe('for each', function () {
    _.forEach(testData, function (data) {
        it('greatestCommonDenominatorOfTwo(' + data.input + ')' + ' => ' + data.input, function () {
            assert(
                greatestCommonDenominator(data.input) === data.output,
                'Expected Result: ' + data.output + ' Actual Result: ' + greatestCommonDenominator(data.input)
            );
        });
    });
});
```
#### The test explained
We have `testData`. An array of integers.

We created a module and exported a function called `greatestCommonDenominatorOfTwo`. Using mocha, chai we assert that when I pass `greatestCommonDenominatorOfTwo` an array of numbers, it returns a the greatest common denominator. We looped using `lodash`.

#### The module
See the code [here](../../javascript/modules/greatestCommonDenominators.js).

```js
// greatestCommonDenominators.js
var temporaryInteger,
    greatestCommonDenominator,
    absoluteX,
    absoluteY,
    ofTwo = function (x, y) {
        absoluteX = Math.abs(x);
        absoluteY =  Math.abs(y);

        while (absoluteY) {
            temporaryInteger = absoluteY;
            absoluteY = absoluteX % absoluteY;
            absoluteX = temporaryInteger;
        }

        greatestCommonDenominator = absoluteX;

        return greatestCommonDenominator;
    };

module.exports = function (input) {
    var first,
        second,
        increment;

    if (input.length === 2) {
        return ofTwo(input[0], input[1]);
    }
    if (input.length > 2) {
        first = input[0];

        for (increment = 1; increment < input.length; increment += 1) {
            second = input[increment];
            first = ofTwo(first, second);
        }

        greatestCommonDenominator = first;

        return greatestCommonDenominator;
    }
};
```
#### The code explained
We should loop a function that gets the greatest common denominator between two numbers. `ofTwo` takes two integers, gets their absolute values, then loop while less than the absolute value of the second number. 

The module uses `ofTwo` function in a loop for each integer passed.
