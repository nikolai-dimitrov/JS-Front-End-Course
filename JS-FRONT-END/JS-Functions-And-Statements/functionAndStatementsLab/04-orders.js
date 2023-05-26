function calcProductPrice(product, price) {
    let obj = {
        'coffee': 1.50,
        'water': 1.00,
        'coke': 1.40,
        'snacks': 2.00,
    }
    console.log((obj[product] * price).toFixed(2));
}

calcProductPrice('water', 5);
calcProductPrice('coffee', 2);
