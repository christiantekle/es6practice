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

const filterList = shoppingList.filter((item => { return item === 'Eggs' }));
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


const todo1 = td => {
    const names = ['sleeping', 'reading', 'walking'];
    return names.includes(td) ? "busy" : "idle";
}

console.log(todo1("reading"));

/********** */

const ages = [25, 26, 27, 8];

ages.push(25);



const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0); //!!!
}
console.log(sum(14, 25, 35));

//copying all contents from another array

const arr1 = ['Jan', 'Feb', 'Mar'];

arr2 = [...arr1];
console.log(arr2);

//destructing assignments to assign variable from Arrays.. 

// swapping arrays 

let y = 2, x = 6;
[y, x] = [x, y]; // y=6, x=2  


const items = [
    {
        itemName: 'Books',
        price: 25
    },
    {
        itemName: 'Laptop',
        price: 500
    },
    {
        itemName: 'phones',
        price: 200
    },
    {
        itemName: 'TV',
        price: 2000
    }
];
const filteredItems = items.filter(item => {
    return item.price > 500;
});
console.log(filteredItems);


//find
const foundItem = items.find(item => {
    return item.price === 25;
});
console.log(foundItem);


//foreach
items.forEach(item => {
    console.log(item.price);
})


//map
const itemPriceList = items.map(item => {
    return item.price;
});
console.log(`Prices: ${itemPriceList[0]}`);


//some T/F
const inExpItem = items.some(item => {
    return item.price <= 25;
});
console.log(inExpItem);


//every similar to some but checks every item.

//reduce ********

const totalPrice = items.reduce((lastTotal, item) => {
    return lastTotal + item.price;
}, 0);
console.log(totalPrice);
//

//includes
const includedPrice = itemPriceList.includes(25);
console.log(includedPrice);

const tasks = [
    {
        id: 25,
        name: 'shopping',
        status: 'pending'
    },
    {
        id: 15,
        name: 'washing dishes',
        status: 'pending'
    },
    {
        id: 10,
        name: 'going to the gym',
        status: 'pending'
    }

];

const filteredTsks = tasks.filter(task => {
    return task.status === 'pending';
});
console.log(filteredTsks);



const markTaskAsDone = (item) => {
    tasks[1]. status = 'done';
    
};
markTaskAsDone();
console.log(tasks);

const gardening = tasks.push({
    id: 22,
    name: "gardening",
    status: 'pending'
});
console.log(tasks);