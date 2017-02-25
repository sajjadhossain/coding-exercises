// // An integer, n, denoting the number of actions Jack must take.
// // An integer, k, denoting the step number Jack must not land on.
//
// // The function must return an integer denoting the maximum step number
// // Jack can reach from step 0 if he performs exactly n actions
// // and never jumps on step k (though he may jump over it).
//
// module.exports = {
//   maxStep: function(input) {
//     // The max number of actions allowed
//     var numberOfActions = input[0];
//     // The step to avoid
//     var stepToAvoid = input[1];
//     // Max step variable
//     var maxStep;
//
//     // For each increment less than the number of actions allowed
//     for(var increment = 0; increment < numberOfActions; increment++) {
//       // If the next two steps is the step to avoid, jump over
//       if(increment + 2 === stepToAvoid) {
//         maxStep = increment + 3;
//       }
//       // If the next step is the step to avoid, jump over
//       if(increment + 1 === stepToAvoid) {
//         maxStep = increment + 2;
//       }
//       // If the number of actions is greater than 2, return 5
//       if(numberOfActions > 2) {
//         maxStep = increment + 3
//       }
//     }
//
//     return maxStep;
//   }
// };
