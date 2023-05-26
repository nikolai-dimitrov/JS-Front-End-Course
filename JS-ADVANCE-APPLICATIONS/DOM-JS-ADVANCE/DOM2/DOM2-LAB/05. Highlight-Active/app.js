function focused() {
    let parentDiv = Array.from(document.querySelectorAll('div div input'));
    parentDiv.forEach(x => x.addEventListener('focus', onFocus));
    parentDiv.forEach(x => x.addEventListener('blur', onBlur));

    function onFocus(event) {
        event.target.parentElement.classList.add('focused');
        // this access current instance - works. So this -> event.target
        // this.parentElement.classList.add('focused');
    }

    function onBlur(event) {
        event.target.parentElement.classList.remove('focused');
    }
}