const LinkedList = require("./linked-list");

const list = new LinkedList();

// initial state
it("Initial Size", () => {
    expect(list.size).toBe(0);
});

it("Head Null", () => {
    expect(list.head).toBeNull();
});

it("Tail Null", () => {
    expect(list.tail).toBeNull();
});

// append
it("append 2", () => {
    list.append(2);
    expect(list.toString()).toBe("( 2 ) -> null");
});

it("append 3", () => {
    list.append(3);
    expect(list.toString()).toBe("( 2 ) -> ( 3 ) -> null");
});

// prepend
it("prepend 1", () => {
    list.prepend(1);
    expect(list.toString()).toBe("( 1 ) -> ( 2 ) -> ( 3 ) -> null");
});

// size
it("Size is now 3", () => {
    expect(list.size).toBe(3);
});

// head tail
it("Head val is now 1", () => {
    expect(list.head.value).toBe(1);
});

it("Tail val is now 3", () => {
    expect(list.tail.value).toBe(3);
});

// contains
it("Contains 2", () => {
    expect(list.contains(2)).toBe(true);
});

it("Doesn't contain 9", () => {
    expect(list.contains(9)).toBe(false);
});

// find
it("Find 2 returns index 1", () => {
    expect(list.find(2)).toBe(1);
});
it("Find 9 returns null", () => {
    expect(list.find(9)).toBe(null);
});

// pop
it("Pop() removes 3", () => {
    list.pop();
    expect(list.toString()).toBe("( 1 ) -> ( 2 ) -> null");
});

// append more
it("Append and Prepend 3,5,6,0", () => {
    list.append(3);
    list.append(5);
    list.append(6);
    list.prepend(0);
    expect(list.toString()).toBe(
        "( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 5 ) -> ( 6 ) -> null"
    );
});

// insertAt
it("Insert value 4 at index 4", () => {
    list.insertAt(4, 4);
    expect(list.toString()).toBe(
        "( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> null"
    );
});
it("Insert value -1 at index 0", () => {
    list.insertAt(-1, 0);
    expect(list.toString()).toBe(
        "( -1 ) -> ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> null"
    );
});
it("Insert value 7 at index 8", () => {
    list.insertAt(7, 8);
    expect(list.toString()).toBe(
        "( -1 ) -> ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> null"
    );
});

// removeAt
it("Remove at index 8", () => {
    list.removeAt(8);
    expect(list.toString()).toBe(
        "( -1 ) -> ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> null"
    );
});
it("Remove at index 0", () => {
    list.removeAt(0);
    expect(list.toString()).toBe(
        "( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> null"
    );
});
it("Remove at index 4", () => {
    list.removeAt(4);
    expect(list.toString()).toBe(
        "( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 5 ) -> ( 6 ) -> null"
    );
});

// old
function test() {
    const list = new LinkedList();

    console.log(`Initial Size:\t\t\t\t ${list.size}`);
    console.log(`Head and Tail Null:\t\t\t ${list.head} ${list.tail}`);

    // append
    list.append(2);
    console.log(`Appending 2:\t\t\t\t ${list.toString()}`);
    list.append(3);
    console.log(`Appending 3:\t\t\t\t ${list.toString()}`);

    // prepend
    list.prepend(1);
    console.log(`Prepending 1:\t\t\t\t ${list.toString()}`);

    // size
    console.log(`Size:\t\t\t\t\t ${list.size}`);

    // head tail
    console.log(`Head val (1):\t\t\t\t ${list.head.value}`);
    console.log(`Tail val (3):\t\t\t\t ${list.tail.value}`);

    // contains
    console.log(`Contains 2 (true):\t\t\t ${list.contains(2)}`);
    console.log(`Contains 9 (false):\t\t\t ${list.contains(9)}`);

    // find
    console.log(`Find 2 (index 1):\t\t\t ${list.find(2)}`);
    console.log(`Find 9 (null):\t\t\t\t ${list.find(9)}`);

    // pop
    list.pop();
    console.log(`Pop (delete 3):\t\t\t\t ${list.toString()}`);

    // append more
    list.append(3);
    list.append(5);
    list.append(6);
    list.prepend(0);
    console.log(`Appended and Prepended (0,1,2,3,5,6):\t ${list.toString()}`);

    // insertAt
    list.insertAt(4, 4);
    console.log(`Insert at index: 4, value: 4:\t\t ${list.toString()}`);
    list.insertAt(-1, 0);
    console.log(`Insert at index: 0, value: -1:\t\t ${list.toString()}`);
    list.insertAt(7, 8);
    console.log(`Insert at index: 8, value: 7:\t\t ${list.toString()}`);

    // removeAt
    list.removeAt(8);
    console.log(`Remove at index: 8:\t\t\t ${list.toString()}`);
    list.removeAt(0);
    console.log(`Remove at index: 0:\t\t\t ${list.toString()}`);
    list.removeAt(4);
    console.log(`Remove at index: 4:\t\t\t ${list.toString()}`);

    console.log("done!");
}
