function pAndSum(num, num2) {
    let sum = 0
    let sequence ="";

    for (let i = num; i <= num2; i++) {

        sum += i
        sequence += i + " ";


    }
    console.log(sequence)
    console.log(`Sum: ${sum}`)

}