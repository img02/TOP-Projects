function mergeSort(arr) {
    // if the sub-array has been broken down into a singular number, return.
    if (arr.length === 1) return arr;

    // otherwise find, 'mid' point, and break down further.
    const mid = arr.length / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    // recursive calls
    left = mergeSort(left);
    right = mergeSort(right);

    // once recursive calls returned, sort the sub-arrays.
    // when the initial array length is uneven, some sub-array comparisons will have different lengths.
    const result = [];
    // while both sub-arrays have values remaining.
    while (left.length > 0 && right.length > 0) {
        // compare left and right value, then push to result, and shift off (removes from beginning of the arr.) from sub-array.
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    // finally, push any remaining values onto result. If sub-array has no values, nothing will be added.
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
