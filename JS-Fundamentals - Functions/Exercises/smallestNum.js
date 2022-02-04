function addAndSubtract(num1,num2,num3) {
    
    let sumOfArr = num1+num2;
    let subtract = sumOfArr-num3;

    if(subtract <= 0){
        console.log(`0`)
    }else{
    console.log(subtract);
    }
}
addAndSubtract(1,2,3)