//Create a variable for any pizza topping.
//Create a switch statement, if the topping is one of your favourite ingredients, log to the console "These are my important ingredients for my pizza." If you don't mind having Pepperoni for example log to the console "I don't mind havbing ${topping} on my pizza."
//Finally, for any topping you don't like log "${topping} should not be on a pizza".

let pizzaTopping = "pineapple";

switch(pizzaTopping){
    case "pineapple":
    case "green chilli":
    case "olives":
    case "mixed pepeprs":
        console.log("These are my important ingredients for my pizza");
        break;
    case "pepperoni":
        console.log(`I don't mind having ${pizzaTopping} on my pizza.`);
        break;
    case "onions":
    case "mushrooms":
    case "jalepinos":
        console.log(`${pizzaTopping} should not be on a pizza!!`);
        break;
}