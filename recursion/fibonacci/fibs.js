function fibs(n) {
    const result = [];

    if (n >= 1) result.push(0);
    if (n >= 2) result.push(1);
    if (n >= 3) result.push(1);

    // since fib is 1-indexed, and array is 0-indexed
    // we need to start at 3, and stop before n.
    for (let i = 3; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}

function test() {
    console.log("n == 1 : Should print [0]");
    console.log(`Result: ${fibs(1)}`);

    console.log("n == 2 : Should print [0,1]");
    console.log(`Result: ${fibs(2)}`);

    console.log("n == 3 : Should print [0,1,1]");
    console.log(`Result: ${fibs(3)}`);

    console.log("n == 4 : Should print [0,1,1,2]");
    console.log(`Result: ${fibs(4)}`);

    console.log("n == 7 : Should print [0,1,1,2,3,5,8]");
    console.log(`Result: ${fibs(7)}`);

    console.log("n == 10 : Should print [0,1,1,2,3,5,8,13,21,34]");
    console.log(`Result: ${fibs(10)}`);
}

test();
