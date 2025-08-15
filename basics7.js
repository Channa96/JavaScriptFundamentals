//classes in javascript
module.exports = class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

        job = "QA";

    introduce() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

// let person1 = new Person("Channa", 29, "Male");
// let person2 = new Person("Alex", 25, "Male");
// person1.introduce(); // "Hello, my name is Channa."
// console.log(person1.age); // 29
// console.log(person1.job); // "QA"
// console.log(person1.gender); // "Male"
// console.log(person1); // Person { name: "Channa", age: 29, gender: "Male", job: "QA" }
// console.log(person1.name); // "Channa"
// person2.introduce(); // "Hello, my name is Alex."