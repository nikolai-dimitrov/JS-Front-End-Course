function solve(...nums) {
    let negativeCounter = 0;
    for (const num of nums) {
        if (num < 0) {
            negativeCounter += 1
        }
    }
    if (negativeCounter % 2 === 0) {
        console.log('Positive');
    }else {
        console.log('Negative');
    }
}

solve(5, 12, -15);
solve(-6, -12, 14);
solve(-1, -22, -3);
solve(-5, 1, 1);