function solve() {
    let buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', quickCheck);
    buttons[1].addEventListener('click', clear);

    function quickCheck(event) {
        let allInputFields = [...document.querySelectorAll('tbody input')];
        let allInputValues = [];
        allInputFields.forEach(elem => allInputValues.push(Number(elem.value)));
        let firstRow = allInputValues.slice(0, 3);
        let secondRow = allInputValues.slice(3, 6);
        let thirdRow = allInputValues.slice(6, 9);
        let matrix = [firstRow, secondRow, thirdRow];
        let rowsEqual = false;
        let colsEqual = false;
        for (const el of matrix) {
            if ((el[0] === el[1]) || (el[0] === el[2]) || (el[1] === el[2])) {
                rowsEqual = true;
            }
        }
        for (let i = 0; i < matrix.length; i++) {
            if ((matrix[0][i] === matrix[1][i]) || (matrix[0][i] === matrix[2][i]) || (matrix[1][i] === matrix[2][i])) {
                colsEqual = true;
            }
        }
        if (rowsEqual === true || colsEqual === true) {
            document.querySelector('table').style.border = '2px solid red';
            let paragraph = document.querySelector('#check p');
            paragraph.textContent = "NOP! You are not done yet..."
            paragraph.style.color = 'red'
        }else {
            document.querySelector('table').style.border = '2px solid green';
            let paragraph = document.querySelector('#check p');
            paragraph.textContent = "You solve it! Congratulations!"
            paragraph.style.color = 'green'
        }
        console.log(firstRow, secondRow, thirdRow);
    }

    function clear(event) {
        let allInputFields = [...document.querySelectorAll('tbody input')].forEach(x => x.value = '');
        document.querySelector('table').style.border = '';
        let paragraph = document.querySelector('#check p');
        paragraph.textContent = '';
    }
}