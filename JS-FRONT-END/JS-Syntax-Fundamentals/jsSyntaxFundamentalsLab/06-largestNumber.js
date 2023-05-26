function largestNumber(...arr) {
    let largestNum = Number.MIN_SAFE_INTEGER;
    // let arr = Array(a, b, c)
    for (let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);
        if (currentNum > largestNum) {
            largestNum = Number(arr[i]);
        }
    }
    console.log(`The largest number is ${largestNum}.`);
}

largestNumber(5, -3, 16);