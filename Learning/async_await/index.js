//Async /Await = async -> makes a function to return a primise
//               await -> makes a function wait for a promise

//purpose = allows you to wirte the asynchronous code in a synchronous manner
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


async function doChores() {
    try{
        const walkDogReslut = await walkDog();
        console.log(walkDogReslut);

        const cleanKitchenResult = await cleanKitchen(); 
        console.log(cleanKitchenResult);

        const takeOutTrashReslut = await takeOutTrash();
        console.log(takeOutTrashReslut);

        console.log("Finished");
    }catch(error){
        console.log(error);
    }
}

doChores();