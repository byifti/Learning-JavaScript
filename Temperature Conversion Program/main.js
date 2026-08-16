let temperatureInputBox = document.getElementById("temperatureInputBox");
let toCelsiusBtn = document.getElementById("toCelsiusBtn");
let toFahrenheitBtn = document.getElementById("toFahrenheitBtn");
let convertBtn = document.getElementById("convertBtn");
let resultText = document.getElementById("resultText");
let temperature;

function calcTemp() {
   temperature = Number(temperatureInputBox.value)
   if(toCelsiusBtn.checked) 
   {
      temperature = ((temperature-32) * 5/9).toFixed(2);
      resultText.textContent = `The Temperature is ${temperature}°C`
   }
   else if (toFahrenheitBtn.checked) 
   {
      temperature = (temperature*2) + 30;
      resultText.
      textContent = `The Temperature is ${temperature}°F`
   }

}

convertBtn.addEventListener("click", calcTemp)
