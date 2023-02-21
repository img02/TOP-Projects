function mergeSort(arr) {
    if (arr.length === 1) return arr;

    const mid = arr.length / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    left = mergeSort(left);
    right = mergeSort(right);

    const result = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    // in case on uneven sub-arrays, push any remaining values
    result.push(...left, ...right);

    return result;
}
function test() {
    let arr = [4, 1, 5, 9, 2, 6, 4];
    console.log("arr = [4,1,5,9,2,6,4] :");
    console.log(mergeSort(arr));

    arr = [9, 3, 5];
    console.log("arr = [9,3,5] :");
    console.log(mergeSort(arr));

    arr = [99, 33, 55, 76, 12, 2, 38];
    console.log("arr = [99,33,55,76,12,2,38] :");
    console.log(mergeSort(arr));
}

test();
