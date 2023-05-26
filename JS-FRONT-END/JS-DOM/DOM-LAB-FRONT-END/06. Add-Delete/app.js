function addItem() {
    let list = document.getElementById('items');
    let li = document.createElement("li");
    li.textContent = document.getElementById('newItemText').value;
    list.appendChild(li);

    let aHref = document.createElement('a');
    aHref.textContent = '[Delete]';
    aHref.setAttribute('href', '#');
    li.appendChild(aHref);

    let inputElement = document.getElementById('newItemText');
    inputElement.value = ''

    // add delete event on all li.
    document.getElementById('items').addEventListener('click', onDelete);

    function onDelete(event) {
        if (event.target.tagName === 'A') {
            console.log(event.target.parentElement.remove());
        }
    }
}