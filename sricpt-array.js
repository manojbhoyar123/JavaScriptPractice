/*
var name = ["abc","qwe","w345","manoj1"];
var year = [1983,1984,1985];
var smplus = ("names are when + added:-" + name);
var smcomma = ("names" ,name);
console.log(smplus);
console.log(smcomma);
//console.log(typeof(smplus));
//console.log(typeof(smcomma));
console.log(year[0],year[1],year[2]);
//Mutate Array by initializing the index
name[0] = "Gopal";
name[name.length] = "madhav";
console.log("After re-initializting:-  " +name);
console.log(name.length);
*/
// content modification fucntions
var johnD = ['john',"Smith", 'teacher' ,1993,false];
console.log("org:-" ,johnD);
johnD.pop();
johnD.pop();
johnD.push("blue");  //adds entry at then end of array
johnD.unshift("MR"); //adds entry at the start of array
console.log(johnD);
johnD.shift();       //removes first entry of array
console.log(johnD);
console.log(johnD.indexOf(23));  //out of range array gives -1 index.
johnD.indexOf("NandKumar") === -1 ? console.log("John is not a designer") : console.log("John is a designer");
johnD.indexOf("Smith") === 1 ? console.log("John's surname is Smith") : console.log("John's surname is not Smith");







