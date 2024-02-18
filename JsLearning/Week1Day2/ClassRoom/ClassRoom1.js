/*Classroom 1
-----------
let val = 10; // 1,2,3,4,...10
function for odd or even !!


print odd numbers between 1 to n // 1,3,5,7,9*/

let maxVal = 10;
function printOddNumbers(){
    for(let i=1;i<=10;i++)
    {
        if(i%2!=0)
        {
            console.log(i + " is an odd number");
        }else
        {
            console.log(i + " is an even number");
        }
    }
}

printOddNumbers();