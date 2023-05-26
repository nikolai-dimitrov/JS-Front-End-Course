function addItem() {
    let list = document.getElementById('items');
    let li = document.createElement("li");
    li.textContent = document.getElementById('newItemText').value;
    list.appendChild(li);
}