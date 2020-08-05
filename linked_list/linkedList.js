class node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new node(val);
        if(this.head != null){
        console.log("pushing next")
        this.head.next = this.head
        console.log(this.node.next);
        this.head = newNode;
        this.length++;
        }
        else{
            this.head = newNode;
            this.length++;
        }        
    }
    removeFront(){
        if(this.head.next != null){
            console.log(this.head.next.value)
            console.log("next isnt null")
            this.head = this.head.next;
            console.log(this.head.value)
        }
        else
            this.head = null;
    }

}


newList = new linkedList()

newList.head = new node(5)

console.log(newList.head.next)

newList.push(10)

console.log(newList.head.next)

newList.removeFront()

console.log(newList.head)