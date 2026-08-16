let counterNumber = document.getElementById("counterNumber");
let increaseBtn = document.getElementById("increaseBtn");
let resetBtn = document.getElementById("resetBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let number = 0;

counterNumber.textContent = number

increaseBtn.onclick = function() {
   number += 1;  
   counterNumber.textContent = number;
};

resetBtn.onclick = function() { 
   number = 0;
   counterNumber.textContent = number;
};

decreaseBtn.onclick = function() {
   number -= 1;  
   counterNumber.textContent = number;
};

/* This woudlve taken 5-7 mins to make but the thing that I spent most time
on was that, I forgot to save the HTML after assigning ID to buttons and 
it was sayinng "Can't access property "onclick" erorr, increaseBtn is null. In the inspection console.
I was trying to fix the issue in JS because I didnt really understand at first.

So lesson: Don't tunnel vision in one file, try to "understand" what that bug/error even means and save things
after minimal edits (and in case youre unsure, just re-save every file to check*/

// Why didnt I use addeventlistener instead of .onclick?
/* Ans: Couldve made it using addEventListener (did start after that error, threw the same error then i understood what was going on.

Didnt cuz seemed unnecessary. I think that one is better if I am making something with scalability in mind (for example if i had to reuse the same function multiple times). 
Since I'll have to make each function individually and name them specifically THEN use them on click. But here idt its worth it, scalability doesnt matter so just making doing .onclick and writing a one-time-use function within it seems best

*/