function passwordCheck(arr) {
    let username = arr[0];
    let counter = 0;
    for (const currentPassword of arr.slice(1,)) {
        let newPassword = currentPassword.split('');
        newPassword = newPassword.reverse().join('');
        if (newPassword === username) {
            console.log(`User ${username} logged in.`);
            return;
        } else {
            if (counter !== 3) {
                console.log("Incorrect password. Try again.");
            }
        }
        counter += 1;
        if (counter === 4) {
            console.log(`User ${username} blocked!`);
            return;
        }
    }
}

passwordCheck(['Acer', 'login', 'go', 'let me in', 'recA']);
passwordCheck(['momo', 'omom']);
passwordCheck(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);