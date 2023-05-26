function loadingSimulation(num) {
    let percentSymbolsCount = num / 10;
    let dotSymbolsCount = 10 - percentSymbolsCount;
    let percents = '%'.repeat(percentSymbolsCount);
    let dots = '.'.repeat(dotSymbolsCount);
    if (percentSymbolsCount === 10) {
        console.log('100% Complete!');
    } else {
        console.log(`${num}% [${percents}${dots}]\nStill loading...`);
    }
}

loadingSimulation(30);
loadingSimulation(50);
loadingSimulation(100);