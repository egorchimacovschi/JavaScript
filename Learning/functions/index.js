function happy_birthday(username, age){
    console.log(`Happy Birthday ${username} you are ${age}`);
}
happy_birthday("Egor", 20);

function add(x, y){
    let result  = x + y;
    return result;
}

let answer = add(2, 3);
console.log(answer);

function isEven(number){
    return number % 2 === 0 ? true : false;
}