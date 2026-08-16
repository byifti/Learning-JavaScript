let addBtn = document.getElementById("addBtn")
let todoWindow = document.getElementById("todoWindow")
let doneWindow = document.getElementById("doneWindow")
let idNum = 0; // Setting ID at 0 initially
let checkboxName = "checkbox"; // Setting checkbox name initially, got idea myself
let warnText = document.getElementById("warnText")
addBtn.addEventListener("click", createNewTask);

function createNewTask() {
   idNum += 1; 
   let taskInputBox = document.getElementById("taskInputBox");
   let checkboxID;
   let checkbox;
   let containerID;
   let taskName = taskInputBox.value.trim();

   if (taskName == false)
   {
      warnText.textContent = "You cannot add an empty Task"
      return;
   }
   else 
   {
      warnText.textContent = '';
   }

   let checkboxContainer = document.createElement(`div`);
   checkboxContainer.setAttribute(`class`,  `checkboxContainer`);
   
   let newCheckbox = document.createElement(`input`)
   newCheckbox.setAttribute(`type`, `checkbox`)
   newCheckbox.setAttribute(`id`, `${checkboxName}${idNum}`)
   
   let newLabel = document.createElement("label")
   newLabel.setAttribute(`for`, `${checkboxName}${idNum}`)
   newLabel.setAttribute(`class`, `taskName`);
   newLabel.setAttribute(`id`, `taskName${idNum}`)
   newLabel.textContent = `${taskName}`;

   let deleteButton = document.createElement(`button`)
   deleteButton.setAttribute(`class`, `deleteButton`)
   deleteButton.textContent = `Delete`

   checkboxID = `${checkboxName}${idNum}`;
   
  // console.log(checkboxID)

   checkboxContainer.append(newCheckbox)
   checkboxContainer.append(newLabel) 
   checkboxContainer.append(deleteButton)
   todoWindow.append(checkboxContainer)

   checkbox = document.getElementById(`${checkboxID}`);

   taskInputBox.value = ``;

   // console.log(checkbox);

   checkbox.onclick = function() 
   {
      if(checkbox.checked) {
         doneWindow.append(checkboxContainer)
         newLabel.style.textDecoration = "line-through";

      }
      else {
         newLabel.style.textDecoration = "none"
         todoWindow.append(checkboxContainer)
      };
   } 

   deleteButton.onclick = function()
   {
      checkboxContainer.remove()
      console.log("You clicked delete")
   };

};


