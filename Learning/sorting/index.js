let numbers = [1, 2, 3, 4, 7, 5];
numbers.sort((a, b) => a - b);

const people = [{name: "Victoria", age: 30}, {name: "Egor", age: 20}];
people.sort((a, b) => a.age - b.age);
people.sort((a, b) => a.name.localeCompare(b.name));