/*
 * jslint node:true
 */
/**
 * @param {string} coordinates The coordinates to get neighbors for.
 */
'use strict';
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
