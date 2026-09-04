class Animal {
    alive = true;

    eat() {
        console.log("Animal is eating");
    }

    sleep() {
        console.log("Animal is sleeping");
    }
}

class Rabbit extends Animal {
    name = "rabbit";

    run() {
        console.log("Rabbit is running");
    }
}

const rabbit = new Rabbit();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();