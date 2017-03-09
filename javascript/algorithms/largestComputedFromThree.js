var unsorted_array = [-10, 7, 29, 30, 5, -10, -70];

function sortIntegers(a, b) {
    return a - b;
}

function computeProduct(unsorted) {
    var decrement,
        sortedArray = unsorted.sort(sortIntegers),
        product1 = 1,
        product2 = 1,
        arrayNElement = sortedArray.length - 1;

    // Get the product of three largest integers in sorted array
    for (decrement = arrayNElement; decrement > arrayNElement - 3; decrement -= 1) {
        product1 = product1 * sortedArray[decrement];
    }
    product2 = sortedArray[0] * sortedArray[1] * sortedArray[arrayNElement];

    if (product1 > product2) return product1;

    return arrayNElement
};

console.log(computeProduct(unsorted_array)); // 21000
