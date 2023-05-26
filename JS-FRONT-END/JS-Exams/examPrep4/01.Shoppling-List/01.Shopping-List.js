function manageShopping(arr) {
    let productsList = arr.shift().split('!')
    let commandManager = {
        'Urgent': function (item) {
            if (productsList.indexOf(item) === -1) {
                productsList.unshift(item);
            }
        },
        'Unnecessary': function (item) {
            if (productsList.indexOf(item) !== -1) {
                let index = productsList.indexOf(item);
                productsList.splice(index, 1);
            }
        },
        'Correct': function (oldItem, newItem) {
            if (productsList.indexOf(oldItem) !== -1) {
                let index = productsList.indexOf(oldItem)
                productsList[index] = newItem;
            }
        },
        'Rearrange': function (item) {
            if (productsList.indexOf(item) !== -1) {
                let index = productsList.indexOf(item);
                productsList.splice(index, 1);
                productsList.push(item);
            }
        },
    }
    for (const line of arr) {
        if (line === "Go Shopping!") {
            break
        }
        let splitedLine = line.split(' ');
        let command = splitedLine[0];
        let product = splitedLine[1];
        if (command === 'Correct') {
            let newProduct = splitedLine[2];
            commandManager[command](product, newProduct);
        } else {
            commandManager[command](product);
        }
    }
    console.log(productsList.join(', '));
}

// manageShopping(
//     ["Tomatoes!Potatoes!Bread",
//         "Unnecessary Milk",
//         "Rearrange Tomatoes",
//         "Correct Tomatoes Onion",
//         "Urgent Tomatoes",
//         "Go Shopping!"]
// )
manageShopping(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])