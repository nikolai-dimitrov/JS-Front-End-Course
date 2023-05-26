function loopWithStep(arr, step) {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i += step) {
        filteredArray.push(arr[i]);
    }
    return filteredArray;
}

loopWithStep(['5', '20', '31', '4', '20'], 2)
loopWithStep(['dsa', 'asd', 'test', 'tset'], 2)
loopWithStep(['1', '2', '3', '4', '5'], 6)