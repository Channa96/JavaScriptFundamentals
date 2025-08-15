//If check the condition true then it will execute the inside of the if block
var a = 5
if (a >= 5)
{
    console.log("a is greater than or equal to 5")
}
else
{
    console.log("a is less than 5")
}

//While loops will run until the expected condition is false
let i = 0
while (i<10)
{
    
    console.log("i is " + i)
    i++
}

//do while loops will run one time whether the condition true or false
do
{
    i++
    console.log("i is in do while " + i)
} while (i < 10);
console.log("i is in do while " + i)

//For loop will run until the condition is true
let n = 0
for (let j = 0; j <= 10; j++)
{
    if (j%2 == 1 || j%5 == 0)
    {
        console.log("j is " + j)
        n=n+2
        if (n == 4)
        {
            break
        }
    }
}
