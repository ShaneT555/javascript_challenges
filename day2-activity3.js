//Create a variable called password. Check how many letters are in the password, if there are less than 8, log to the console that the password is too short. Otherwise log the password to the console.

let password = "Password123";
let passwordCount = password.length;

(passwordCount < 8) ? console.log("Error, password is too short") : console.log("Password accepted");

// Create a variable called num. Check if the variable is divisble by 3 or 5. If it is, log "This number is divisble by 3 or 5". Otherwise log something else "This number is not divisble by 3 or 5"

let num = 17;

(num % 3 == 0 || num % 5 == 0) ? console.log("This number is divisble by 3 or 5") : console.log("This number is not divisble by 3 or 5");




