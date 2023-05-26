function deleteByEmail() {
    let searchedEmail = document.querySelector('label input').value;
    let allTrs = Array.from(document.querySelectorAll('tr td:last-child')).map((x) => {
        let content = x.textContent;
        if (content === searchedEmail) {
            let parentEl = x.parentElement;
            parentEl.remove();
            document.getElementById('result').textContent = 'Deleted.';
        }else {
            document.getElementById('result').textContent = 'Not found.';
        }
    });
}