
function add (a, b) {
    return a + b;
}
console.log(add(2, 5));

const list = [1,2,3,4,5];

for (let i = 0; i < list.length; i++) {
    console.log(i);
}
// concatenate variables
const name = "Christian";
const lastName = "Tekle";

console.log(`My name is ${name} ${lastName}`);


//Object...

function getBook (title, author) {

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