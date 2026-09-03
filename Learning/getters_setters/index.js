//function expression is a way to declare a function as  value or variable

//function hello(){
//    console.log("Hello");
//}


setTimeout(function(){
    console.log("Hello");
}, 3000);

const number = [1, 2, 3, 4, 5, 6];
const squares = number.map(function (element){
    return Math.pow(element, 2);
});

function square(element){
    return Math.pow(element, 2);
}