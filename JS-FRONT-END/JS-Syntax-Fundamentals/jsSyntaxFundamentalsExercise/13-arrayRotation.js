function rotate(arr, num) {
    for (let i = 0; i < num; i++) {
        let currentEl = arr.shift();
        arr.push(currentEl);
    }
    console.log(arr.join(' '));
}
rotate([51, 47, 32, 61, 21], 2);
rotate([32, 21, 61, 1], 4);