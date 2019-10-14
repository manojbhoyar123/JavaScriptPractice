<<<<<<< HEAD
var johnMass,johnHeight,markMass,markHeight;
var bmiJohn, bmiMark, isMarksBmiHigher;
// johnMass=prompt("Enter john's mass:-");
//johnHeight = prompt("Enter john's height:-");
//markMass = prompt("Enter Mark's mass:-");
//markHeight = prompt("Enter Mark's Height:-");
johnMass = 55;
johnHeight = 1.5;
markMass = 66;
markHeight = 1.9;
bmiJohn = (johnMass/(johnHeight*johnHeight));
bmiMark = (markMass/(markHeight*markHeight));

isMarksBmiHigher = bmiMark > bmiJohn;
console.log(bmiJohn,bmiMark)
console.log("is mark's BMI higher than john:- " + isMarksBmiHigher);
//alert("is mark's BMI higher than john:- ", isMarksBmiHigher);
var firstName = "John";
var status = "single";
var age = 21;
if (status === "married")
{
    console.log(firstName + " is " + status);
} 
else
{
    console.log(firstName + " is not " + status);
}
var isMarried = true;
if(isMarried)
{
    console.log(firstName + " is married ");
}
else
{
    console.log(firstName + " is not married ");
}
if(bmiMark > bmiJohn)
{
    console.log("Mark's BMI is higher than john");
}
else
{
    console.log("John's BMI is higher than Mark");
}
var age1 , drink ;
age1 = 11;
age1 >= 18 ? console.log(firstName + " can drink bear:- "): console.log(firstName + " can drink juice: -")
drink = (age1 >= 18 ? "beer" : "Juice");
console.log(drink);
job = "AB";
switch(job)
{
    case "teacher":
    case "teacher1":
        console.log(firstName + " likes teaching ");
        break;

    case "coder":
        console.log(firstName + " likes coding " );
        break;
    default:
        console.log(" something else:-");
}
    

=======
var johnMass,johnHeight,markMass,markHeight;
var bmiJohn, bmiMark, isMarksBmiHigher;
// johnMass=prompt("Enter john's mass:-");
//johnHeight = prompt("Enter john's height:-");
//markMass = prompt("Enter Mark's mass:-");
//markHeight = prompt("Enter Mark's Height:-");
johnMass = 55;
johnHeight = 1.5;
markMass = 66;
markHeight = 1.9;
bmiJohn = (johnMass/(johnHeight*johnHeight));
bmiMark = (markMass/(markHeight*markHeight));

isMarksBmiHigher = bmiMark > bmiJohn;
console.log(bmiJohn,bmiMark)
console.log("is mark's BMI higher than john:- " + isMarksBmiHigher);
//alert("is mark's BMI higher than john:- ", isMarksBmiHigher);
var firstName = "John";
var status = "single";
var age = 21;
if (status === "married")
{
    console.log(firstName + " is " + status);
} 
else
{
    console.log(firstName + " is not " + status);
}
var isMarried = true;
if(isMarried)
{
    console.log(firstName + " is married ");
}
else
{
    console.log(firstName + " is not married ");
}
if(bmiMark > bmiJohn)
{
    console.log("Mark's BMI is higher than john");
}
else
{
    console.log("John's BMI is higher than Mark");
}
var age1 , drink ;
age1 = 11;
age1 >= 18 ? console.log(firstName + " can drink bear:- "): console.log(firstName + " can drink juice: -")
drink = (age1 >= 18 ? "beer" : "Juice");
console.log(drink);
job = "AB";
switch(job)
{
    case "teacher":
    case "teacher1":
        console.log(firstName + " likes teaching ");
        break;

    case "coder":
        console.log(firstName + " likes coding " );
        break;
    default:
        console.log(" something else:-");
}
    

>>>>>>> 3be133c1f3bbaebbd4773b9ab1ca6845d0818b1b
