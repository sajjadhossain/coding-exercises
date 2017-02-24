// You are working on a computer simulation of a mobile robot.
// The robot moves on an infinite plane, starting from position (0, 0).
// Its movements are described by a command string consisting of
// one or more of the following three letters:

// G instructs the robot to move forward one step.
// L instructs the robot to turn left.
// R instructs the robot to turn right.

// The function must return an array of n strings where each element
// i denotes whether or not performing commands
// i on an infinite loop will restrict the robot's movements to a circle.
// If the instruction restricts the robot's movement to a circle,
// set index i to "YES"; otherwise, set it to "NO".
module.exports = {
  doesCircleExist: function(input) {
    // Split array by space
    var inputArray = input.split(' ');
    // A new object for commands
    var commands = {};
    // Istantiate isCircle to return
    var isCircle;

    // Loop until the input[0]
    for(var increment = 1, increment2 = 0; increment <= inputArray[0]; increment++, increment2++) {
      // Write to commands object
      commands[increment2] = inputArray[increment];
    }

    // For each command
    for(var key in commands) {
      // Switch case for the last 4 of the command
      switch(commands[key].slice(-4)) {
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
  }
}
