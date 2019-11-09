var john ={          //object starts with keyword var
name:'John',
yearOfBirth:1983,
calcAge: function()      //function declaration must have enclosed brackets.
    {
        console.log(this);
        //console.log(2019 - john.yearOfBirth);
        console.log(2019 - this.yearOfBirth);
        function inerfunction()
        {
            console.log(this);  // return windows objects
        }
        inerfunction();   //calling function
    }
};
john.calcAge();