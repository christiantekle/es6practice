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
    tasks[1].status = 'done';

};
markTaskAsDone();
console.log(tasks);

const gardening = tasks.push({
    id: 22,
    name: "gardening",
    status: 'pending'
});
console.log(tasks);


const movies = [
    {
        artist: 'Denzel',
        title: 'The book of Eli',
        release_year: 1993,
        formats: ['CD', 'DVD'],

    },
    {
        artist: 'Will Smith',
        title: 'The pursuit of happiness',
        release_year: 1995,
        format: ['CD', 'DVD']
    }
];

const movieProductions =
{
    Netflix: {
        actors: {
            actor1: 'Denzel',
            actor2: 'Will Smith',
            actor3: 'Kevin'
        },
        titles: {
            title1: 'John Q',
            title2: 'I am legend',
            title3: 'Irresponsible'
        }
    },

    HBO: {
        actors: {
            actor1: 'Dicaprio',
            actor2: 'Tom Hanks',
            actor3: 'Samuel L. Jackson'
        },
        titles: {
            title1: 'Titanic',
            title2: 'Capitain Philips',
            title3: 'Django unchained'
        }
    }
};
const netflixActor1 = movieProductions.Netflix.actors.actor1;
console.log(netflixActor1);


const ourPets = [
    {
        animalType: "cat",
        names: [
            "Fluffy",
            "Kit-Cat"
        ]
    },
    {
        animalType: "dog",
        names: [
            "Rocky",
            "Frankie"
        ]
    }
];
const catName1 = ourPets[0].names[0];
console.log(catName1);


var myArray = [];

let i = 5;
while (i >= 0) {
    myArray.push(i);
    i--;
}
console.log(myArray);


for (let i = 9; i >= 0; i -= 2) {
    myArray.push(i)
}
console.log(myArray);

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}

//Sum 
let myArrayTotal = 0;
for (let i = 0; i < myArray.length; i++) {
    myArrayTotal += myArray[i];
}
console.log(myArrayTotal);


// nesting for loop

const multiplyAll = (arr) => {
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

const productReturned = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(productReturned);



var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];
const lookUpProfile = (name, prop) => {
    for (let i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop];
            }
            else {
                return "prop not found";
            }
        }
        else {
            return "contact not found";
        }
    }
}


const contactDetail = lookUpProfile("Akira", "likes");
console.log(contactDetail);


for (let contactsList of contacts) {
    console.log(contactsList);
}


const stats = {
    max: 56.78,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  const half = ({max, min}) => (max + min) / 2.0; 
  //destructuring assignment to pass an obj as a fun's parameter
  