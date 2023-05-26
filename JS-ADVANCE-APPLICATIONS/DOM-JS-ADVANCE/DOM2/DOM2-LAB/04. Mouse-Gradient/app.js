function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', onMove);
    let result = document.getElementById('result');
    function onMove(event) {
        let boxWidth = document.getElementById('gradient').clientWidth;
        result.textContent = Math.floor(event.offsetX / boxWidth * 100) + '%';
    }
}