// (...rest) combines the input elements into an array

function openFridge(...foods){
    console.log(...foods);
}

const food1 = "banana";
const food2 = "watermellon";

openFridge(food1, food2);