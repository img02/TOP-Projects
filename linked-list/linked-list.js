import Node from "./node.js";

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const node = new Node(value, null);
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
            this.size += 1;
            return;
        }
        this.tail.next = node;
        this.tail = node;
        this.size += 1;
    }

    prepend(value) {
        const node = new Node(value, null);
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
            this.size += 1;
            return;
        }
        node.next = this.head;
        this.head = node;
        this.size += 1;
    }

    size() {
        return this.size;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {
        // if index out of bounds
        if (index < 0 || index >= this.size) return null;

        let temp = this.head;
        // i starts at 1 since we've already assigned first index (head)
        for (let i = 1; i <= index; i += 1) {
            temp = temp.next;
        }
        return temp;
    }

    pop() {
        let temp = this.head;
        while (temp.next !== this.tail) {
            temp = temp.next;
        }
        temp.next = null;
        this.tail = temp;
        this.size -= 1;
    }

    contains(value) {
        let temp = this.head;
        while (temp != null) {
            if (temp.value === value) return true;
            temp = temp.next;
        }
        return false;
    }

    find(value) {
        let temp = this.head;
        for (let i = 0; i < this.size; i += 1) {
            if (temp.value === value) return i;
            temp = temp.next;
        }
        return null;
    }

    toString() {
        let result = "";
        if (this.size > 0) {
            let temp = this.head;
            while (temp != null) {
                result += `${temp.toString()} -> `;
                temp = temp.next;
            }
        }
        result += "null";
        return result;
    }

    // bonus

    insertAt(value, index) {
        if (index < 0 || index >= this.size) return;
        const node = new Node(value, null);
        // find the node before the insertion index
        const prevNode = this.at(index - 1);
        const temp = prevNode.next;
        prevNode.next = node;
        node.next = temp;
        this.size += 1;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) return;
        // find the node before the removal index
        const prevNode = this.at(index - 1);
        // assign next node to the next-next node, thereby removing the middle node.
        prevNode.next = prevNode.next.next;
        this.size -= 1;
    }
}
