function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let inputValue = document.getElementById('searchField');
        let rows = Array.from(document.querySelectorAll('tbody tr')).forEach(x => x.classList.remove('select'));
        let tdList = Array.from(document.querySelectorAll('tbody tr td'));
        tdList.forEach(x => {
                if (x.textContent.toLowerCase().includes(inputValue.value.toLowerCase())) {
                    x.parentElement.classList.add('select');
                }
            }
        )
        inputValue.value = '';
    }
}