class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }

    // constructor(){
    //     this.value = null;
    //     this.next = null;
    // }
    toString() {
        return `( ${this.value} )`;
    }
}

module.exports = Node;
