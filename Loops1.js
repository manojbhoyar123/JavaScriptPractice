var i = 0;
var j = 0;
var k = 0;
var l = 0;
var m = 0;

for (i; i <= 20; i+=5)
{
    console.log(i);
}

var johnA = ['john', 'smith', 'alfred', 3, 'williams'];
for (j; j < johnA.length; j++)
{
    console.log(johnA[j]);
}

while (k < johnA.length)
{
    console.log(johnA[k]);
    k = k+1;
} 

for (l; l< johnA.length; l++)
{
    if(typeof(johnA[l]) !== 'string') continue;  // !== is equal to ===
    {
        console.log(johnA[l]);
    }
}
for (m; k< johnA.length ; m++)
{
    if(typeof (johnA[m]) !== 'string') break;
    {
        
    }
}