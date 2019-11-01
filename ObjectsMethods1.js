var manojObj = {
    name: 'Manoj',
    birthyear: 1983,
    //family: ['Baba', 'Aai', 'Dipali', 'Sachin', 'Rohini', 'Sarvadnya', 'Sarvesh'],
    calcAge: function(birthyear) {
        //return 2019 - this.birthyear;   //this helps to assign local value
        var age = 2019 - birthyear;
        var thisAge = 2019 - this.birthyear; //uses variable from this object.
        //return age;
        return thisAge;    //
    }
};
console.log(manojObj);
var ag = manojObj.calcAge(1999);  // without .this in object, this value will be honored in function.
console.log(ag);











