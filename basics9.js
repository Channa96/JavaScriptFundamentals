//inheritance
const Person = require('./basics7');
class Employee extends Person {
    constructor(name, age, gender, jobTitle) {
        super(name, age, gender);
        this.jobTitle = jobTitle;
    }

    introduce() {
        super.introduce();
        console.log(`I work as a ${this.jobTitle}.`);
    }
}

let test = new Employee("John", 30, "Male", "Software Engineer");
test.introduce();
console.log(test.age);