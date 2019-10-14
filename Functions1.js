function calcAge(birthyear)
{
    return (2019 - birthyear);
}
var ageOfManoj = calcAge(1983);
console.log("Current Age Of Manoj is:-", ageOfManoj);

function calcRetAgeRemained(year , firstName)
{
    var retAge = (65 - calcAge(year));
    if (retAge >= 0)
    {
        console.log(firstName + "'s pending years for retirement are: " + retAge);
    }
    else
    {
        console.log(firstName + " is already retired ");
    }
    
}
calcRetAgeRemained(1983, 'Manoj');
calcRetAgeRemained(1979, 'Karale');
calcRetAgeRemained(1983, 'Rohini');
calcRetAgeRemained(1986, 'Rishi');





