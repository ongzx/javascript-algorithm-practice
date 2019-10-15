// sort 3 values in an array without using sort and with O(n) complexity

function swap(arr, i1, i2) {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

function DutchNatFlag(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0 ) {
            swap(arr, low++, mid++);
        } else if (arr[mid] === 2) {
            swap(arr, mid, high--);
        } else if (arr[mid] === 1) {
            mid++;
        }
    }
    console.log(arr);
    return arr;
}

DutchNatFlag([2,0,1]);