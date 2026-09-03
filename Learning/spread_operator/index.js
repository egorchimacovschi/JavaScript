// ... spread operator transforms iterable operatro into separate elements

let numbers = [5, 4, 3, 4, 5];
let minimum = Math.min(...numbers);

console.log(minimum);

let username = "Egor";

console.log([...username].join('-'));
