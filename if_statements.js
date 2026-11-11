// if else 
// &&  means AND
// ||  means OR
// !   means NOT

// IF STATEMENT:
let productExists = true;
let rfidExists = true;

if (productExists && rfidExists) {
    console.log("Ready to print!");
}

// IF ELSE:
let productFound = true;

if (productFound) {
    console.log("Product found!");
} else {
    console.log("Product not found.");
}

// ELSE IF:
let quantity = 15;

if (quantity > 20) {
    console.log("High stock");
} else if (quantity > 0) {
    console.log("In stock");
} else {
    console.log("Out of stock");
}
