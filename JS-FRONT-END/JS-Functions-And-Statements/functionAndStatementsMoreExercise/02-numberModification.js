function makeAverageThanFive(number) {
    let result = 0;
    let numberAsString = number.toString();
    let numberAsArr = number.toString().split('').map((x) => result += Number(x));
    let startLength = numberAsString.length;
    let avg = result / startLength;

    while (avg <= 5) {
        result += 9;
        startLength += 1;
        numberAsString = numberAsString + '9';
        avg = result / startLength;
    }
    console.log(Number(numberAsString));
}
makeAverageThanFive(101);
makeAverageThanFive(5835);
