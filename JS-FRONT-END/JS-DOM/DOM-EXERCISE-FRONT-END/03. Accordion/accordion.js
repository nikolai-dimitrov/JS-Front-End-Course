function toggle() {
    let div = document.getElementById('extra');
    let btn = document.querySelector('span');
    if (btn.textContent === 'More') {
        div.style.display = 'block';
        btn.textContent = 'Less';
    }else if (btn.textContent === 'Less') {
        div.style.display = 'none';
        btn.textContent = 'More';
    }
}