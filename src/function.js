
function add(a, b) {
    return a + b;
}
console.log(add(2, 5));

const list = [1, 2, 3, 4, 5];

for (let i = 0; i < list.length; i++) {
    console.log(i);
}
// concatenate variables
const name = "Christian";
const lastName = "Tekle";

console.log(`My name is ${name} ${lastName}`);


//Object...

function getBook(title, author) {

    return {
        title,
        author
    }

}
const book = getBook("The Alchemist", "Paulo");
console.log(book);

//Arrow Function

const myLocation = (location) => console.log(`My location is ${location}`);

myLocation('Dubai');

//this.. 
const user = {
    username: "John",
    location: "Dubai",
    sayName: function () {
        console.log(`My name is ${this.username}`);

        const fullName = () => {
            console.log(`My name is ${this.username} and I live in ${this.location}`);
        };
        fullName();
    }
};

user.sayName();


const magic = () => { return new Date(); };
console.log(magic());

// default parameters like
// const greeting = (name = "Anonmymous") => "Hello" +name;
const greeting = (name) => `Hello ${name}`;



//destructing assignments 

const contact = {
    usname: 'John',
    age: 27,
    dateofbirth: 1993
}
//const {usname, age, dateofbirth} = contact;
//const {usname: username, age: userage, dateofbirth: userdob} = contact;

const users = {
    John: {
        dob: 1993,
        email: 'test@gmail.com'
    }
};
const { John: { dob, email } } = users;
//const { john: { dob: johnDob, email: johnEmail } } = users;



const randomWholeNum = () => {
    return Math.floor(Math.random() * 10);
}


const checkSign = (num) => {
    return (num > 0) ? 'Positive' : (num < 0) ? 'Negative' : "Zero";
}
console.log(checkSign(7));

let numbersInArray = [1, 2, 3, 4, 5];
console.log(...numbersInArray);
console.log(Math.max(...numbersInArray));


const sumUpFn = (...args) => {
    let result = 0;
    for (let i=0; i<args.length; i++) {
        result += args[i];
    }
    return result;
}
console.log(sumUpFn(10, 20, 30));