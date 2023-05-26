function validatePassword(password) {
    let digitsCount = 0;
    let alphasCount = 0;
    let otherSymbolsCount = 0;
    password = password.toLowerCase();
    password.split('').forEach((el) => {
        if (el in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) {
            digitsCount += 1;
        } else if (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) {
            alphasCount += 1;
        } else {
            otherSymbolsCount += 1;
        }
    });
    if ((password.length >= 6 || password.length <= 10) && (digitsCount >= 2) && (!otherSymbolsCount)) {
        console.log('Password is valid');
        return;
    }
    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (otherSymbolsCount > 0) {
        console.log('Password must consist only of letters and digits');
    }
    if (digitsCount < 2) {
        console.log('Password must have at least 2 digits');
    }
}

validatePassword('logIn');
validatePassword('MyPass123');
validatePassword('Pa$s$s');