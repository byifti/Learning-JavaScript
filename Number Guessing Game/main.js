let minNum = 300;
let maxNum = 373;
let answer = Math.floor((Math.random() * (maxNum - minNum + 1))+minNum) //math.floor() always rounds lower. So even if theres >0.5, it rounds down to 0. So using that over math.round

let guess;
let numAttempt = 1;

while(guess !== answer)
{
   guess = window.prompt("Guess the number between 300-373 (Tip:Open Console from DevTools)!")
   guess = Number(guess);
   if (guess>answer) {
      console.log(`Attempt #${numAttempt}: The Number is lower`)
   }
   else if (guess<answer)
   {
      console.log(`Attempt #${numAttempt}: The Number is higher`)
   }
   else if (guess == answer)
   {
      console.log("Correct!!")
      console.log(`It took you ${numAttempt} attempts!`)
   }

   numAttempt+=1;

}

