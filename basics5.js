let day = 'Tuesday '
console.log(day.length) //8
console.log(day.trim().length) //7
let sliceDate = day.slice(0,4)
console.log(sliceDate) // "Tues"
let splitDate = day.split("s")
console.log(splitDate) // ["Tue", "day "]
console.log(splitDate[0]) // "Tue"
console.log(splitDate[1].length) // 4
console.log(splitDate[1].trim().length) // 3

//Converting strings into 
let date = '24'
let nextDate = '30'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff) // 6
diff.toString() // "6" - Convert back to string

//Concatenating
let combined = day + " is funday";
console.log(combined) // "Tuesday is funday"
console.log(combined.indexOf("day"))// 4
console.log(combined.indexOf("day",5))//15

//count the number of occurance of "day"
console.log(combined.split("day").length - 1) // 2

//Using while loop
let count = 0;
let pos = combined.indexOf("day");
while (pos !== -1) {
    count++;
    pos = combined.indexOf("day", pos + 1);
}
console.log(count) // 2