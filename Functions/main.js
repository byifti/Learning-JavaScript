function isEven(number){
   number = Number(number);
   if (Number.isNaN(number))
   {
      console.log("That is NOT a number!");
   }
   else if(number % 2 === 0)
   {
      console.log("The Number is Even");
   }
   else 
   {
      console.log("The Number is Odd");
   }
}

isEven("tamim");

/* Another version:

function isEven(number){

   if(number % 2 === 0)
   {
      return true
   }
   else if (number % 2 !== 0)
   {
      return false
   }

}

console.log(isEven(12))

*/
// Return basically returns whatever value the function generates to the caller. So that it can be used again. Whereas the function I wrote, i cant reuse the value I got after the function was called
