function solve() {
    Array.from(document.querySelectorAll('button')).forEach(x => x.addEventListener('click', onClick));

    function onClick(event) {
        if (event.target.textContent === 'Generate') {
            let objectsArray = JSON.parse(event.target.parentElement.querySelector('textarea').value);
            for (const obj of objectsArray) {
                let trElement = document.createElement('tr');
                let currentTrElement = document.querySelector('tbody').appendChild(trElement);
                for (let i = 0; i < 5; i++) {
                    currentTrElement.appendChild(document.createElement('td'));
                }
                let tdCollection = currentTrElement.children;
                for (let i = 0; i < tdCollection.length; i++) {
                    if (i === 0) {
                        tdCollection[i].appendChild(document.createElement('img'));
                    } else if (i === 4) {
                        tdCollection[i].appendChild(document.createElement('input')).type = 'checkbox';
                    } else {
                        tdCollection[i].appendChild(document.createElement('p'));
                    }

                }

                let tdChildCollection = currentTrElement.querySelectorAll('img, p, input');
                tdChildCollection[0].src = obj.img;
                tdChildCollection[1].textContent = obj.name;
                tdChildCollection[2].textContent = obj.price;
                tdChildCollection[3].textContent = obj.decFactor;
            }
        } else if (event.target.textContent === 'Buy') {
            let checkedItems = document.querySelectorAll('input');
            let totalSum = 0;
            let itemNames = [];
            let decorationFactor = {
                'value': 0,
                'count': 0,
            }
            for (let checkedItem of checkedItems) {
                if (checkedItem.checked === true) {
                    let paragraphs = checkedItem.parentElement.parentElement.querySelectorAll('td > p');
                    itemNames.push(paragraphs[0].textContent);
                    totalSum += Number(paragraphs[1].textContent);
                    decorationFactor.value += Number(paragraphs[2].textContent);
                    decorationFactor.count += 1;
                }
            }
            let outputTextArea = document.querySelectorAll('div textarea')[1];
            outputTextArea.value = `Bought furniture: ${itemNames.join(', ')}\nTotal price: ${totalSum.toFixed(2)}\nAverage decoration factor: ${decorationFactor.value / decorationFactor.count}`;
        }
    }
}