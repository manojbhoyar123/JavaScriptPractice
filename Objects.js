// object literals
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

// creating and inserting records in object
var janeFm = new Object();
janeFm.name = 'Jane';
janeFm.birthyear = 1984;
janeFm.job = "SWManager";
janeFm['lastName'] = 'Gawande';

console.log(janeFm);
janeFm.name ='Jane1';
console.log("after modifying value within object:-",janeFm);