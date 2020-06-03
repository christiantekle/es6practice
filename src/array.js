const shoppingList = ["Milk", "Cow", "Eggs", "Choco"];

shoppingList.forEach((product, index) => {
    console.log(`The index is ${index} and the product is ${product}`)
});

//Map
const copyList = shoppingList.map(item => {
    return item;
});
console.log(copyList);

/* const copyList = shoppingList.map(item => return item;); */

//Filter List

const filterList = shoppingList.filter(item => { return item === 'Eggs' });
console.log(filterList);

const s = [5, 6, 2];

function editNums() {
    s.sort();
    console.log(s);

    //let max = Math.max.apply(null, s);
    let max = Math.max(...s);
    console.log(max);
}
editNums();
/************* 
 * Object.freeze(object_name) -- is to prevent data mutation.
 * 
*/

const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
}
console.log(myConcat([1, 2], [3, 4, 5]));


const isEthio = city => {
    const names = ['Hossana', 'Sheger', 'Adama'];
    return names.includes(city) ? "Ethiopia" : "Rest of the world.";
}

console.log(isEthio("Assosa"));

/********** */

const ages = [25, 26, 27, 8];

ages.push(25);



const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(14, 25, 35));

//copying all contents from another array

const arr1 = ['Jan', 'Feb', 'Mar'];

arr2 = [...arr1];
console.log(arr2); 


const contact = {
    usname: 'Christian Tekle',
    age: 27,
    dateofbirth: 1993
}
//const {usname, age, dateofbirth} = contact;
//const {usname: username, age: userage, dateofbirth: userdob} = contact;