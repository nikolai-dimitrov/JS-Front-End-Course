function colorize() {
    let evenRows = Array.from(document.querySelectorAll('tr:nth-child(even)')).map((x) => x.style.backgroundColor = 'Teal');
    // for (const el of evenRows) {
    //     el.style.backgroundColor = 'Teal';
    // }
}