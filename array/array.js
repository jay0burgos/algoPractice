var myArray = [10];

//populates an array, can insert manual inserts
for (let index = 0; index < 8; index++) { //works
    if (index%2 == 0) {
        myArray[index] = index+1;
    }
    else{
        myArray[index] = 69;
    }
    
}
 //function that populates the array
function pushfront(arr, val){ //works
    for (index = arr.length-1 ; index > 0; index--) {
       console.log(arr[index]);
       arr[index+1]= arr[index]
        
    }
    arr[0] = val;
}
//pushes index 1 to len-- forward one, deleting index 0 //Works!!!!! 
function PopFront(arr){
    for (i = 0; i < arr.length; i++){

        arr[i] = arr[i+1]
    } 
}

function insertAt(arr, val, index) { //works
    for (i = arr.length-1 ; i >= index; i--) {
        console.log(arr[i]);
        arr[i+1]= arr[i]
         
     }
     arr[index] = val;
}

function popIndex(arr, index) { //works
    if(index == 0){ 
        var temp = arr[0];
        PopFront(arr);
        return temp;
    }
    else{
        var temp = arr[index];
        for(i = index; i < arr.length-1; i++ ){
            //move all indexes, to the left of the popped one
            arr[i] = arr[i+1];
        }
        arr[arr.length-1] = null; //nullufies the last index since theres a push to the left
        return temp;
    }
}
function swapIndexes(arr) {
    if(arr.length%2 == 0) //even
    {
        for(i = 0; i < arr.length; i+=2)
        {
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    else
    {
        for(i = 0; i < arr.length-1; i+2) //with length being -1, prevents loop from running an extra time, leaving the final index unswapped with null
        {
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
}



// PopFront(myArray)
//insertAt(myArray, 56, 5)
//var poppedValue = popIndex(myArray, 3);
//console.log(poppedValue);
swapIndexes(myArray)
console.log(myArray);
