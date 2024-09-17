// //Create a variable called num. Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202)
//my code attempted to reso'lve the activity, had to utilise chatgpt to resolve the errors

let num = 122;

//converts number to string 
const numToStr = num.toString(); 

//splits the string, reverses order of string, adds the characters toegther to form reversed string
const revStr = numToStr.split('').reverse('').join('');

//check to see if the number and reversed number are the same
(numToStr == revStr) ? console.log(`The number ${num} is a palindrome`) : console.log(`The number ${num} is not a palindrome`);



