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
    push(val) { //pushes a new node to the front
        var newNode = new node(val); 
        if(this.head != null){ //if the list isnt empty execute
        console.log("pushing next")
        var newNode = new node(val) //creates a new node
        newNode.next = this.head //adds the head as its next variable
        this.head = newNode //assigns the head as the new node
        
        this.length++;//increments length
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
    findNode(val){ //finds if val is in the list returns a boolean
        var currentNode = this.head;
        for( ;currentNode != null; currentNode=currentNode.next){
            if(currentNode.val == val){
                return true;
            }
        }
        return false;
    }
    
    displayLenght(){
        return this.length;
    }

    displayList(){
        var currentNode = this.head;
        var listString =""
        while(currentNode){
            listString +=currentNode.value + " ";
            currentNode = currentNode.next;
        }
        return listString;
    }

}


newList = new linkedList()

newList.head = new node(5)

console.log(newList.head.next)

newList.push(10)

console.log(newList.head.next)

newList.removeFront()

console.log(newList.head)
