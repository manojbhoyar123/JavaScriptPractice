var manojObj = {
    name: 'Manoj',
    prof: 'swCoder',
    techn: 'javaScript',
    birthyear: 1983,
    family:['Baba','Aai','Dipali','Sachin','Rohini','Sarvadnya','Sarvesh'],
    ismarried: true,
    calcAge: function(birthyear){
        //return 2019 - this.birthyear;   //this helps to assign local value
        this.age = 2019 - this.birthyear;
    }
};
//console.log(manojObj);
console.log(manojObj.calcAge(1986));   // since, we are using value from object, this becomes undefined.

manojObj.calcAge();
console.log(manojObj);

