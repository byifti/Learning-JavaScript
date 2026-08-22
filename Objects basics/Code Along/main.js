let person1 = {
   firstName: "Rakin",
   lastName: "Khan",
   age: 19,
   isEmployed: true,
   favFood: "Kacchi",

   sayHello: function() {console.log(`Hello, Tamim!! I am Rakin`)},
   sayBye: function() {console.log(`BYEEEEEE!!!!`)},
   sayFavFood: function() {console.log(`Rakin: My fav food is ${this.favFood}`)},

};

console.log(`${person1.firstName} ${person1.lastName} is ${person1.age} years old`);
person1.sayHello()
person1.sayBye()
person1.sayFavFood()

let person2 = {
   firstName: "Ifti",
   lastName: "Khan",
   age: 19,

   sayIntro: function() {
      console.log(`Hello!! My name is ${this.firstName} ${this.lastName}, I am ${this.age} years old!`)
   }

}

person2.sayIntro()