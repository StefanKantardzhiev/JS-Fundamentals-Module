function palindromeInteger(arr) {
    let myArr = arr;
    function isPalindrome (num) {
        let startNum = num;
        let revNum = (Number(num.toString().split('').reverse().join(``)));
        if(startNum === revNum){
            return true;
        }
        else{
            return false;
        }

    }
    for(i=0;i<myArr.length;i++){
        let currNum = myArr[i];
        console.log(isPalindrome(currNum))
    }
}
palindromeInteger([123,323,421,121])