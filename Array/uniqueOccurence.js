/**
 * Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.
 * Input: arr = [1,2,2,1,1,3]
 * Output: true
 * Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
 */

 // generate a hashmap for key and count
 // use another object to keep track of unique occurrence, if exist return false
var uniqueOccurrences = function(arr) {
    let uniqueSet = {};
    let occurence = {};
    arr.reduce((accu, current) => {
        if (accu[current]) {
            accu[current]++;
        } else {
            accu[current] = 1;
        }
        return accu;
    }, uniqueSet);
    let value = Object.values(uniqueSet);
    for (let i = 0; i< value.length; i++) {
        if (occurence[value[i]] && occurence[value[i]] === value[i]) {
            return false;
        } 
        occurence[value[i]] = value[i];
    }
   return true;
};

console.log(uniqueOccurrences([4,6,4,-8,0,-7,5,7]));