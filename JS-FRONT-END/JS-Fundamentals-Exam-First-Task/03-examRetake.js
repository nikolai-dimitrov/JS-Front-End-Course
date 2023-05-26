function shootTargets(arr) {
    let sequenceAsInt = arr[0].split(' ').map((x) => Number(x));
    let items = arr.slice(1,);
    for (const item of items) {
        let command = item.split(' ')[0];
        let index = Number(item.split(' ')[1]);
        let value = Number(item.split(' ')[2]);
        if (command === 'Shoot' && (0 <= index && index < sequenceAsInt.length)) {
            sequenceAsInt[index] -= value;
            if (sequenceAsInt[index] <= 0) {
                sequenceAsInt.splice(index, 1);
            }
        } else if (command === 'Add') {
            if (0 <= index && index < sequenceAsInt.length) {
                sequenceAsInt.splice(index, 0, value);
            } else {
                console.log('Invalid placement!');
            }
        } else if (command === 'Strike') {
            let startIndex = index - value;
            let endIndex = index + value;
            if ((0 <= startIndex && startIndex < sequenceAsInt.length) && (0 <= endIndex && endIndex < sequenceAsInt.length)) {
                let firstHalf = sequenceAsInt.slice(0,startIndex);
                let secondHalf = sequenceAsInt.slice(endIndex+1,);
                sequenceAsInt = firstHalf.concat(secondHalf);

            } else {
                console.log('Strike missed!')
            }
        } else if (command === 'End') {
            console.log(sequenceAsInt.join('|'));
        }
    }
}


shootTargets(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
shootTargets(["1 2 3 4 5",
    "Strike 0 1",
    "End"])