function factorialDivision(num, devider){
    let sum = 1;
    
    console.log(`${(facDivision(num)/facDivision(devider)).toFixed(2)}`);
 
    function facDivision(num){
        let sum = 1;
        for(i = num; i>=1; i--){
            sum *=i;
        }
        return sum;
    }
}
factorialDivision(2,1)