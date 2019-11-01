var manojObj = {
    name: 'Manoj',
    prof: 'swCoder',
    birthyear: 1983,
    family:['Baba','Aai','Dipali','Sachin','Rohini','Sarvadnya','Sarvesh'],
    calcAge: function(birthyear){
        //return 2019 - this.birthyear;   //this helps to assign local value
        this.age = 2019 - this.birthyear;
    }
};
// addition and modification of object property from outside object definition
manojObj.techn = 'javaScript';
manojObj['isMarried'] = true;  //String can be defined like this, i.e without . in it
//console.log(manojObj);


