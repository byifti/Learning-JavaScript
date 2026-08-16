function isValidEmail(email) {

   if(email.includes("@"))
   {
      return true
   }
   else 
   {
      return false
   }

};

console.log(isValidEmail("jingaLaLaHuHu"))