import LinkedList from "./linked-list.js";

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

test();
