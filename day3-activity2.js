//Edit the below snippet to include 2 parameters and a running order count updated when the function is called:

// let orderCount = 0;

// const takeOrder = (topping) => {
//     console.log(`Piiza with ${topping}`);
//     orderCount ++;
// }

// takeOrder("pineapple");

let orderCount = 0;

const takeOrder = (topping1, topping2) => {
    console.log(`Piiza with ${topping1} and ${topping2}`);
    orderCount ++;
    console.log(`Running order count: ${orderCount}`)
}

takeOrder("ham", "pineapple");
takeOrder("Onions", "peppers");
