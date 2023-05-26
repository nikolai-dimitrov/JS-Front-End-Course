function sumNumberDigits(num) {
    let text = String(num);
    let totalSum = 0;
    for (let i = 0; i < text.length ; i++) {
        totalSum += Number(text[i]);
    }
    console.log(totalSum);
}
sumNumberDigits(245678);
sumNumberDigits(97561);
sumNumberDigits(543);