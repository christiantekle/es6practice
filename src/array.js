const shoppingList = ["Milk", "Cow", "Eggs", "Choco"];

shoppingList.forEach((product, index) => {
    console.log(`The index is ${index} and the product is ${product}`)
});


const isEthio = city => {
    const names = ['Hossana', 'Sheger', 'Adama'];
    return names.includes(city) ? "Ethiopia" : "Rest of the world.";
}

console.log(isEthio("Assosa"));
