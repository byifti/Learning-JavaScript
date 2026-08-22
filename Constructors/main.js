function task(label, id, isChecked)
   {
      this.label = label,
      this.id = id,
      this.isChecked = isChecked
   }

let task1 = new task("Meet Natalie Lynn", 1, false)
let task2 = new task("Meet WholesomeSimon", 2, false)

console.log(task1)
console.log(task2)

console.log(task.label) // undefined because by defualt that doesnt pass in any value
console.log(task1.label) // Has a string cuz I passed it in using new task("Meet Natalie Lynn")
console.log(`Is the task completed: ${task1.isChecked}`)

let task3 = new task("Climb Chimborazo", 3, false)

console.log(task3.label)
console.log(task3.id)
console.log(task3.isChecked)

// -------------------------------------------------------------------------------

function game(gameName, dev, isReleased)
   {
      this.gameName = gameName,
      this.dev = dev,
      this.isReleased = isReleased
      this.playing = function() {console.log(`You are playing ${this.gameName} made by ${this.dev}`)}
   }

let game1 = new game("Minecraft", "Notch", "May 17, 2009")
let game2 = new game("GRIS", "Nomada Studio", "December 13, 2018")
game1.playing()
game2.playing()

console.log(game1)
console.log(game2)


/*
  The new keyword in JavaScript is an operator used to create an instance 
  of a "user-defined object" type or a built-in object type that possesses 
  a constructor function.

  What new Does Under the Hood:
  When you call a function with the new keyword, JavaScript automatically 
  executes a four-step process:
  1. Creates a blank, plain JavaScript object.
  2. Links (points) the new object's prototype (__proto__) to the 
     constructor function's prototype property.
  3. Binds the 'this' context of the constructor function to the newly 
     created object (so 'this' refers to the new instance).
  4. Returns the new object automatically, unless the constructor function 
     explicitly returns its own non-primitive object.
*/
