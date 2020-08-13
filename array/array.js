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

function swapIndexes(arr) { //works
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
//get min while orginizing, only pass the array with in
function minToFront(arr, index = 1, largestIndex = 0, max = arr.length-1){
    
    if(max == 0){ 
        return
    }

    if(arr[largestIndex] <= arr[index]){ //if next index is larger, it becomes largestIndex
        if (index == max){ //if index is equal to max, its already the largest, and if theres duplicates, it wont break the sort algo
            minToFront(arr, 0, 0, max-1);
        }
        else{
            minToFront(arr, index+1, index, max)  
        }
        

    }
    else{
        if(index == max)
        {
            var temp = arr[index];
            arr[index] = arr[largestIndex];
            arr[largestIndex] = temp;
            minToFront(arr, 0, 0, max-1);
        }
        else{
            minToFront(arr, index+1, largestIndex, max)
        }
        
    }
    
    
}

function reverse(arr, max = arr.length-1, min = 0){
    if (max < min){
        return;
    }
    else{
        var temp = arr[max];
        arr[max] = arr[min];
        arr[min] = temp;
        reverse(arr, max-1, min+1);
    }
}
myArray= [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function rotate(arr, num){
    for(i=0; i < num;i++){
        lastIndex = arr.length-1
        temp = arr[lastIndex]
        for(i = lastIndex; i > 0;i-- ){
            arr[i] = arr[i-1]
        }
        arr[0] = temp;
    }
}

// PopFront(myArray)
//insertAt(myArray, 56, 5)
//var poppedValue = popIndex(myArray, 3);
//console.log(poppedValue);
//swapIndexes(myArray)
//minToFront(myArray);
//reverse(myArray)
rotate(myArray, 1);
console.log(myArray);
