/**
 * Binary search recursion
 * every recursion will slice the array by half until the value is found
 * @param {*} aList 
 * @param {*} item 
 */
function binarySearch(aList, item) {
    if (aList.length == 0) {
        return false;
    } else {
        let midPoint = Math.floor(aList.length / 2);
        if (item > aList[midPoint]) {
            var newList1 = aList.slice(0, midPoint);
            return binarySearch(newList1, item)
        } else {
            var newList2 = aList.slice(midPoint, aList.length);
            return binarySearch(newList2, item);
        }
    }
}

