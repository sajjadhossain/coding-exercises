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
    var action = input.slice(-1);
    var isCircle;

    switch(action) {
      case 'G':
        isCircle = 'NO'
        break;
      case 'L':
        isCircle = 'YES'
        break;
      case 'R':
        isCircle = 'YES'
        break;
      default:
        isCircle = 'NO'
    }

    return isCircle;
  }
}
