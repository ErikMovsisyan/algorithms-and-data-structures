
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;

    }
}
class SingleLinkLIst {
    
    constructor(iterable = []) {
        this.head = null;
         this.tail = null;
        if (typeof iterable[Symbol.iterator] === 'function' ) {
        for (let item of iterable) {
            let newNode = new Node(item);
            
            if (this.head  === null) {
                this.head = newNode;
                this.tail = newNode;
            }
            else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
        }
        }
        else {
            throw new Error("Provided value is not iterable")
        }
    }
    push_front(elem) {
        let node = new Node(elem);
        node.next = this.head;
        this.head = node;
    }
    push_back(value) {
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
    }
    pop_front() {
        this.head = this.head.next;
    }
    pop_back() {
        if (!this.head) return;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }
        let current = this.head;
        while (current.next !== this.tail) {
            current = current.next;
        }
        current.next = null;
        this.tail = current;
    }
    clear() {
        this.head = null;
        this.tail = null;
    }
    isEmpty() {
        return this.head == null ? true : false;
    }
    size() {
        let count = 0;
        while (this.head) {
            count++;
            this.head = this.head.next;
        }
         return count;
    }
    at(index) {
        let current = this.head;
        for (let i = 0; i < index; ++i) {
            current = current.next;
        }
        return current.data;
    }
    insert(index,value) {

    }
}
let list = new SingleLinkLIst([1,2]);
console.log(list.head);
//.clear();

console.log(list.at(0));



