class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

    class DoublyLinkedList {
        constructor(value) {
            const newNode = new Node(value)
            this.head = newNode;
            this.tail = this.head;
            this.length = 1;
        }

        

        push (value) {
            const newNode = new Node(value);

            if(!this.head) {
                this.head = newNode;
                this.tail = newNode;
            }

            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.length++;
            return this;
        }


        pop () {

            if (this.length === 0) {
                return undefined;
            }

            let temp = this.tail;

            if (this.length === 1) {
        this.head = null;
        this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }

            this.length--;
            return temp;

        }

        unshift(value) {
            const newNode = new Node(value);

            if (!this.length === 0) {
                this.head = newNode;
                this.tail = newNode;
            }

            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.length++;
            return this;

        }

    shift() {
        if (this.length === 0) {
            return undefined;
        }

        let temp = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }

        this.length--;
        return temp;
    }

    reverse() {
        if (this.length === 0) {
            return undefined;
        }

        let temp = this.head;

        // swap head and tail
        this.head = this.tail;
        this.tail = temp;

        let next = null;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = temp.next;  
            temp.next = prev;  
            temp.prev = next;  
            prev = temp;      
            temp = next;    
        }

        return this;
    }

    printList() {
        let temp = this.head;
        let values = [];
        while (temp) {
            values.push(temp.value);
            temp = temp.next;
        }
        console.log(values.join(' <-> '));
    }


}


 let myDoublyLinkedList = new DoublyLinkedList(0);
 myDoublyLinkedList.push(1);
 myDoublyLinkedList.push(2);
 myDoublyLinkedList.push(3);
// myDoublyLinkedList.pop();
// myDoublyLinkedList.shift();
myDoublyLinkedList.reverse();
myDoublyLinkedList.printList();
console.log(myDoublyLinkedList);
 