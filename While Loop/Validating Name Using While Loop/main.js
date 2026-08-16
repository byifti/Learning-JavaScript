let submitButton = document.getElementById("submitbutton");

submitButton.onclick = function() {

   let userName = document.getElementById("username").value;
   // was doing userName = boolean(); before then comparing but apparently JS does it automatically before comapring truthfulness in IF statements
   while (userName == false || userName===null) { // added or operator check NULL cuz if user does cancel on window prompt, it gets out of the loop
      userName = window.prompt("WHAT IS YOUR NAME CHILD???")
   }

   userName = userName.trim()
   let firstChar = userName.charAt(0).toUpperCase();
   let firstName = userName.slice(1);

   userName = `${firstChar}${firstName}`
   let greetingPara = document.getElementById("para0");
   greetingPara.textContent = `Welcome....${userName}. You must be confused.`

}

/*

let submitButton = document.getElementById("submitbutton");

submitButton.onclick = function() {

   let userName = document.getElementById("username").value;
   // was doing userName = boolean(); before then comparing but apparently JS does it automatically before comapring truthfulness in IF statements
   if (userName) {
         let greetingPara = document.getElementById("para0");
         greetingPara.textContent = `Welcome....${userName}. You must be confused.`
   } 
   else {
      let greetingPara = document.getElementById("para0");
      greetingPara.textContent = `What was that? Couldn't hear u well.`
   }

}

*/