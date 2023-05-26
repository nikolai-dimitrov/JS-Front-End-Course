function makeDictionary(arr) {
    let result = {};
    for (const el of arr) {
        let parsedEl = JSON.parse(el)
        for (const key in parsedEl) {
            result[key] = parsedEl[key];
        }
    }
    let sortedList = []
    for (const [key, value] of Object.entries(result)) {
        sortedList.push([key, value]);
    }
    sortedList = sortedList.sort((a, b) => {
        return a[0].localeCompare(b[0]);
    })
    const obj = Object.fromEntries(sortedList);
    for (const objKey in obj) {
        console.log(`Term: ${objKey} => Definition: ${obj[objKey]}`);
    }
}

makeDictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);