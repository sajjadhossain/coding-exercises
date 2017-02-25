// // totalProfit = totalUniformRods × saleLength × salePrice − totalCuts × costPerCut
//
// // where totalUniformRods is the number of sellable rods,
// // saleLength is the uniform length of the rods being sold,
// // salePrice is the per-rod price that the contractor agrees to pay,
// // and totalCuts is the total number of times the rods needed to be cut.
//
// // It has three parameters:
// //    An integer, costPerCut, denoting the cost incurred each time any rod is cut.
// //    An integer, salePrice, denoting the amount of money the contractor will pay for each rod of length saleLength.
// //    An array of n integers, lengths, where the value of each element i denotes the initial length of a metal rod.
//
// // The function must find the optimal saleLength such that the factory owner's profit is maximal, and then return an integer denoting the maximum possible profit.
//
// // The function must return an integer denoting the maximum possible profit the factory owner can make from the sale.
//
// // TODO
//
// // function cutByCostPerCut(length) {
// //   var cutBy;
// //
// //   if (salePrice < costPerCut) {
// //     cutBy = shortestRod / length;
// //   } else
// // };
//
// // var GCD = require('./greatestCommonDenominators');
//
// module.exports = function(input) {
//   var inputArray = input.split(' ');
//   var costPerCut = inputArray[0];
//   var salePrice = inputArray[1];
//   var totalRods = inputArray[2];
//   var rods = [];
//   var maximumProfit;
//
//   for(var increment = 3, increment2 = 0; increment < inputArray.length; increment++, increment2++) {
//     rods.push(parseInt(inputArray[increment]));
//   }
//
//   var longestRod = Math.max.apply(null, rods)
//
//
//   // return maximumProfit;
// };
