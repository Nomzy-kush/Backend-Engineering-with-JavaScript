// Singular Linked Lists

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
    let newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    // In a case where there were no nodes and the head and tail point to nothing, here's how you'll write the code 
    
    // if (!this.head) {
    //     this.head = newNode;
    //     this.tail = newNode;
    // }
}

    pop() {
        let temp = this.head
        let prev = this.head


    while (temp.next) {
        prev = temp
        temp = prev.next
    }


    this.tail = prev
    this.tail.next = null
    this.length--;


    return temp;


    // some edge cases

    // if you don't have any element 
    // if (this.length === 0) {
    //     this.head = null;
    //     this.tail = null;
    // }


    }

    unshift(value) {
        const newNode = new Node(value);


        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }


        newNode.next = this.head
        this.head = newNode


        this.length++;
        return this;

    }

    shift() {
        if (!this.head) {
            return undefined;
        }


        // Point the first node/element 
        let temp = this.head

        // 2. Move the head to next node/element
        this.head = this.head.next

        // 3. Remove the first element 
        temp.next = null
        this.length--

        if (this.length === 0) {
            this.tail = null
        }

        return temp;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if(!this.head) {
            return null;
        }

        let temp = this.head

        while (temp) {
            if (!temp.next) {
                return temp;
            }

            temp = temp.next

        }
    }

    get (index) {
        let counter = 0;
        let temp = this.head

        while (temp) {
            if(counter === index) {
            return temp
        }

        counter++;
        temp = temp.next;
        }
    }

    set(index, value) {
        let temp = this.get(index)
        
        if(temp) {
            temp.value = value
            return true
        }
         return false
    }

    insert(index, value) {

    if (index === 0) {
        return this.unshift(value)
    }

    if (index === this.length) {
        return this.push(value)
    }

    const newNode = new Node(value);

    // uses the get method to find the node right before the desired position (index - 1)

    const temp = this.get(index - 1)

    newNode.next = temp.next
    temp.next = newNode
    this.length++;
    return true;
    }


    size () {
        let counter = 0;

        let temp = this.head;

        while (temp) {
            counter++;
            temp = temp.next;
        }
        return counter;
    }

    clear () {
        this.head = null;
    }

    
}



const myLinkedList = new LinkedList(0)

myLinkedList.push(1)
myLinkedList.push(2)
myLinkedList.push(3)
// myLinkedList.pop();
// myLinkedList.unshift(10);
// myLinkedList.shift();




// console.log(myLinkedList.set(3, 20));
// myLinkedList.insert(1, 22);
// console.log(myLinkedList);
console.log(myLinkedList.size());





