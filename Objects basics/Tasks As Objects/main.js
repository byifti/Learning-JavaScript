let task1 = {
   label: "Eat Biscuits left in kitchen",
   id: 1,
   isChecked: false,
   isDeleted: false 
}

console.log(`Task 1: ${task1.label}`)
console.log(`ID: ${task1.id}`)
console.log(`Checked State: ${task1.isChecked}`)
console.log(`Deleted State: ${task1.isDeleted}`)

task1.id = 3;

console.log(`New ID: ${task1.id}`)