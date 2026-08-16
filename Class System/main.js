let confirmBtn = document.getElementById("confirmBtn");
let greeting = document.getElementById("greeting");
let welcome = document.getElementById("welcome");
let warningText = document.getElementById("warningText");
let userNameInput = document.getElementById("userName");
let usernameSection = document.getElementById("usernameSection")
let classSelection = document.getElementById("classSelection"); // class div
let weaponSelection = document.getElementById("weaponSelection"); // weapon div
let weapon1 = document.getElementById("weapon1");
let weapon2 = document.getElementById("weapon2");
let weapon3 = document.getElementById("weapon3");
let mageWeapons = ["Druid Staff", "Fire Staff", "Ice Staff"]
let archerWeapons = ["Long bow", "Crossbow", "Compound bow"]
let warriorWeapons = ["Greatsword", "Katana", "Claymore"]
let selectedWeapon;

// usernamesection

userNameInput.addEventListener("focusin", displayWarning);
userNameInput.addEventListener("focusout", killWarning);

function displayWarning() {
   warningText.style.display = "block"
}
function killWarning() {
   warningText.style.display = "none"
}

confirmBtn.onclick = function() {
   let userName = document.getElementById("userName").value;
   greeting.textContent = `Hello ${userName}! Please pick your class:`;
   classSelection.style.display = "block";
   usernameSection.style.display = "none";

};

// class selection

let mageBtn = document.getElementById("mageBtn");
let archerBtn = document.getElementById("archerBtn");
let warriorBtn = document.getElementById("warriorBtn");
let displayClass = document.getElementById("displayClass")

let isMage = false;
let isArcher = false;
let isWarrior = false;

mageBtn.onclick = function() {
   isMage = true;
   isArcher = false;
   isWarrior = false;
}
mageBtn.addEventListener("click", callClass)

archerBtn.onclick = function() {
   isMage = false;
   isArcher = true;
   isWarrior = false;
}
archerBtn.addEventListener("click", callClass)

warriorBtn.onclick = function() {
   isMage = false;
   isArcher = false;
   isWarrior = true;
}
warriorBtn.addEventListener("click", callClass)

function killButtons(containerName) 
{
   let buttons = containerName.getElementsByClassName("button")

   for (let button of buttons) 
   {
      button.style.display = "none"
   }
}

function callClass() 
{
   if (isMage)
   {
      displayClass.textContent = "You are a Mage!"
   }
   else if (isArcher) 
   {
      displayClass.textContent = "You are a Archer!"
   }
   else if (isWarrior) 
   {
      displayClass.textContent = "You are a Warrior!"
   }
   
   killButtons(classSelection)
   weaponSelection.style.display = "block";
   dynamicWeapons()

}

function dynamicWeapons() 
{
   if (isMage)
   {
      weapon1.textContent = mageWeapons[0];
      weapon2.textContent = mageWeapons[1];
      weapon3.textContent = mageWeapons[2];
   }
   else if (isArcher)
   {
      weapon1.textContent = archerWeapons[0];
      weapon2.textContent = archerWeapons[1];
      weapon3.textContent = archerWeapons[2];
   }
   else if (isWarrior)
   {
      weapon1.textContent = warriorWeapons[0];
      weapon2.textContent = warriorWeapons[1];
      weapon3.textContent = warriorWeapons[2];
   }
}

// weapon selection
let displayWeapon = document.getElementById("displayWeapon")

weapon1.onclick = function () {
   selectedWeapon = weapon1.textContent; // I GUESSED TS AND WASNT SURE IF IT WAS GONNA WORK, AND IT WORKED YOO
   displayWeapon.textContent = `You have selected ${selectedWeapon}`
   killButtons(weaponSelection)
}

weapon2.onclick = function () {
   selectedWeapon = weapon2.textContent; 
   displayWeapon.textContent = `You have selected ${selectedWeapon}`
   killButtons(weaponSelection)
}

weapon3.onclick = function () {
   selectedWeapon = weapon3.textContent; 
   displayWeapon.textContent = `You have selected ${selectedWeapon}`
   killButtons(weaponSelection)
}
