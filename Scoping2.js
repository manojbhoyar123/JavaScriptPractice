var johnW ={          //object starts with keyword var
name:'JohnW',
yearOfBirth: 1990,
calculateAge: function() {    //function declaration must have enclosed brackets.
        console.log(this);
        console.log(2019 - this.yearOfBirth);
        }
}
johnW.calculateAge();

var mikeW = {
    name: 'Mike',
    yearOfBirth: 1989
};
mikeW.calculateAge = johnW.calculateAge;
mikeW.calculateAge();



