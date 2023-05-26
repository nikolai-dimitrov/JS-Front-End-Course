function lockedProfile() {
    Array.from(document.querySelectorAll('div button')).forEach(x => x.addEventListener('click', onClick));

    function onClick(event) {
        let currentParentEl = event.target.parentElement;
        let radiosBtn = currentParentEl.querySelector("input[type=radio]");
        currentParentEl.querySelector('button').textContent = 'Show more';
        // console.log(radiosBtn);
        if (!radiosBtn.checked === true) {
            let hiddenDiv = currentParentEl.querySelector('div');
            if (hiddenDiv.style.display === '') {
                hiddenDiv.style.display = 'block';
                currentParentEl.querySelector('button').textContent = 'Hide it';
            } else {
                hiddenDiv.style.display = '';
            }
            console.log(hiddenDiv);
        }
    }
}