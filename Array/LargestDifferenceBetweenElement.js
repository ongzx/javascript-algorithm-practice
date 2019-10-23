// find largest difference between element where the lower value element must come before largest element
function findLargestDifference(input) {
    if (input.length <= 1) { return -1};
    let maxValue = Math.max(...input);
    let sample = input.splice(0, input.indexOf(maxValue) + 1);
    let minValue = Math.min(...sample);
    return maxValue - minValue;
}

console.log(findLargestDifference([7, 8, 1, 9, 9, 15, 3, 1, 10]));
