function inventory(arr) {
    let collectedItems = arr[0].split(', ');
    let commandsList = arr.slice(1,)
    for (const commands of commandsList) {
        if (commands === 'Craft!') {
            console.log(collectedItems.join(', '))
            break;
        }

        [command, item] = commands.split(' - ')
        if (command === 'Combine Items') {
            let oldItem = item.split(':')[0];
            let newItem = item.split(':')[1];
            if (collectedItems.includes(oldItem)) {
                let indexToInsert = collectedItems.indexOf(oldItem) + 1;
                if (indexToInsert >= collectedItems.length) {
                    collectedItems.push(newItem);
                } else {
                    collectedItems.splice(indexToInsert, 0, newItem);
                }
            }

        } else if (command === 'Collect') {
            if (!(collectedItems.includes(item))) {
                collectedItems.push(item);
            }

        } else if (collectedItems.includes(item)) {
            let index = collectedItems.indexOf(item);
            if (command === 'Drop') {
                collectedItems.splice(index, 1);
            } else if (command === 'Renew') {
                let currentItem = collectedItems.splice(index, 1);
                collectedItems.push(currentItem);
            }
        }
    }
}

inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]);

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])