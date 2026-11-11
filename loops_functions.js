// Function: reusable block of code to perform a specific task

// Return:
function calculateTotal(price, quantity) {
    return price * quantity;
}

let total = calculateTotal(25, 4);

console.log(total);


// LOOPS:


// FOR LOOP: repeats code a specific number of times 

// for (starting point; condition; increment) {
    // Code to repeat
// }

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Outputs 0 - 5
// Let i = 0: start count at 0
// I < 5: continue while i is less than 5
// I++: increase i by 1 each time 
const products = [
    "Nike Hoodie",
    "Adidas Shirt",
    "Puma Pants"
];

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}
// WHILE LOOP: repeats as long as condition is true 
let quantity = 1;

while (quantity <= 5) {
    console.log(quantity);

    quantity++;
}

// FOR…OF LOOP: simpler way to go through arrays
const products = [
    "Nike Hoodie",
    "Adidas Shirt",
    "Puma Pants"
];

for (const product of products) {
    console.log(product);
}

// forEach() LOOP is an array method that executes a function for every item 
products.forEach(function(product) {
    console.log(product);
});

// OTHER CONCEPTS 
// map() transforms items in an array
// filter() find multiple matching products 
// find() find one matching product
// sort() organize products alphabetically on by SKU
// try/catch handles errors
// async/await retrieves info from a database/API
// fetch() communicates with APIs
// JSON exchanges product info
// localStorage temporarily save browser data
// ES6 modules organize code into multiples files 
