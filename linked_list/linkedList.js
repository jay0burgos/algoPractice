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

    populate(){//used to populate the array for the sake of debugging
        for(var i = 0;i < 15; i++ ){
            this.push(Math.random());
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

    displayList(){ //returns a string containin all the nodes' values
        var currentNode = this.head;
        var listString =""
        while(currentNode){
            listString +=currentNode.value + " ";
            currentNode = currentNode.next;
        }
        return listString;
    }
    getMax(){//returns the node with highest value
        var currentNode = this.head.next;
        var highestNode = this.head;
        while(currentNode){ //runs till it hits a null node
            if(highestNode.value < currentNode){
                highestNode = currentNode;
            }
            currentNode = currentNode.next;
        }
        return highestNode;
    }

    getMin(){ //returns the node with lowest value
        var currentNode = this.head.next;
        var minNode = this.head;
        while(currentNode){ //runs till it hits a null node
            if(minNode.value > currentNode){
                minNode = currentNode;
            }
            currentNode = currentNode.next;
        }
        return minNode;
    }

    displayHighest(){
        var highest =this.getMax();
        return highest.value;
    }

    displayLowest(){
        var lowest = this.getMin();
        return lowest.value;
    }

    getValueAv(){ //returns average of all the values
        var currentNode = this.head;
        var total = 0;
        
        while(currentNode){ //runs till it hits a null node
            total += currentNode.value;
            currentNode = currentNode.next;
        }
        return (minNode/this.length);
    }

}

function getEnd(nodeVar){
    var currentNode = varNode;
    while(currentNode){
        currentNode = currentNode.next;
    }
    return currentNode;
}


 var newList = new linkedList();
 newList.populate();
 var list = newList.displayList();
 console.log(list);

// newList.head = new node(5)

// console.log(newList.head.next)

// newList.push(10)

// console.log(newList.head.next)

// newList.removeFront()

// console.log(newList.head)
