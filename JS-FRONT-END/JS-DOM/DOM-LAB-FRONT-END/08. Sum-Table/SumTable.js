function sumTable() {
    let numsAsString = Array.from(document.querySelectorAll('table tr')).slice(1, -1)
    let result = 0;
    for (const el of numsAsString) {
        result += Number(el.lastChild.textContent);
    }
    document.getElementById('sum').textContent = result.toString();
}