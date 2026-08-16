let rollBtn = document.getElementById("rollBtn");
let resetBtn = document.getElementById("resetBtn");
let resultText = document.getElementById("resultText");
let diceFace = document.getElementById("diceFace");
let max = 6;
let min = 1;

rollBtn.onclick = function () {

   let rollNum = Math.floor(Math.random() * max) + min; //I want it to update every time on click so putting it here. Putting it outside would mean, I get one value when the page loads and thats it. I want new value each time I click the button
   resultText.innerHTML = `You have rolled ${rollNum}`;

   if (rollNum == 1) {
      diceFace.src = "Dice Faces/dice-six-faces-one.svg"
   }
   else if (rollNum==2) {
      diceFace.src = "Dice Faces/dice-six-faces-two.svg"
   }
   else if (rollNum==3) {
      diceFace.src = "Dice Faces/dice-six-faces-three.svg"
   }
   else if (rollNum==4) {
      diceFace.src = "Dice Faces/dice-six-faces-four.svg"
   }
   else if (rollNum==5) {
      diceFace.src = "Dice Faces/dice-six-faces-five.svg"
   }
   else if (rollNum==6) {
      diceFace.src = "Dice Faces/dice-six-faces-six.svg"
   } // IF statement chain to switch images based on the rolled number

}

resetBtn.onclick = function () {
   resultText.innerHTML = "You have not rolled"
   diceFace.src = "Dice Faces/dice-six-faces-one.svg"
}

/* few issues I had:

1) I was doing let rollNum = Math.floor(Math.random() * max) + min; at the beginning
along with declaring the other varibles so itd make is so that the result wont change and as a result, I just
got the same number despite rolling multiple times.Like, when the program started, it'd declare a number and stay as that. Whereas
I wanted to change it everytime I clicked on the roll button
Fix: Moved that into the function that was getting executed when roll button was being clicked. Now everytime the roll
was getting clicked, it'd update the result to something new. Basically, messed up the timing of things before. (HAD TO TAKE A LOOK AT BROCODE'S PROJECT's CODE, COULDNT FIGURE IT OUT BY MSELF)

Stuff I had to google: 
1) How to change HTML image source using JS
2) How to add something at the end of HTML using JS (Ended up not doing this appraoch because felt too complicated and messy, plus it was causing bugs)
3) How to add SVG in HTML
4) How to center Images/SVG (I forgot the flex stuff, didnt end up using flex but Margin auto which is smth I didnt know about before)

*/


