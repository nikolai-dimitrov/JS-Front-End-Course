function cats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let el of arr) {
        let [name,age] = el.split(' ');
        age = Number(age);
        let currentInstance = new Cat(name, age);
        currentInstance.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);