function testF(array) {
    let sequence = array[0].split(' ');
    let commands = array.slice(1,);
    let turnsCounter = 0;
    for (const command of commands) {
        if (command === 'end' && sequence.length > 0) {
            console.log('Sorry you lose :(');
            console.log(sequence.join(' '));
            return
        } else if (sequence.length === 0) {
            console.log(`You have won in ${turnsCounter} turns!`);
            return
        }
        let splittedCommand = command.split(' ')
        let firstIndex = Number(splittedCommand[0]);
        let secondIndex = Number(splittedCommand[1]);
        turnsCounter += 1;
        if ((firstIndex === secondIndex) || (firstIndex < 0 || firstIndex >= sequence.length) || (secondIndex < 0 || secondIndex >= sequence.length)) {
            let middleSeqIndex = sequence.length / 2
            sequence.splice(middleSeqIndex, 0, `-${turnsCounter}a`);
            sequence.splice(middleSeqIndex, 0, `-${turnsCounter}a`);
            console.log("Invalid input! Adding additional elements to the board");
        } else if (sequence[firstIndex] === sequence[secondIndex]) {
            console.log(`Congrats! You have found matching elements - ${sequence[firstIndex]}!`);
            let searchedElement = sequence[firstIndex];
            sequence = sequence.filter((x) => x !== searchedElement);
        } else if (sequence[firstIndex] !== sequence[secondIndex]) {
            console.log("Try again!");
        }
    }
}

testF([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]);
testF([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
])

// testF([
//     "a 2 4 a 2 4",
//     "4 0",
//     "0 2",
//     "0 1",
//     "0 1",
//     "end"
// ])