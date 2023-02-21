function fibs(n, result) {
    if (n === 1) {
        result.push(0);
        return;
    }

    fibs(n - 1, result);

    if (n === 2) {
        result.push(1);
    } else {
        // fib is 1-indexed, array is 0-indexed.
        // so instead of [n-1] + [n-2], need to adjust
        result.push(result[n - 2] + result[n - 3]);
    }
}

function fibs2(n) {
    if (n <= 0) return [];
    if (n === 2) return [0, 1];
    return [...fibs2(n - 1), fibs2(n - 1)[n - 2] + fibs2(n - 1)[n - 3]];
}

function test() {
    console.log("n == 1 : Should print [0]");
    console.log(`Result: ${fibs2(1)}`);

    console.log("n == 2 : Should print [0,1]");
    console.log(`Result: ${fibs2(2)}`);

    console.log("n == 3 : Should print [0,1,1]");
    console.log(`Result: ${fibs2(3)}`);

    console.log("n == 4 : Should print [0,1,1,2]");
    console.log(`Result: ${fibs2(4)}`);

    console.log("n == 7 : Should print [0,1,1,2,3,5,8]");
    console.log(`Result: ${fibs2(7)}`);

    console.log("n == 10 : Should print [0,1,1,2,3,5,8,13,21,34]");
    console.log(`Result: ${fibs2(10)}`);
}

test();

// function test() {
//     let result = [];
//     fibs(1, result);
//     console.log("n == 1 : Should print [0]");
//     console.log(`Result: ${result}`);

//     result = [];
//     fibs(2, result);
//     console.log("n == 2 : Should print [0,1]");
//     console.log(`Result: ${result}`);

//     result = [];
//     fibs(3, result);
//     console.log("n == 3 : Should print [0,1,1]");
//     console.log(`Result: ${result}`);

//     result = [];
//     fibs(4, result);
//     console.log("n == 4 : Should print [0,1,1,2]");
//     console.log(`Result: ${result}`);

//     result = [];
//     fibs(7, result);
//     console.log("n == 7 : Should print [0,1,1,2,3,5,8]");
//     console.log(`Result: ${result}`);

//     result = [];
//     fibs(10, result);
//     console.log("n == 10 : Should print [0,1,1,2,3,5,8,13,21,34]");
//     console.log(`Result: ${result}`);
// }

// test();
