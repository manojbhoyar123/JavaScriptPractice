var johnFm={
    name: 'john',
    surname: 'smith',
    birthyear: 1983,
    family:['baba','aai','sachin','dipali','rohini'],
    job: 'SWEngineer',
    ismarried: true
};
console.log(johnFm);
console.log("first name is:-" + johnFm.name);    // retrieve element by key without string format
console.log("birthyear:-" + johnFm.birthyear);       // retrieve element by key without string format
console.log("surname is:- ", johnFm['surname']);  //retrive by key in string format.
johnFm.job = "SWCoder";
console.log(johnFm);

