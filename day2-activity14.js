//Generate a random number between 1 - 30 6 times.
//For each random number generated, check if this number is divisble by 7 or not
//log out a message to the console if it is divisble by 7 or not

for (let i=0; i<7; i++) {

    let randNum = Math.ceil((Math.random() * 30)) 

    console.log(randNum)

    if (randNum % 7 === 0){
        console.log("This number is divisble by 7");
    } else{
        console.log("This number is not divisble by 7")
    }
    
}