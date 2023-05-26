class Student {
    constructor(name, age, grades) {
        this.name = name;
        this.age = age;
        this.grades = grades;
    }

    sayHello() {
        console.log(`My name is ${this.name}`);
    }
}

const student1 = new Student('Nikolai', 25, [6, 6, 6])
console.log(student1)
console.log(student1.grades)
student1.sayHello()

function StudentConstructorFunc(name, age, grades) {
    this.name = name;
    this.age = age;
    this.grades = grades;
}

const studentConstructorFuncObj = new StudentConstructorFunc('Nikolai', 25, [6, 6, 6])
console.log(studentConstructorFuncObj)

function studentFuncReturnObj(name, age, grades) {
    return {
        name: name,
        age: age,
        grades: grades,
    }
}

const studentFuncReturnObj1 = studentFuncReturnObj('Nikolai', 25, [6, 6, 6])
console.log(studentFuncReturnObj1)