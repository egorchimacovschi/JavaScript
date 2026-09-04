//static are the property more exclusive to calss itself rhater to any objects

class MathUtil{
    static PI = 3.14159;

    static getdiameter(radius){
        return radius * 2;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getdiameter(10));

class User{
    static userCount = 0;


    constructor(username){
        this.username = username;
        User.userCount ++;
    }

    static getUserCount(){
        console.log(`${User.userCount}`);
    }
}