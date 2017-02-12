// Objective: Write a function that takes an index and returns the fibonacci value

// A module that returns the fibonacci value of a given index
module.exports = {
  recursiveFibonacci: function recursiveFibonacci(number) {
    // Base case if number is less than 2
    if (number <= 2) {
        return 1;
    }
    // Else if number is greater that add itself minus one and itself minus 2
    else {
        // Call itself
        return recursiveFibonacci(number - 1) + recursiveFibonacci(number - 2);
    }
  },
  loopedFibonacci: function loopedFibonacci(number) {
    var firstVariable = 0;
    var secondVariable = 1;
    var fibonacci = 1;
    // Loop until incrementingVariable = number, incrementingVariable = 2 by default because 2 returns 1
    for(var incrementingVariable = 2; incrementingVariable <= number; incrementingVariable++) {
        // push fibonacci equals the sum of firstVariable and secondVariable
        fibonacci = firstVariable + secondVariable;
        // push firstVariable equals secondVariable
        firstVariable = secondVariable;
        // push secondVariable equals fibonacci
        secondVariable = fibonacci;
    }
    return fibonacci;
  }
}

// [ 0, 1, 2, 3, 4,  5] (array index)
// [ 1, 1, 3, 5, 8, 13]

// loopedFibonacci(3) => 5
