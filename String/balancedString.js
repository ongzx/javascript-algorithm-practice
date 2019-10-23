/**
 * balanced string are those who have equal quantity of 'L' and 'R' characters
 * Input: s = "RLLLLRRRLR"
 * Output: 3
 * Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
 * @param {*} s 
 */
var balancedStringSplit = function(s) {
    if (!s) {
        return 0;
    }
    let arr = s.split('');
    let count = 0;
    let occurence = 0;
    for (let i = 0; i< arr.length; i++) {
        let currentChar = arr[i];
        if (currentChar === 'L') {
            occurence++;
        } else if (currentChar === 'R') {
            occurence--;
        }
        if (occurence === 0) { // when it is 0, means it is balance, increase count
            count++;
        }
    }
    return count;
}

console.log(balancedStringSplit('RLLLLRRRLR'));