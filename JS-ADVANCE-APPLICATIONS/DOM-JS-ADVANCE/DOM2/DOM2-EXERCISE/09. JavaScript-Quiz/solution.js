function solve() {
    let questionAndAnswerMapper = {
        'Question #1': 'onclick',
        'Question #2': 'JSON.stringify()',
        'Question #3': 'A programming API for HTML and XML documents',
    }
    let correctAnswersMapper = {
        'Question #1': 0,
        'Question #2': 0,
        'Question #3': 0,
    }
    let sections = Array.from(document.querySelectorAll('section li div p')).forEach(
        (x) => {
            x.addEventListener('click', onClick)
        });

    function onClick(event) {
        let h2 = event.target.parentElement.parentElement.parentElement.getElementsByClassName('question-wrap')[0].children[0];
        let question = h2.textContent.split(':')[0];
        let answer = event.target.textContent;
        if (questionAndAnswerMapper[question] === answer) {
            correctAnswersMapper[question] = 1;
        }
        let sectionsArray = Array.from(document.querySelectorAll('section'));
        let currentSection = event.target.parentElement.parentElement.parentElement.parentElement;
        currentSection.style.display = 'none';
        let currentSectionIndex = sectionsArray.indexOf(currentSection);
        if (sectionsArray[currentSectionIndex + 1] !== undefined) {
            sectionsArray[currentSectionIndex + 1].style.display = 'block';
        }
        if (sectionsArray.indexOf(currentSection) === 2) {
            let finalResult = 0;
            document.getElementById('results').style.display = 'block';
            let resultHeading = document.querySelector('#results li.results-inner h1');
            for (const key in correctAnswersMapper) {
                finalResult += correctAnswersMapper[key];
            }
            if (finalResult === 3) {
                resultHeading.textContent = "You are recognized as top JavaScript fan!";
            } else {
                resultHeading.textContent = `You have ${finalResult} right answers`;
            }
        }
    }
}

// function solve() {
//     let answeredSections = []
//     let questionAndAnswerMapper = {
//         'Question #1': 'onclick',
//         'Question #2': 'JSON.stringify()',
//         'Question #3': 'A programming API for HTML and XML documents',
//     }
//     let correctAnswersMapper = {
//         'Question #1': 0,
//         'Question #2': 0,
//         'Question #3': 0,
//     }
//     let sections = Array.from(document.querySelectorAll('section li div p')).forEach(
//         (x) => {
//             x.addEventListener('click', onClick)
//         });
//
//     function onClick(event) {
//         let h2 = event.target.parentElement.parentElement.parentElement.getElementsByClassName('question-wrap')[0].children[0];
//         let question = h2.textContent.split(':')[0];
//         let answer = event.target.textContent;
//         if (questionAndAnswerMapper[question] === answer) {
//             correctAnswersMapper[question] = 1;
//         }
//         let sectionsArray = Array.from(document.querySelectorAll('section'));
//         let currentSection = event.target.parentElement.parentElement.parentElement.parentElement;
//         let currentSectionIndex = sectionsArray.indexOf(currentSection);
//         answeredSections.push(currentSection);
//         if (sectionsArray[currentSectionIndex + 1] !== undefined) {
//             sectionsArray[currentSectionIndex + 1].classList.remove('hidden');
//         }
//         if (answeredSections.includes(sectionsArray[0]) && answeredSections.includes(sectionsArray[1]) && answeredSections.includes(sectionsArray[2])) {
//             sectionsArray.forEach(x => x.style.display = 'none');
//             let finalResult = 0;
//             document.getElementById('results').style.display = 'block';
//             let resultHeading = document.querySelector('#results li.results-inner h1');
//             for (const key in correctAnswersMapper) {
//                 finalResult += correctAnswersMapper[key];
//             }
//             if (finalResult === 3) {
//                 resultHeading.textContent = "You are recognized as top JavaScript fan!";
//             }else {
//                 resultHeading.textContent = `You have ${finalResult} right answers`;
//             }
//         }
//     }
// }

