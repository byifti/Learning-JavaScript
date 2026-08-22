const salesTax = 0.05;

function product(name, price)
{
   this.name = name,
   this.price = price,

   this.calculateTotal = function()
   {
      let total = this.price - this.price * salesTax
      return total;
   }

   this.displayProduct = function() 
   {
      console.log(`You are buying ${this.name}`)
      console.log(`It is $${this.price}`)
   }
   
}

let product1 = new product("Jocelin Carmes Art", 100)

console.log(product1.name)
console.log(product1.price)
console.log(product1.calculateTotal())
console.log(product1.displayProduct())