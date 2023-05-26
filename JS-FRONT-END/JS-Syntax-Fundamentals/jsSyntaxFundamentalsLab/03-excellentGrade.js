function excellentGrade(grade) {
    grade = Number(grade);
    if (grade >= 5.50) {
        console.log('Excellent');
    } else {
        console.log('Not excellent');
    }
}

excellentGrade(5.50);
excellentGrade(4.35);

function excellentGrade2(grade) {
    grade = Number(grade);
    let defaultGrade = 'Not excellent';
    if (grade >= 5.50) {
        defaultGrade = 'Excellent';
    }
    console.log(defaultGrade);
}

excellentGrade2(5.50);
excellentGrade2(4.35);