function sumOfNumbers(input) {

    let sum = 0;
    let numbersToString = input.toString();
    

    for (let index = 0; index < numbersToString.length; index++) {
        sum += Number(numbersToString[index]);
    }
    console.log(sum);
}