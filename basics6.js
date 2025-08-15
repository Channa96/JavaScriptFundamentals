//Collection of properties
let person = {
    name: "Channa",
    age: 30,
    isStudent: false
};

//Accessing properties
console.log(person.name); // "Channa"
console.log(person['age']); // 30

//Accessing property as array
console.log(Object.keys(person)); // ["name", "age", "isStudent"]
console.log(person['name']); // "Channa"

//Adding a new property
person.gender = "Male";
console.log(person.gender); // "Male"

//Updating an existing property
person.age = 29;
console.log(person.age); // 29

//Deleting a property
delete person.isStudent;
console.log(person.isStudent); // undefined

console.log(person); // { name: "Channa", age: 29, gender: "Male" }

//Check the existence of a property
console.log("name" in person); // true
console.log("isStudent" in person); // false 

//Retrieving all properties one by one using loop
for (let key in person) {
    console.log(key + ": " + person[key]);
}