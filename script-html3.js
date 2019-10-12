var johnMass,johnHeight,markMass,markHeight;
johnMass=prompt("Enter john's mass:-");
johnHeight = prompt("Enter john's height:-");
markMass = prompt("Enter Mark's mass:-");
markHeight = prompt("Enter Mark's Height:-");
var bmiJohn,bmiMark,isMarksBmiHigher;
bmiJohn = (johnMass/(johnHeight*johnHeight));
bmiMark = (markMass/(markHeight*markHeight));

isMarksBmiHigher = bmiMark > bmiJohn;
console.log(bmiJohn,bmiMark)
console.log("is mark's BMI higher than john:- " + isMarksBmiHigher);
alert("is mark's BMI higher than john:- ", isMarksBmiHigher);



