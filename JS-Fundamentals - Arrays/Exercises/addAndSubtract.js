function addAndSubtract(arr){
    let myArr = arr;
    let sumOfArr = 0;
    let modArrSum = 0;


    for(let i = 0;i < myArr.length;i++){
        sumOfArr += myArr[i];
    if(myArr[i] % 2 === 0){
        myArr[i] += i;
        }else{
        myArr[i] -= i;
        }   
    modArrSum += myArr[i];
    }
    


    console.log(myArr)
    console.log(sumOfArr)
    console.log(modArrSum)

}
addAndSubtract([5,15,23,56,35])