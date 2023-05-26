function calculate(a, operator, b) {
    let obj = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '/': (a, b) => a / b,
        '*': (a, b) => a * b,
    };
    console.log((obj[operator](a, b)).toFixed(2));
}

calculate(5, '+', 10);
calculate(25.5, '-', 3);