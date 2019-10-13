console.log("script-html3-1.js file")
var height= 23;
if(height || height === 0) // triple equal does not do type conversion while double do
{
    console.log("var is defined");
}
else
{
    console.log("var is not defined ");
}
if(height &&  height == "23")
{
    console.log("defined");
}
else
{
    console.log("un defined");
}