// destructuring = extract values form array and objects [] for array {} for objects

let a = 1;
let b = 2;

[a, b] = [b, a];


console.log(a);
console.log(b);

const colors = ["red", "green", "blue"];

[colors[0], colors[2]] = [colors[2], colors[0]];
console.log(colors);

const [firstColor, SecondColor, thirdColor, ...extracolors] = colors;

const person1 = {
    firsName: "Egor",
    age: 20,
}

const person2 = {
    firsName: "Victoria",
    age: 30,
}

const {fistName, age} = person1;
//                                     asign defalut avalue if this property is not found
function displayPerson({firsName, age, job="unemplyed"}){
    console.log(firsName);
    console.log(age);
    console.log(job);
}

displayPerson(person1);