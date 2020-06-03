
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
    username: "Chris",
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
    usname: 'Christian Tekle',
    age: 27,
    dateofbirth: 1993
}
//const {usname, age, dateofbirth} = contact;
//const {usname: username, age: userage, dateofbirth: userdob} = contact;

const users = {
    chris: {
        dob: 1993,
        email: 'christiantekle@gmail.com'
    }
};
const { chris: { dob, email } } = users;
//const { chris: { dob: chrisDob, email: chrisEmail } } = users;

