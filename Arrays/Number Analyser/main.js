let numbers = [-373, 67, 69, -2, 0, 4, -168, -4, 7, 370];
// let sum = 0; THIS CAUSES BUGS. Cuz when calcing average when u redo the loop, it causes the older looped sum to double due to looping again. I see why scope is imoprtant...and why people prefer local scope more.

function calcSum()
{
   let sum = 0;
   for (let number of numbers) 
   {
      sum += number;
   } // looping to add everything together

   console.log(`The sum is ${sum}`); // showing the result at the end of the loop
}
calcSum();

function calcAverage() 
{
   let sum = 0;
   for (let number of numbers) 
   {
      sum += number;
   }
   
   let arraySize = numbers.length;
   let average = sum / arraySize;
   
   console.log(`The average is ${average}`)
}
calcAverage();

function calcOddEvenAmount() 
{
   let evenAmount = 0;
   let oddAmount = 0;

   for (let number of numbers) 
   {
      if (number % 2 === 0)
      {
         evenAmount += 1;
      }
      else if (number % 2 !== 0)
      {
         oddAmount += 1;
      }

   }

   console.log(`There are ${evenAmount} even numbers!!!!`)
   console.log(`There are ${oddAmount} odd numbers!!!!`)

}

calcOddEvenAmount()


function getLargestNum() 
{
   let largestNum = numbers[0];

   for (let number of numbers) 
   {
      
      if(number >= largestNum)
      {
         largestNum = number;
      }
   }

   console.log(`The largest Number is ${largestNum}`)
}
getLargestNum()

function getSmallestNum() 
{
   let smallestNum = numbers[0];

   for (let number of numbers) 
   {
      
      if(number <= smallestNum)
      {
         smallestNum = number;
      }
   }

   console.log(`The smallest Number is ${smallestNum}`)
}
getSmallestNum()