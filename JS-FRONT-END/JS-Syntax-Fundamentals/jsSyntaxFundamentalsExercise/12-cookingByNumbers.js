function solve(number, ...arr) {
    let obj = {
        'chop': num => num / 2,
        'dice': num => Math.sqrt(num),
        'spice': num => num += 1,
        'bake': num => num * 3,
        'fillet': num => num -= num * 0.2,
    }
    let numb = Number(number);
    for (let i = 0; i < arr.length; i++) {
        numb = obj[arr[i]](numb);
        console.log(numb);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')