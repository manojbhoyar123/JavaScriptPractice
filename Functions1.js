function calcAge(birthyear)
{
    return (2019 - birthyear);
}
var ageOfManoj = calcAge(1983);
console.log(ageOfManoj);

function calcRetAgeRemained(year , firstName)
{
    var retAge = (65 - calcAge(year));
    console.log(firstName + " retires in " + retAge);
}
calcRetAgeRemained(1983, 'Manoj');






