//Display 4 films stored in an array. Use a for loop to show each film in the array. 

let topFourFilms = ["300", "Fight Club", "Hell Boy", "Kill Bill"]

for (let i = 0; i < topFourFilms.length; i++) {
    console.log(topFourFilms[i]);
}

//Use an if statement to check if the 3rd film in the array is Ghostbusters. If it is, return "yay its Ghostbusters". If it is not return "Boo! We want ghostbusters"
(topFourFilms[2] == "Ghostbusters") ? console.log("yay its Ghostbusters") : console.log("Boo! We want ghostbusters")