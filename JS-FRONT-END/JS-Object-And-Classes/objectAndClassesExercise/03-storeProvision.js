function storeProvision(productsInStock, productsInOrder) {
    let result = {};
    for (let i = 0; i < productsInStock.length - 1; i += 2) {
        if (!(productsInStock[i] in result)) {
            result[productsInStock[i]] = 0;
        }
        result[productsInStock[i]] += Number(productsInStock[i + 1]);
    }
    for (let i = 0; i < productsInOrder.length - 1; i += 2) {
        if (!(productsInOrder[i] in result)) {
            result[productsInOrder[i]] = 0;
        }
        result[productsInOrder[i]] += Number(productsInOrder[i + 1]);
    }
    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
}

storeProvision([

        'Chips', '5', 'CocaCola', '9', 'Bananas',

        '14', 'Pasta', '4', 'Beer', '2'

    ],

    [

        'Flour', '44', 'Oil', '12', 'Pasta', '7',

        'Tomatoes', '70', 'Bananas', '30'

    ]);
storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'], ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'])

// function storeProvision(productsInStock, productsInOrder) {
//     let result = {};
//     for (let i = 0; i < productsInOrder.length - 1 ; i += 2) {
//         if (!(productsInStock[i] in result)) {
//             result[productsInStock[i]] = 0;
//         }
//         result[productsInStock[i]] += Number(productsInStock[i + 1]);
//         if (!(productsInOrder[i] in result)) {
//             result[productsInOrder[i]] = 0;
//         }
//         result[productsInOrder[i]] += Number(productsInOrder[i + 1]);
//     }
//     console.log(result);
// }