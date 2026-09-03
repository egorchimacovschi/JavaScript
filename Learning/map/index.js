// applies acallback function t every element of an array

//difference is that using map the callback function return something

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);

function square(element){
    return Math.pow(element, 2);
}
console.log(numbers);
console.log(squares);

let prices = ["20.12", "13.45"];
prices = prices.map(formatedprices);
console.log(formatedprices);

function formatedprices(prices){
    const price = prices.split(".");
    return `${price[0]}-${price[1]}`;
}

console.log(prices);