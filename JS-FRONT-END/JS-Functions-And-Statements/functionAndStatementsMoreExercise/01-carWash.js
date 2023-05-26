function calculateValue(arr) {
    let value = 0;
    arr.forEach((el) => {
        switch (el) {
            case 'soap':
                value += 10;
                break;
            case 'water':
                value += value * 0.20;
                break;
            case 'vacuum cleaner':
                value += value * 0.25;
                break;
            default:
                // value *= 0.90
                value -= value * 0.10;
        }
    })
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

calculateValue(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
calculateValue(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);