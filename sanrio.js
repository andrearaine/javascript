
// Import the readline module.
// This allows the user to type information into the terminal.
const readline = require("readline");

// Create an input system for the user.
// input will receive what the user types.
const input = readline.createInterface({
    input: process.stdin,  // Receives keyboard input.
    output: process.stdout // Displays messages in the terminal.
});

// Create an array called inventory.
// This array stores all the Sanrio blind box products.
const inventory = [

    // First inventory item
    {
        item: "Hello Kitty Blind Box", // Name of the product.
        character: "Hello Kitty",     // Sanrio character name.
        rfid: "RFID001",               // Unique RFID identifier.
        stock: 25                      // Number of items available.
    },

    // Second inventory item
    {
        item: "Kuromi Blind Box",
        character: "Kuromi",
        rfid: "RFID002",
        stock: 15
    },

    // Third inventory item
    {
        item: "My Melody Blind Box",
        character: "My Melody",
        rfid: "RFID003",
        stock: 30
    },

    // Fourth inventory item
    {
        item: "Cinnamoroll Blind Box",
        character: "Cinnamoroll",
        rfid: "RFID004",
        stock: 20
    },

    // Fifth inventory item
    {
        item: "Pompompurin Blind Box",
        character: "Pompompurin",
        rfid: "RFID005",
        stock: 12
    },

    // Sixth inventory item
    {
        item: "Keroppi Blind Box",
        character: "Keroppi",
        rfid: "RFID006",
        stock: 8
    },

    // Seventh inventory item
    {
        item: "Badtz-Maru Blind Box",
        character: "Badtz-Maru",
        rfid: "RFID007",
        stock: 18
    }

]; // End of the inventory array.


// Create a function called searchInventory.
// searchItem represents the name entered by the user.
function searchInventory(searchItem) {

    // Create a variable called found.
    // It starts as false because we haven't found anything yet.
    let found = false;

    // Start a for loop to check every item in the inventory.
    // i = 0 means start at the first item.
    // i < inventory.length means continue until all items are checked.
    // i++ increases i by 1 after each loop.
    for (let i = 0; i < inventory.length; i++) {

        // Check whether the product name matches the user's search.
        // toLowerCase() makes the search ignore capital letters.
        // includes() allows the user to search using part of a name.
        if (
            inventory[i].item.toLowerCase().includes(searchItem.toLowerCase()) ||

            // Also check the Sanrio character name.
            // || means OR, so either match will work.
            inventory[i].character.toLowerCase().includes(searchItem.toLowerCase())
        ) {

            // Display a message when an item is found.
            console.log("\n----- ITEM FOUND -----");

            // Display the product name.
            console.log("Item: " + inventory[i].item);

            // Display the Sanrio character.
            console.log("Character: " + inventory[i].character);

            // Display the RFID code.
            console.log("RFID Code: " + inventory[i].rfid);

            // Display how many items are available.
            console.log("Stock Available: " + inventory[i].stock);

            // Change found from false to true.
            // This tells the program that the item exists.
            found = true;

            // Stop the loop because the item has been found.
            break;
        }
    }

    // Check whether the item was NOT found.
    // If found is still false, display an error message.
    if (found === false) {

        // Tell the user that the product does not exist.
        console.log("\nSorry, item not found in inventory.");
    }

    // Close the input system after the search is finished.
    input.close();
}


// Ask the user to enter a product or character name.
input.question("Enter a Sanrio character or item name: ", function(searchItem) {

    // Send the user's answer to the searchInventory function.
    searchInventory(searchItem);

}); // End of the user input function.
