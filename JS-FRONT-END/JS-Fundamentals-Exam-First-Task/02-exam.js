function calculateAverage(sequence) {
    sequence = sequence.split(' ').map((x) => Number(x));
    let averageSum = 0;
    let greaterNumbers = [];
    for (const number of sequence) {
        averageSum += number;
    }
    averageSum /= sequence.length
    for (const num of sequence) {
        if (num > averageSum) {
            greaterNumbers.push(num);
        }
    }
    let result = greaterNumbers.sort((a, b) => b - a).slice(0, 5);
    if (greaterNumbers.length === 0) {
        console.log('No');
    } else {
        console.log(result.join(' '));
    }
}

calculateAverage('10 20 30 40 50');
calculateAverage('1')
calculateAverage('5 2 3 4 -10 30 40 50 20 50 60 60 51');
calculateAverage('-1 -2 -3 -4 -5 -6')