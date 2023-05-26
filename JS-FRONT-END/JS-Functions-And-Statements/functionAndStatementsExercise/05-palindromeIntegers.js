function findPalindromes(arr) {
    function reverseAndTest(item) {
        let reversedNum = item.toString().split('').reverse();
        reversedNum = Number(reversedNum.join(''));
        if (reversedNum === item) {
            console.log('true');
        } else {
            console.log('false');
        }
    }

    arr.forEach(el => reverseAndTest(el)
        //     let reversedNum = el.toString().split('').reverse();
        //     reversedNum = Number(reversedNum.join(''));
        //     if (reversedNum === el) {
        //         console.log('true');
        //     } else {
        //         console.log('false');
        //     }
        // }
    )
}
findPalindromes([123, 323, 421, 121]);