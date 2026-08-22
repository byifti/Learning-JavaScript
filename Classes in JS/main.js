class task{
   constructor(label, id, isChecked)
   {
      this.label = label,
      this.id = id,
      this.isChecked = isChecked
   }
}

let task1 = new task("Meet Natalie Lynn", 1, false)
let task2 = new task("Meet WholesomeSimon", 2, false)

console.log(task1)
console.log(task1.label, task1.id, task1.isChecked)
console.log(task2.label, task2.id, task2.isChecked)

class game{
   constructor(name, dev, isReleased)
   {
      this.name = name,
      this.dev = dev,
      this.isReleased = isReleased
      this.playing = function()
      {
         console.log(`You are playing ${this.name} made by ${this.dev}`)
      }
   }
}

let game1 = new game("Minecraft", "Notch", "2009")
console.log(game1)
game1.playing()

let game2 = new game("GRIS", "Nomada Studio", "December 13, 2018")
console.log(game2)
game2.playing()