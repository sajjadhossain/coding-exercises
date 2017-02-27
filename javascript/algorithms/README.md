# Algorithms
## Staircase
### Objective
You are working on a staircase function. The function takes `n` number and returns a staircase printed to the console.

#### Sample Input 1
1. `3`
1. `1`

#### Sample Output 1

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
You are working on a computer simulation of a mobile robot. The robot moves on an infinite plane, starting from position `0, 0`. Its movements are described by a command string consisting of one or more of the following three letters:

* `G` instructs the robot to move forward one step.
* `L` instructs the robot to turn left.
* `R` instructs the robot to turn right.
 

The robot performs the instructions in a command and repeats them for an infinite time. You want to know whether or not there exists some circle whose radius is a positive real number such that the robot always moves within the circle and never leaves it.

Complete the `doesCircleExist` function in the editor below. 

It has one parameter: 

* An array of strings, `commands`. The function must return an array of n strings where each element `i` denotes whether or not performing commands[i] on an infinite loop will restrict the robot's movements to a circle. If the instruction restricts the robot's movement to a circle, set index `i` to `YES`; otherwise, set it to `NO`.

#### Input
* The first line contains an integer, `n`, denoting the number of elements in commands.
* Each line `i` of the n subsequent lines (where `0 ≤ i < n`) contains a string describing commands[i].

#### Constraints
```
1 ≤ length of commandsi ≤ 2500
1 ≤ n ≤ 10
```
Each command consists of `G`, `L`, and `R` only.

#### Output

The function must return an array of strings where each element `i` contains either the string `YES` or `NO` denoting whether or not the robot's movements will be restricted to some circle if it performs instruction commands[i] on an infinite loop. This is printed to stdout by locked stub code in the editor.

##### Sample Input 1
`2 G L`
 
##### Sample Output 1
```
NO
YES
```
 
##### Explanation 1

We must consider the following `n = 2` commands:

1. For `commands[0] = G`, the robot will move forward forever without ever turning or being restricted to a circle. Thus, we set index 0 of our return array to `NO`.
1. For `commands[1] = L`, the robot will just turn 90 degrees left forever without ever moving forward (because there is no G instruction). Because the robot is effectively trapped in a circle, we set index 1 of our return array to `YES`.
 
##### Sample Input 2
```
1 GRGL
```

##### Sample Output 2
`NO`

##### Explanation 2

Let's consider the robot's initial orientation to be facing north toward the positive y-axis. The robot performs the following four steps in a loop:

* Go forward one step. The robot moves from (0, 0) to (0, 1).
* Turn right. The robot turns eastward, facing the positive x-axis.
* Go forward one step. The robot moves from (0, 1) to (1, 1).
* Turn left. The robot turns northward, facing the positive y-axis again.
* The robot then repeats these steps infinitely, following an endless zig-zagging path in the northeastern direction. Because the robot will never turn in such a way that it would be restricted to a circle, we set index 0 of our return array to `NO`.

### [Test](../test/specs/algorithms/encircular.js)
```js
// javascript/test/specs/algorithms/encircular.js
var assert = require('chai').assert,
    _ = require('lodash'),
    doesCircleExist = require('../../../algorithms/index').encircular.doesCircleExist,
    testData = [
      {
        input: '2 G L',
        output: 'NO, YES'
      },
      {
        input: '1 GRGL',
        output: 'NO'
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
        var isCircle = [],
            key,
            increment1,
            increment2,
            inputArray = input.split(' '),
            commands = {};

        for (increment1 = 1, increment2 = 0; increment1 <= inputArray[0]; increment1 += 1, increment2 += 1) {
            commands[increment2] = inputArray[increment1];
        }

        for (key in commands) {
            switch (commands[key]) {
                case 'L':
                    isCircle.push('YES');
                    break;
                case 'R':
                    isCircle.push('YES');
                    break;
                default:
                    isCircle.push('NO');
            }
        }

        return isCircle.join(', ');
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
Jumping Jack is standing at the bottom of a flight of stairs at step number 0, and each subsequent step up the staircase is numbered sequentially from 1 to infinity. Jack performs `n` consecutively numbered actions; for example, if `n = 3`, then Jack will perform three actions, numbered 1, 2, and 3, in order. For each action `i`, Jack can choose to either jump exactly `i` steps or remain at his current step. This means that if Jack is standing on step `j` at the time of action `i`, he may either stay on step `j` or jump to step `j + i`.

Complete the `maxStep`. It has two parameters:

* An integer, `n`, denoting the number of actions Jack must take.
* An integer, `k`, denoting the step number Jack must not land on.


The function must return an integer denoting the maximum step number Jack can reach from step 0 if he performs exactly `n` actions and never jumps on step `k` (though he may jump over it).

#### Input

* The first line contains an integer, `n`, denoting the number of actions Jack must take.
* The second line contains an integer, `k`, denoting the step number Jack must not land on.

##### Constraints

```
1 ≤ n ≤ 2 × 103
1 ≤ k ≤ 4 × 106
```
 

#### Output

The function must return an integer denoting the maximal step number Jack can reach. This is printed to stdout by locked stub code in the editor.

##### Sample Input 1
`2, 2`

##### Sample Output 1
`3`

##### Explanation 1

Jack performs the following sequence of `n = 2` actions:

1. Jack jumps from step 0 to step 0 + 1 = 1.
1. Jack jumps from step 1 to step 1 + 2 = 3; observe that he avoided step `k` = 2 by jumping over it.
 
##### Sample Input 2
`2, 1`

##### Sample Output 2
`2`

##### Explanation 2

Jack performs the following sequence of `n = 2` actions:

* Jack cannot jump onto step 1 (because `k = 1` and he can only jump 1 step during his first action), so he stays on step 0.
*  Jack jumps from step 0 to step 0 + 2 = 2.
 
##### Sample Input 3
`3, 3`
 
##### Sample Output 3
`5`

##### Explanation 3
Jack must skip some actions, because performing one jump during each step will land him on step `k = 3` on the second jump. 

There are two ways for him to perform all `n = 3` actions:

1. For the first action, jump 1 unit to step 0 + 1 = 1. 
1. For the second action, remain at step 1. 
1. For the third action, jump 3 units to step 1 + 3 = 4. 

In other words, his sequence of actions is `0 → 1 → 1 → 4`.

The other way is:

1. For the first action, remain at step 0. 
1. For the second action, jump 2 units to step 0 + 2 = 2. 
1. For the third action, jump 3 units to step 2 + 3 = 5. 

In other words, his sequence of actions is `0 → 0 → 2 → 5`.

Because we want the maximal step number that Jack can reach by performing any sequence of possible actions, we return `5` as our answer.

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
## Cutting Metal Surplus
### Objective
The owner of a metal rod factory has a surplus of rods of arbitrary lengths. A local contractor offers to buy any of the factory's surplus as long as all the rods have the same exact length, referred to as `saleLength`. The factory owner can increase the number of sellable rods by cutting each rod zero or more times, but each cut has a cost denoted by `costPerCut` and any leftover rods having a length other than saleLength must be discarded for no profit. The factory owner's total profit for the sale is calculated as:

`totalProfit = totalUniformRods × saleLength × salePrice − totalCuts × costPerCut`

Where:
 
* `totalUniformRods` is the number of sellable rods, 
* `saleLength` is the uniform length of the rods being sold, 
* `salePrice` is the per-rod price that the contractor agrees to pay, 
* and `totalCuts` is the total number of times the rods needed to be cut.

It has three parameters:

* An integer, `costPerCut`, denoting the cost incurred each time any rod is cut.
* An integer, `salePrice`, denoting the amount of money the contractor will pay for each rod of length `saleLength`.
* An array of `n` integers, `lengths`, where the value of each element `i` denotes the initial length of a metal rod.


The function must find the optimal `saleLength` such that the factory owner's profit is maximal, and then return an integer denoting the maximum possible profit.


#### Input
* The first line contains an integer denoting `costPerCut`.
* The second line contains an integer denoting `salePrice`.
* The third line contains an integer, `n`, denoting the number of elements in lengths.
* Each line `i` of the n subsequent lines (where `0 ≤ i < n`) contains an integer describing lengths[i].

#### Constraints
```
1 ≤ n ≤ 50
1 ≤ lengths[i] ≤ 104
1 ≤ salePrice, costPerCut ≤ 1000
```

#### Output
The function must return an integer denoting the maximum possible profit the factory owner can make from the sale.

##### Sample Input 1
`1 10 3 26 103 59`

##### Sample Output 1
`1770`

##### Explanation 1
Since `costPerCut = 1` is very inexpensive, a large number of cuts can be made to reduce the number of wasted pieces. The optimal rod length for maximizing profit is 6, and the rods are cut like so:

1. lengths[0] = 26: Cut off a piece of length 2 and discard it, resulting in a rod of length 24. Then cut this rod into 4 pieces of length 6.
1. lengths[1] = 103: Cut off a piece of length 1 and discard it, resulting in a rod of length 102. Then cut this rod into 17 pieces of length 6.
1. lengths[2] = 59: Cut off a piece of length 5 and discard it, resulting in a rod of length 54. Then cut this rod into 9 pieces of length 6.
 
After performing `totalCuts` = (1 + 3) + (1 + 16) + (1 + 8) = 30 cuts, there are `totalUniformRods` = 4 + 17 + 9 = 30 pieces of length `saleLength` = 6 that can be sold at `salePrice` = 10 dollars. This yields a total profit of `salePrice` × `totalUniformRods` × `saleLength` − `totalCuts` × `costPerCut` = 10 × 30 × 6 − 30 × 1 = 1770, so the function returns `1770`.

##### Sample Input 2
`100 10 3 26 103 59`

##### Sample Output 2
`1230`
 
##### Explanation 2
Since `costPerCut = 100`, cuts are expensive and must be minimal. The optimal rod length for maximizing profit is 51, and the rods are cut like so:

1. lengths[0] = 26: Discard this rod entirely.
1. lengths[1] = 103: Cut off a piece of length 1 and discard it, resulting in a rod of length 102. Then cut this rod into 2 pieces of length 51.
1. lengths[2] = 59: Cut off a piece of length 8 and discard it, resulting in a rod of length 51.
 

After performing `totalCuts` = (0) + (1 + 1) + (1) = 3 cuts, there are `totalUniformRods` = 0 + 2 + 1 = 3 pieces of length `saleLength` = 51 that can be sold at `salePrice` = 10 dollars each. This yields a total profit of `salePrice` × `totalUniformRods` × `saleLength` − `totalCuts` × `costPerCut` = 10 × 3 × 51 − 3 × 100 = 1230, so the function returns `1230`.

### [Test](../test/specs/algorithms/cuttingMetalSurplus.js)

### [Code](./cuttingMetalSurplus.js)
