/**
 * n - 1 passes to loop through each item and swap until its done
 * O(n)(n)
 * @param {*} items 
 */
function bubbleSort(items) {
    let length = items.length;
    for ( var i = 0; i< length; i++) {
        for (var a = 0; a < (length - i - 1); a++) {
            if (items[j] > item[i]) {
                let temp = items[j];
                items[j] = items[j+1];
                items[j+1] = temp; 
            }
        }
    }
    return items;
}

/**
 * Swap position of the largest with current position
 * @param {*} items 
 */
function selectionSort(items) {
}

/**
 * Sort sub array with the increment of index
 * [1,3] -> [1,3,5] -> [1,3,5,7...]
 * @param {*} items 
 */
function insertionSort(items) {
}

/**
 * Break into multiple sub array with a specified gap
 * Sort each of the sub array
 * lastly, run insertion sort
 * @param {*} items 
 */
function shellSort(items) {
}

