//Create a variable called word that takes a string. Create an if statement that checks if the last letter is the same as the first. If it is return true, otherwise return false.

word = "My name is Tom"
wordInCaps = word.toUpperCase()

if (wordInCaps[0] == wordInCaps[wordInCaps.length -1]){
    console.log("True")
}
else console.log("False")
