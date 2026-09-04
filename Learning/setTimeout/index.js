//setTimeout = function in JavaScript that allows you to schedule 
// the execution of a function after an amount of time (milliseconds)
// setTimeout(callback, delay);

function sayHelo(){
    window.alert("Hello");
}

let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
}

function clearTimer(){
    clearTimeout(timeoutId);
}

//const timeoutId = setTimeout(sayHelo, 3000);
setTimeout(function(){console.log("Faster");}, 1000);
setTimeout(() => console.log("Faster"), 1000);

//clearTimeout(timeoutId);
