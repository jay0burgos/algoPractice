function rSigma(num){

    if(num == 1){
        return 1;
    }
    if(num <= 0){
        return 0;
    }
    return rSigma(num-1) + num;

}

function factorial(num){
    if(num == 1){
        return 1;
    }
    if(num <= 0){
        return 0;
    }
    return rSigma(num-1) * num;
}
