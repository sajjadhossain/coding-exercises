# Algorithms
## Staircase
### Objective
You are working on a staircase function.

#### Example Input
1. `3`
1. `1`

#### Example Output

1. Prints to console:

    ```
      #
     ##
    ###
    ```
1. Prints to console:

    ```
    #
    ```

### [Test](../test/specs/algorithms/staircase.js)
```js
// javascript/test/specs/algorithms/staircase.js
var assert = require('chai').assert,
    staircase = require('../../../algorithms/staircase')
    _ = require('lodash'),
    testData = [
        {
            input: 3,
            output: '   #\n  ##\n ###'
        },
        {
            input: 1,
            output: ' #'
        }
    ];

describe('staircase', function () {
    _.forEach(testData, function (data) {
        it('print(' + data.input + ') => prints the required number of stairs', function () {
            assert(
                staircase.print(data.input) === data.output,
                'Expected Result: ' + data.output + ' Actual Result: ' + staircase.print(data.input)
            );
        });
    })
});
```
### [Code](./staircase.js)
```js
// javascript/algorithms/staircase.js
var print = function (number) {
    var increment,
        decrement,
        newLine = '\n',
        stair = '#',
        stairs = [],
        staircase = [];

    for (increment = 1; increment <= number; increment += 1) {
        stairs.push(Array(increment + 1).join('#'));
    }

    for (increment = 0, decrement = stairs.length; increment < stairs.length; increment += 1, decrement -= 1) {
        if (!staircase[0]) {
            staircase.push(' ' + Array(decrement).join(' ') + stairs[increment]);
        } else {
            staircase.push('\n ' + Array(decrement).join(' ') + stairs[increment]);    
        }
    }

    return staircase.join('');
};

module.exports = {
    print: print
};
```
## Encircular
### Objective
You are working on a computer simulation of a mobile robot.

The robot moves on an infinite plane, starting from position `0, 0`.

Its' movements are described by a command string consisting of one or more of the following three letters:

* `G` instructs the robot to move forward one step.
* `L` instructs the robot to turn left.
* `R` instructs the robot to turn right.

The function must return an array of `n` strings where each element:

* `i` denotes whether or not performing commands
* `i` on an infinite loop will restrict the robot's movements to a circle.

If the instruction restricts the robot's movement to a circle, set index `i` to `YES`; otherwise, set it to `NO`.

#### Example Input
1. `2 G L`
1. `1 GRGL`

#### Example Out
1. `NO`
1. `YES`

### [Test](../test/specs/algorithms/encircular.js)
```js
// javascript/test/specs/algorithms/encircular.js
var assert = require('chai').assert,
    _ = require('lodash'),
    doesCircleExist = require('../../../algorithms/index').encircular.doesCircleExist,
    testData = [
      {
        input: '2 G L',
        output: 'NO'
      },
      {
        input: '1 GRGL',
        output: 'YES'
      }
    ];

describe('encircular', function () {
    _.forEach(testData, function (data) {
        it('doesCircleExist(' + data.input + ') => ' + data.output, function() {
            assert(
                doesCircleExist(data.input) === data.output,
                'Expected Result: ' + data.output + ' Actual Result: ' +  doesCircleExist(data.input)
            );
        });
    });
});
```
### [Code](./encircular.js)
```js
// javascript/algorithms/encircular.js
var doesCircleExist = function (input) {
        var isCircle,
            key,
            increment1,
            increment2,
            inputArray = input.split(' '),
            commands = {};

        for (increment1 = 1, increment2 = 0; increment1 <= inputArray[0]; increment1 += 1, increment2 += 1) {
            commands[increment2] = inputArray[increment1];
        }

        for (key in commands) {
            switch (commands[key].slice(-4)) {
                case 'GLGR':
                    isCircle = 'YES';
                    break;
                case 'GRGL':
                    isCircle = 'YES';
                    break;
                default:
                    isCircle = 'NO'
            }
        }

        return isCircle;
    };

module.exports = {
    doesCircleExist: doesCircleExist
};
```
## Get Neighbors
### Objective
Write a function that returns `4` neighboring coordinates for `x,y`. Imagine a grid, and the coordinates diagonal in the positive and negative directions are the values you want to use.

#### Example Input
1. `0,0`

#### Example Output
1. Returns a JSON object:

    ```
    {
        '1': [ 1, 1 ],
        '2': [ -1, -1 ],
        '3': [ 1, -1 ],
        '4': [ -1, 1 ]
    }
    ```

### [Test](../test/specs/algorithms/getNeighbors.js)
```js
// javascript/test/specs/algorithms/getNeighbors.js
var assert = require('chai').assert,
    getNeighbors = require('../../../algorithms/getNeighbors'),
    input = '0,0',
    output = {
        '1': [ 1, 1 ],
        '2': [ -1, -1 ],
        '3': [ 1, -1 ],
        '4': [ -1, 1 ]
    };

describe('get neighbors', function () {
    it('getNeighbors(' + input + ')' + ' => ' + JSON.stringify(output), function () {
        assert(
            JSON.stringify(getNeighbors.coordinates(input)) === JSON.stringify(output),
            'Expected Result: ' + JSON.stringify(output) + ' Actual Result: ' + JSON.stringify(getNeighbors.coordinates(input))
        );
    });
});
```
### [Code](./getNeighbors.js)
```js
// javascript/algorithms/getNeighbors.js
var getNeighborsCoordinates = function (coordinates) {
        var increment,
            key,
            xy = coordinates.split(','),
            x = Number(xy[0]),
            y = Number(xy[1]),
            neighbors = {};

        for (increment = 1; increment <= 4; increment += 1) {
            neighbors[increment] = [];
            switch (increment) {
                case 1:
                neighbors[increment].push(x + 1);
                neighbors[increment].push(y + 1);
                break;
                case 2:
                neighbors[increment].push(x - 1);
                neighbors[increment].push(y - 1);
                break;
                case 3:
                neighbors[increment].push(x + 1);
                neighbors[increment].push(y - 1);
                break;
                case 4:
                neighbors[increment].push(x - 1);
                neighbors[increment].push(y + 1);
                break;
            }
        }

        return neighbors;
    };

module.exports = {
    coordinates: getNeighborsCoordinates
};
```
## Jumping Jack
### Objective
Jumping Jack starts at the bottom of a staircase, `0`. He jumps the number of jumps passed, `n` and cannot land on `k`.

An integer, `n`, denoting the number of actions Jack must take.
An integer, `k`, denoting the step number Jack must not land on.

The function must return an `integer` denoting the maximum step number
Jack can reach from step 0 if he performs exactly `n` actions
and never jumps on step `k` (though he may jump over it).

#### Example Input
1. `[2,2]`
1. `[2,1]`
1. `[3,3]`

#### Example Output
1. `3`
1. `2`
1. `5`

### [Test](../test/specs/algorithms/jumpingJack.js)
```js
// javascript/test/specs/algorithms/jumpingJack.js
var assert = require('chai').assert,
    _ = require('lodash'),
    maxStep = require('../../../algorithms/jumpingJack').maxStep,
    testData = [
        {
            input: [2,2],
            output: 3
        },
        {
            input: [2,1],
            output: 2
        },
        {
            input: [3,3],
            output: 5
        }
    ];

describe('jumping jack', function () {
    _.forEach(testData, function (data) {
        it('maxStep(' + data.input + ') => ' + data.output, function() {
            assert(
                maxStep(data.input) === data.output,
                'Expected Result: ' + data.output + '; Actual Result: ' + maxStep(data.input)
            );
        });
    });
});
```
### [Code](./jumpingJack.js)
```js
// javascript/algorithms/jumpingJack.js
'use strict';
var maxStep = function (input) {
        var increment,
            numberOfActions = input[0],
            stepToAvoid = input[1],
            maxStep;

        for (increment = 0; increment < numberOfActions; increment += 1) {
            if (increment + 2 === stepToAvoid) {
                maxStep = increment + 3;
            }
            if (increment + 1 === stepToAvoid) {
                maxStep = increment + 2;
            }
            if (numberOfActions > 2) {
                maxStep = increment + 3
            }
        }

        return maxStep;
    };

module.exports = {
    maxStep: maxStep
};
```
