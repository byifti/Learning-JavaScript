let submitBtn = document.getElementById("submitBtn")
let checkbox = document.getElementById("checkbox")
let mastercardBtn = document.getElementById("mastercardBtn")
let visaBtn = document.getElementById("visaBtn")
let paypalBtn = document.getElementById("paypalBtn")
let noneBtn = document.getElementById("noneBtn")
let subsResult = document.getElementById("subsResult")
let cardResult = document.getElementById("cardResult")


submitBtn.onclick = function() {
   
   if(checkbox.checked){
      subsResult.textContent = `You are subscribed!`;
   }
   else {
      subsResult.textContent = `You are not subscribed :(`;
   };

   if(visaBtn.checked) {
      cardResult.textContent = `You are using a VisaCard`
   }
   else if(mastercardBtn.checked) {
      cardResult.textContent = `You are using MasterCard`
   }
   else if(paypalBtn.checked) {
      cardResult.textContent = `You are using PayPal`
   }
   else if(noneBtn.checked) {
      cardResult.textContent= `You are not using any cards`
   }

};