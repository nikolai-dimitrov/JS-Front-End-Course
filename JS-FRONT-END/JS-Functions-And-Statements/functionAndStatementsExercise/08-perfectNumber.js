function findPerfectNumber(num) {
    let totalSum = 0;
    for (let i = 1; i < num ; i++) {
        let n = num / i;
        if (Number.isInteger(n)) {
            totalSum += i;
        }
    }
    if (totalSum === num) {
        console.log('We have a perfect number!');
    }else {
        console.log(`It's not so perfect.`);
    }
}
findPerfectNumber(6);
findPerfectNumber(28);
findPerfectNumber(1236498);