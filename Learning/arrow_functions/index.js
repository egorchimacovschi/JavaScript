// arrow funciton , concise way to write a function


const goodbeye = (name, age) => {console.log("goodbeye");
                                console.log(`You are ${age}, ${name}`)
}

function hello(){
    console.log("Hi");
}
hello();
goodbeye("Egor", 20);

setTimeout( () => {console.log("HI");}, 3000);

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);