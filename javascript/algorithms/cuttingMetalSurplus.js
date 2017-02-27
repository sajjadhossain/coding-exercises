/*
 * jslint node:true
 */
/**
 * @param {string} variables
 */
'use strict';
var totalProfit = function (variables) {
        var increment1,
            increment2,
            input = variables.split(' '),
            costPerCut = Number(input[0]),
            salePrice = Number(input[1]),
            totalRods = Number(input[2]),
            totalUniformRods,
            optimalRodLength,
            rods = [],
            largestRod,
            largestRodByIncrement,
            saleLength,
            totalCuts,
            maximumCut,
            costToCut,
            totalProfit;

        for (increment1 = 0, increment2 = 3; increment1 < totalRods; increment1 += 1, increment2 += 1) {
            rods.push(Number(input[increment2]));
        }

        totalCuts = 0;
        largestRod = 0;
        totalUniformRods = 0;

        for (increment1 = 0; increment1 < totalRods; increment1 += 1) {
            if (rods[increment1] > largestRod) {
                largestRod = rods[increment1];
            }
        }

        if (costPerCut < salePrice) {

        }

        // for (increment1 = 0; increment1 <= 17; increment1 += 1) {
        //     optimalRodLength = largestRod / increment1;
        //     if (optimalRodLength >= totalRods) {
        //         saleLength = Math.floor(optimalRodLength);
        //         totalCuts = increment1;
        //         totalUniformRods += totalCuts;
        //     }
        // }

        // for (increment1 = 0, increment2 = 0; increment1 < rods.length; increment1 += 1, increment2 += 1) {
        //     optimalRodLength = Number(rods[increment1]) / 3
        //     rodCuts.push()
        // }

        // maximumCut = totalUniformRods * saleLength * salePrice;
        // costToCut = totalCuts * costPerCut;
        // totalProfit = maximumCut - costPerCut;

        return optimalRodLength;
    };


module.exports = {
    totalProfit: totalProfit
}
