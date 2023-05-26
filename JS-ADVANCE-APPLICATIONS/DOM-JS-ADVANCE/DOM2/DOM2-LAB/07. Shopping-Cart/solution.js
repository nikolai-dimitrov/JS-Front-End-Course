function solve() {
    console.log();
    Array.from(document.getElementsByClassName('add-product')).forEach(x => x.addEventListener('click', onClick));
    Array.from(document.getElementsByClassName('checkout'))[0].addEventListener('click', checkOut);

    let textAreaElement = document.querySelector('textarea');
    let shoppingArr = [];
    let totalPrice = 0

    function onClick(event) {
        let childrenCollection = event.target.parentElement.parentElement.children;
        let productName = childrenCollection[1].children[0].textContent;
        let productPrice = Number(childrenCollection[3].textContent);
        textAreaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
        totalPrice += productPrice
        if (!shoppingArr.includes(productName)) {
            shoppingArr.push(productName);
        }
    }

    function checkOut(event) {
        textAreaElement.textContent += `You bought ${shoppingArr.join(', ')} for ${totalPrice.toFixed(2)}.`;
        Array.from(document.getElementsByClassName('add-product')).forEach(x => x.disabled = true);
        Array.from(document.getElementsByClassName('checkout'))[0].disabled = true;
    }
}
