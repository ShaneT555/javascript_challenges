// Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the index of a last vowel in the string.

const vowels = "A, E, I, O, U, a, e, i, o, u"

let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

for (let i = string.length -1; i >=0; i--){
    (vowels.includes(string[i])) ? console.log(`The last vowel in the string has the index ${[i]}`) : console.log("The string has no vowels")
    break;
}