function oddAndEven(num) {

    let numAsText = num.toString();
    function totalOddSum(numAsString) {
        let oddSUm = 0;
        for (let i = 0; i < numAsString.length; i++) {
            let currNum = Number(numAsString[i]);
            if (currNum % 2 !== 0) {
                oddSUm += currNum

            }

        }
        return oddSUm;
    }
    function totalEvenSum(numAsString) {
        let evenSum = 0;
        for (let j = 0; j < numAsString.length; j++) {
            let currNum = Number(numAsString[j]);
            if (currNum % 2 == 0) {
                evenSum += currNum

            }
        }
        return evenSum;
    }
        
    console.log(`Odd sum = ${totalOddSum(numAsText)}, Even sum = ${totalEvenSum(numAsText)}`);
}
oddAndEven(1000435)