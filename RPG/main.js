// Act Zero

let submitButton = document.getElementById("submitbutton");
let userNameInput = document.getElementById("username")
let warningText = document.getElementById("warningText");

userNameInput.addEventListener("focusin", displayWarning);
userNameInput.addEventListener("focusout", killWarning);

function displayWarning() {
   warningText.style.display = "block"
}
function killWarning() {
   warningText.style.display = "none"
}

submitButton.onclick = function() {

   let userName = document.getElementById("username").value;
   
   while (userName == false || userName===null) 
   { // added or operator to check NULL cuz if user does cancel on window prompt, it gets out of the loop
      userName = window.prompt("WHAT IS YOUR NAME CHILD???")
   }

   userName = userName.trim()
   let firstChar = userName.charAt(0).toUpperCase();
   let firstName = userName.slice(1);

   userName = `${firstChar}${firstName}`
   let greetingPara = document.getElementById("para0");
   greetingPara.textContent = `Welcome....${userName}. You must be confused.`

}

submitButton.addEventListener("click", showButton) //when submit is clicked, it'll show act 1 choice 1.1, 1.2
function showButton() {
   choiceOne1.style.display = "inline-block";
   choiceOne2.style.display = "inline-block";
}

submitButton.addEventListener("click", hideSubmit) // hides submit button after its clicked
function hideSubmit() {
   submitButton.style.display = "none";
}

// Act Two
let choiceOne1 = document.getElementById("ch1.1");
let choiceOne2 = document.getElementById("ch1.2");
let buttons = document.getElementsByClassName("choiceButton");

function killChoiceBtn() {
   for(let button of buttons)
   {
      button.style.display = "none"
   }
} // Function for hiding buttons

// choice 1.1

choiceOne1.addEventListener("click", choice1) // executes choice 1.1 dialogue
choiceOne1.addEventListener("click", killChoiceBtn) // hides both act 1 choice buttons after selection

function choice1() {
   let firstPara = document.getElementById("para1")
   firstPara.textContent = `This is the bottom layer of Arcadia... Where the "Utopia" rots.`
}; // dialogue

// choice 1.2

choiceOne2.addEventListener("click", choice2) 
choiceOne2.addEventListener("click", killChoiceBtn)

function choice2() {
   let firstPara = document.getElementById("para1") // dialogue
   firstPara.textContent = `I am....I guess the manager`
};


// make a function using document.GetElementByClass("button"); and make all choice buttons disappear via that one function rather than making new function for each button disppearance everytime - DONE BABYYYYY, JUST LEARNT ARRAYS AND DID THIS FIRST THING (13/8/26)