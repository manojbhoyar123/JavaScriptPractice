function tipcalc(bill)
{
    var prct;
    if(bill <= 50)
    {
        prct = 0.2;
    }
    else if(bill >=50 && bill <= 200)
    {
        prct = 0.15;
    }
    else
    {
        prct = 0.1;
    }
    return (prct * bill);
}
var bill = [125, 40, 270];
var tips = [tipcalc(bill[0]), tipcalc(bill[1]), tipcalc(bill[2])];
var finalBill = [bill[0] + tips[0], bill[1] + tips[1] ,bill[2] + tips[2]];
console.log(tips,finalBill);