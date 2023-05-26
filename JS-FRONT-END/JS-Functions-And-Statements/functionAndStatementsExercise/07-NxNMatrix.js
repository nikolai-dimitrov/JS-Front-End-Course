function buildMatrix(num) {
    for (let i = 0; i < num; i++) {
        let ll = [];
        for (let j = 0; j < num; j++) {
            ll.push(num);
        }
        console.log(ll.join(' '));
    }
}

buildMatrix(3);
buildMatrix(7);