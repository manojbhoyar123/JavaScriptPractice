var jObj ={
    name : 'John',
    mass : 54,
    height : 1.5,
    bmiCalc: function(mass,height)
    {
        var bmi = (mass/height);
        return bmi;
    }
};
jObj.bmi = jObj.bmiCalc(60,1.5);
console.log(jObj);
var mObj ={
    name : 'Mark',
    mass : 70,
    height : 2,
    bmiCalc: function(mass,height)
    {
        var bmi =(mass/height);
        return bmi;
    }
};
mObj.bmi = mObj.bmiCalc(60,1.5);
//jObj.bmi > mObj.bmi? console.log("JOhn's BMI is higher than Mark") : console.log("Mark's BMI is higher than John");
if(mObj.bmi > jObj.bmi)
{
    console.log("Mark's BMI is higher than John:");
}
else if(mObj == jObj.bmi)
{
    console.log("both have same bmi");
}
else
{
    console.log("John has higher BMI");
}

