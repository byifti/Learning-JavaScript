let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let todoWindow = document.getElementById("todoWindow");
let doneWindow = document.getElementById("doneWindow");
let id = 0;

class task
{
   constructor(label, id, isChecked=false)
   {
      this.label = label,
      this.id = id,
      this.isChecked = isChecked
   }
}

addTaskBtn.addEventListener("click", createTask)

function createTask()
{
   let label = taskInput.value;
   id += 1;

   let newTask = new task(label, id)

   renderTask(newTask);

   // console.log(newTask)
}

function renderTask(taskObject) 
{
   let taskContainer = document.createElement(`div`)
   taskContainer.setAttribute(`class`, `taskContainer`)

   let newCheckbox = document.createElement(`input`);
   newCheckbox.setAttribute(`type`, `checkbox`);
   newCheckbox.setAttribute(`id`, `${taskObject.id}`);

   let newLabel = document.createElement(`label`);
   newLabel.setAttribute(`for`, `${taskObject.id}`);
   newLabel.textContent = taskObject.label;

   taskContainer.append(newCheckbox)
   taskContainer.append(newLabel)
   todoWindow.append(taskContainer)

   newCheckbox.onclick = function()
   {
      if(taskObject.isChecked === false)
      {
         taskObject.isChecked = newCheckbox.checked;
         doneWindow.append(taskContainer);
         // console.log(`The checkbox is ${taskObject.isChecked}`)
      }
      else
      {
         taskObject.isChecked = newCheckbox.checked;
         newLabel.style.textDecoration = "none";
         todoWindow.append(taskContainer)
         // console.log(`The checkbox is ${taskObject.isChecked}`)
      }
   };

}