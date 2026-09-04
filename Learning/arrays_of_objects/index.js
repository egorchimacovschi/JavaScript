const fruits = [{name: "apple", color: "red"},
                {name: "banana", color: "yellow"}]

fruits[0].name;
fruits.splice(1,2); //deletes the certain elemnts from the array
fruits.forEach(fruit =>console.log(fruit.name));

const fruitNames = fruits.map(fruit => fruit.name);
const yellowFruit = fruits.filter(fruit => fruit.color === "yellow");
const redfruit = fruits.reduce(fruit => fruit.color === "red" ? fruit: NaN);

console.log(redfruit);