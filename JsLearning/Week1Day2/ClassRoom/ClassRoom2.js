/*Classroom:2
-----------
let yourName = " ";
write a function to reverse the string.


// hints
1) convert the input into characters
2) loop them in reverse direction
3) concate the string
4) print the new string*/

function reverseName()
{
    let name = "Vinoth";
    let nameSplit = name.split("");
    let reversedName = "";
    for(let i=nameSplit.length-1;i>=0;i--)
    {   
        reversedName = reversedName+nameSplit[i];
        // console.log(nameSplit[i])
    }
    console.log("Reversed Name: "+reversedName);
}

reverseName();