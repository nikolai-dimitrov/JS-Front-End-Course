function printAndSum(a, b) {
    let numbersArray = [];
    let totalSum = 0;
    for (let i = a; i <= b; i++) {
        numbersArray.push(i)
        totalSum += i;
    }
    console.log(numbersArray.join(' '));
    console.log(`Sum: ${totalSum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);