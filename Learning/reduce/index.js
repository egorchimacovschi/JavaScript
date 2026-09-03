// .reduce () reduces the elements of an array to a single value 
const prices = [5, 30 ,10 ,25, 15, 20];
const total = prices.reduce(sum);

function sum(acumulator, element){
    return acumulator + element;
}

console.log(total);

