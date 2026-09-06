//error = an object that is created to represent a problem that occurs 

try{
    console.log(x);
}
catch(error){
    console.error(error);
}
finally{
    //closing files
    //closing connections
    //release resources
}


//network error
//promise rejection
//security error
console.log(`youve reached the end of the program`);

try{
    const dividend = window.prompt();
    const divisor = window.prompt();

    if(divisor == 0){
        throw new Error(`You cant divide by zero`);
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error(`Values must be a number`);
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}
console.log("finish");