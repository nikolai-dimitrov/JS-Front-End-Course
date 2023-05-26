function calc(a, b, operator) {
    let obj = {
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b,
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b,
    }
    console.log(obj[operator](a, b));
}

calc(5,5,'multiply');
