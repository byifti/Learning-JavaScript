for(let i = 0; i <= 373;i++){ //
   console.log(i)
}

// check condition → if true then console.log(i) [It executes the body first] → decrease i by 1 (or wtv change is set)
// then check again, if the condition is still true, redo the same thing and keep going untill the condition is fasle

// There's also continue and break in For Loops. Can be used within an IF statement within a for loop
// Imagine I wanna skip 67 and 69. Then do an IF statement and if i==67 (and else if i==69) 
// then put the `continue` (wihtout the quotaitons) keyword inside those statement and it'll skip over those two
// And break basically stops the loop. Imagine i wanna stop at 67 then put the `break` keyword inside instead of `continue` and it'll stop the loop at that