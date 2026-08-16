const PI = 3.1416;
let submitButton = document.getElementById("submitButton");
let circumference = document.getElementById("result");
let inputBox = document.getElementById("inputBox");

submitButton.onclick = function() {

   let radius = inputBox.value;
   circumference.textContent = 2 * PI * radius

}