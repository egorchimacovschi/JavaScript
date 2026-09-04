class Product{
    constructor (name, price){
        this.price = price;
        this.name = name;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const product1 = new Product("Shirt", 19.99);
product1.displayProduct();
const salesTax = 0.1;

console.log(product1.calculateTotal(salesTax));