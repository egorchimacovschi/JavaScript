//Promise = object that manage asynchronous operationss
// new Promise(resolve, reject) => {asynchronous code}

//i promise to return a value PENDING -> RESOLVED OR REJECTED

function walkDog(){


    return new Promise((resolve, reject) => {
        setTimeout(() => {

        const dogwalked = false;
        if(dogwalked){
            resolve("You walked the dog");
        }else{
            reject("You didint walked the dog");
        }
        
        }, 1500);
    });
}

function cleanKitchen(){
    

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kictchenCleaned = true;

            if(kictchenCleaned){
                resolve("You cleaned the Kitchen");
            }else{
                reject("You didnt cleaned the Kitchen");
            }
            
        }, 2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashOut = false;

            if(trashOut){
                resolve("You take out the trash");
            }else{
                reject("You didn't take out the trash");
            }
            
    }, 500);
    });
}

// walkDog( () => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("Finished");
//         });
//     });
// });

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("Finished")})
         .catch(error => console.error(error));