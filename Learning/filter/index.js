// creating a new array by filtering out the elements

let numbers = [1, 2, 3, 4, 5];
let evenNums = numbers.filter(isEven);

function isEven(element){
    return element % 2 === 0;
}

console.log(evenNums);