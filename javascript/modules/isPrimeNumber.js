// Objective: Return true or false if integer or number passed is a prime number

// A module that returns true or false for whether an integer passed is a prime number
module.exports = function isPrime(value) {
    // For each where greater than 1 and less than value passed, iterate.
    for(var i = 2; i < value; i++) {
        // Return false if value dividisable by its iteratee with no remainder
        if(value % i === 0) {
            return false;
        }
    }
    // return true if value passed is greater than 1
    return value > 1;
};
