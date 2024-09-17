//Create a variable called time, a variable called placeOfWork and a variable called townOfHome, Create an if statement that logs to the console where someone is at the times of a day. E.g if the time is 7 I'm at home, at 8 I'm commuting, at 9 I'm at work.


let time = 8;
let placeOfWork = "office";
let townOfHome = "Liverpool";

if (time < 8) {
    console.log(`I'm at home in ${townOfHome}`)
} else if (time => 8 && time < 10) {
    console.log(`Im on the way to the ${placeOfWork}`)
} else {
    console.log("I'm at work")
}
