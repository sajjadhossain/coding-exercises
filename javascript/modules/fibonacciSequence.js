/*
 * jshint node:true
 */
 /**
 * @param {number} number Index to find fibonacci value for
 */
var recursiveFibonacci = function (number) {
        if (number <= 2) {
            return 1;
        }
        else {
            return recursiveFibonacci(number - 1) + recursiveFibonacci(number - 2);
        }
    },
    loopedFibonacci = function (number) {
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
    };

module.exports = {
    recursiveFibonacci: recursiveFibonacci,
    loopedFibonacci: loopedFibonacci
};
