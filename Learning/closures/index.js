// closures = a function defined inside of another function, allow for private variables and state maintenance

function outer(){
    let message = "Hello";

    function inner(){
        console.log(message);
    }

    inner();
}
function createCounter(){
    let count = 0;
    function increment(){
        count++;
        console.log(`Count incerased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount());


