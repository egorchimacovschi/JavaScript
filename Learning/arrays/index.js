let fruits = ["apple", "orange", "banana"];
console.log(fruits);
console.log(fruits[0]);
fruits.push("coconut");
console.log(fruits);
fruits.pop();
console.log(fruits);

fruits.unshift("mango");
console.log(fruits);
fruits.shift();
console.log(fruits);

let numOfFruits = fruits.length;
let index = fruits.indexOf("mango");
console.log(index);

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}


for (let fruit of fruits){
    console.log(fruit);
}

fruits.sort();
fruits.sort().reverse();
