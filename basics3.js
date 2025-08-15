//Arrays
//First type : first initiate the array and give values
let marks = Array(5)
marks = new Array(50,60,70,80,90)

//Second type : using array literal
let fruits = ["apple", "banana", "cherry", "date", "elderberry"]

//Accessing array elements
console.log(marks[0]) // 50
console.log(fruits[1]) // "banana"

//Changing array elements
fruits[1] = "blueberry"
console.log(fruits[1]) // "blueberry"

//Find the length of the arrays
console.log(marks.length) // 5
console.log(fruits.length) // 5

//Iterating through arrays
for (let i = 0; i < marks.length; i++) {
    console.log("marks[" + i + "] = " + marks[i]);
}

for (let j = 0; j < fruits.length; j++) {
    console.log("fruits[" + j + "] = " + fruits[j]);
}

//Adding elements to arrays
//These push commands will add elements to the end of the array
marks.push(95);
fruits.push("fig");
console.log(marks); // [50, 60, 70, 80, 90, 95]
console.log(fruits); // ["apple", "blueberry", "cherry", "date", "elderberry", "fig"]

//Deleting elements from arrays
//These pop command will delete the last element of the array
marks.pop();
fruits.pop();
console.log(marks); // [50, 60, 70, 80, 90]
console.log(fruits); // ["apple", "blueberry", "cherry", "date", "elderberry"]

//Adding new value in front of the array
marks.unshift(100);
fruits.unshift("fig");
console.log(marks); // [100, 50, 60, 70, 80, 90, 95]
console.log(fruits); // ["fig", "apple", "blueberry", "cherry", "date", "elderberry"] 

//These shift commands will delete the first element of the array
marks.shift();
fruits.shift();
console.log(marks); // [50, 60, 70, 80, 90]
console.log(fruits); // ["apple", "blueberry", "cherry", "date", "elderberry"]

//Finding if expected value from array (index)
console.log(marks.indexOf(70)); // 2
console.log(fruits.indexOf("apple")); // 2

//Finding if expected value from array (includes)
console.log(marks.includes(80)); // true
console.log(fruits.includes("date")); // true
console.log(fruits.includes("fig")); // false

//Printing the array values one by one
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

//Getting sum of the array
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
console.log("Sum of marks: " + sum);

//Using reduce method
let total = marks.reduce((sum,mark)=>sum + mark, 0);
console.log("Sum of marks (using reduce): " + total);

//Filter the even numbers using for loop
var num = [12,16,13,15,18]
var evenMarks = [];
for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
        evenMarks.push(num[i]);
    }
}
console.log("Even numbers (using for loop): " + evenMarks);

//Filter the even numbers using filter method
var evenNumbers = num.filter(n => n % 2 === 0);
console.log("Even numbers (using filter): " + evenNumbers);

let mappedArray=evenNumbers.map(score=>score*3)
console.log(mappedArray)
let totalVal=mappedArray.reduce((sum,val)=>sum+val,0)
console.log(totalVal)
var scores1 = [12,13,14,16]

let sumValue=scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumValue)

//Sorting string array
let sortedFruits = fruits.sort();
console.log("Sorted fruits: " + sortedFruits);