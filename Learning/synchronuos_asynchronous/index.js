// synchronous = in secvential manner
// asynchronous = multiple operation are executed at the same time
function func1(callback){
    setTimeout(() => {console.log("task 1");
                       callback(); 
    }, 3000);

}

function func2(){
    console.log("task 2");

}
func1(func2);