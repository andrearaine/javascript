
// =============================================
// 1. IMPORT THE READLINE MODULE
// =============================================

// "require" imports a built-in Node.js module.
// The readline module allows the user to type answers
// into the terminal instead of having to change the code.
const readline = require("readline");

// Create an input interface called "input".
// This connects the user's keyboard to the terminal.
const input = readline.createInterface({
    input: process.stdin,  // Receives what the user types.
    output: process.stdout // Displays questions and messages.
});


// =============================================
// 2. CREATE THE PLAYER OBJECT
// =============================================

// An object stores related information together.
// Here, we are storing information about our Minecraft player.
// Each piece of information has a property and a value.
const player = {
    name: "Steve", // The player's name.
    health: 20,    // The player's current health.
    hunger: 20,    // The player's current hunger level.
    level: 5       // The player's experience level.
};


// =============================================
// 3. CREATE THE INVENTORY ARRAY
// =============================================

// An array allows us to store multiple items in one variable.
// Each item inside the array is an object.
// Every object contains the item's name, category, and quantity.
const inventory = [

    {
        name: "Wood",
        type: "Resource",
        quantity: 10
    },

    {
        name: "Stone",
        type: "Resource",
        quantity: 20
    },

    {
        name: "Iron",
        type: "Resource",
        quantity: 8
    },

    {
        name: "Diamond",
        type: "Rare Resource",
        quantity: 3
    },

    {
        name: "Stick",
        type: "Material",
        quantity: 5
    }

];


// =============================================
// 4. CREATE CRAFTING RECIPES
// =============================================

// This array stores the different items the player can craft.
// Each recipe is an object.
// The "materials" property contains another array.
// This is an example of an array inside an object.
const recipes = [

    {
        name: "Wooden Pickaxe",

        // The player needs 3 wood and 2 sticks.
        materials: [
            { name: "Wood", quantity: 3 },
            { name: "Stick", quantity: 2 }
        ]
    },

    {
        name: "Stone Pickaxe",

        // The player needs 3 stone and 2 sticks.
        materials: [
            { name: "Stone", quantity: 3 },
            { name: "Stick", quantity: 2 }
        ]
    },

    {
        name: "Iron Pickaxe",

        // The player needs 3 iron and 2 sticks.
        materials: [
            { name: "Iron", quantity: 3 },
            { name: "Stick", quantity: 2 }
        ]
    }

];


// =============================================
// 5. DISPLAY THE INVENTORY
// =============================================

// A function is a reusable block of code.
// We can call this function whenever we want to
// display the player's current inventory.
function showInventory() {

    // Display a heading in the terminal.
    console.log("\n===== PLAYER INVENTORY =====");

    // A for...of loop goes through each object in the inventory.
    // "item" represents the current object being checked.
    // The loop continues until every inventory object is displayed.
    for (const item of inventory) {

        // Access the properties of the current object.
        // The + signs combine the text and variable values.
        console.log(
            "Item: " + item.name +
            " | Type: " + item.type +
            " | Quantity: " + item.quantity
        );

    }
}


// =============================================
// 6. COLLECT RESOURCES
// =============================================

// This function accepts two parameters:
// resourceName = the name of the resource being collected.
// amount = how many of that resource the player collects.
function collectResource(resourceName, amount) {

    // .find() searches through the inventory array.
    // It returns the first object whose name matches the resource.
    // If no match exists, it returns undefined.
    const item = inventory.find(function(product) {

        // Compare the existing product name with the user's input.
        // toLowerCase() makes the comparison ignore capital letters.
        return product.name.toLowerCase() === resourceName.toLowerCase();

    });

    // Check whether the resource already exists in the inventory.
    // !== means "not equal to".
    if (item !== undefined) {

        // If the resource exists, add the collected amount
        // to the quantity that the player already has.
        item.quantity += amount;

        // Display a message confirming the collection.
        console.log("\nYou collected " + amount + " " + item.name + "!");

    } else {

        // If the resource does not exist, create a new object.
        // .push() adds this new object to the end of the array.
        inventory.push({

            name: resourceName, // Store the resource name.
            type: "Resource",   // Give it the Resource category.
            quantity: amount   // Store the collected quantity.

        });

        // Confirm that the new resource was added.
        console.log("\nNew resource added: " + resourceName);

    }
}


// =============================================
// 7. SEARCH FOR AN ITEM
// =============================================

// This function accepts a searchName parameter.
// The parameter contains the item name entered by the user.
function searchItem(searchName) {

    // .find() searches for the first inventory item
    // whose name contains the user's search.
    const foundItem = inventory.find(function(item) {

        // includes() allows partial searches.
        // For example, searching "Dia" can find "Diamond".
        return item.name.toLowerCase().includes(searchName.toLowerCase());

    });

    // If foundItem is not undefined, the item exists.
    if (foundItem !== undefined) {

        // Display the matching item's information.
        console.log("\n===== ITEM FOUND =====");

        console.log("Name: " + foundItem.name);
        console.log("Type: " + foundItem.type);
        console.log("Quantity: " + foundItem.quantity);

    } else {

        // If no matching item exists, display an error.
        console.log("\nItem not found in inventory.");

    }
}


// =============================================
// 8. CRAFT AN ITEM
// =============================================

// This function accepts the name of the recipe
// the player wants to craft.
function craftItem(recipeName) {

    // Search the recipes array for the requested recipe.
    const recipe = recipes.find(function(item) {

        // Compare the recipe name with the user's input.
        return item.name.toLowerCase() === recipeName.toLowerCase();

    });

    // Check whether the recipe exists.
    if (recipe === undefined) {

        // Display an error if the recipe cannot be found.
        console.log("\nCrafting recipe not found.");

        // return immediately exits this function.
        // This prevents the rest of the crafting code from running.
        return;
    }

    // Create a variable to check whether crafting is possible.
    // We start by assuming the player has enough materials.
    let canCraft = true;

    // OUTER FOR...OF LOOP:
    // Go through every material required by the recipe.
    // For example, an Iron Pickaxe needs iron and sticks.
    for (const material of recipe.materials) {

        // Search the inventory for the required material.
        const item = inventory.find(function(product) {

            // Find the inventory object with the matching name.
            return product.name === material.name;

        });

        // Check two things:
        // 1. Does the player have this material?
        // 2. Does the player have enough of it?
        // || means OR, so either condition makes crafting impossible.
        if (item === undefined || item.quantity < material.quantity) {

            // Tell the player which material is missing.
            console.log("\nNot enough " + material.name + "!");

            // Change canCraft to false because the player
            // does not have all the required materials.
            canCraft = false;

        }

    }

    // Check whether the player has enough materials.
    if (canCraft === false) {

        // Stop the function if the player cannot craft the item.
        console.log("You cannot craft this item.");
        return;

    }

    // SECOND FOR...OF LOOP:
    // This loop runs only if the player has enough materials.
    // It goes through every material needed for crafting.
    for (const material of recipe.materials) {

        // Find the material in the inventory again.
        const item = inventory.find(function(product) {

            return product.name === material.name;

        });

        // Subtract the materials used to craft the new item.
        // For example, 8 iron becomes 5 iron after crafting.
        item.quantity -= material.quantity;

    }

    // Create a new object for the crafted tool.
    // .push() adds the new tool to the player's inventory.
    inventory.push({

        name: recipe.name, // Name of the crafted item.
        type: "Tool",      // Category of the new item.
        quantity: 1        // Player receives one tool.

    });

    // Display a success message.
    console.log("\nYou successfully crafted a " + recipe.name + "!");

}


// =============================================
// 9. DISPLAY PLAYER STATUS
// =============================================

// This function displays the player's current information.
function showStatus() {

    // Display the player's status heading.
    console.log("\n===== PLAYER STATUS =====");

    // Retrieve information from the player object.
    console.log("Player: " + player.name);
    console.log("Health: " + player.health + "/20");
    console.log("Hunger: " + player.hunger + "/20");
    console.log("Level: " + player.level);

}


// =============================================
// 10. CREATE THE MAIN MENU
// =============================================

// This function displays the main menu.
// It also allows the user to choose different actions.
function showMenu() {

    // Display the Minecraft menu.
    console.log("\n============================");
    console.log("      MINECRAFT SYSTEM");
    console.log("============================");

    console.log("1. View Inventory");
    console.log("2. Collect Resources");
    console.log("3. Search for an Item");
    console.log("4. Craft an Item");
    console.log("5. View Player Status");
    console.log("6. Exit Game");

    // Ask the user to enter a menu option.
    // The answer is stored in the variable "choice".
    input.question("\nChoose an option: ", function(choice) {

        // A switch statement checks which option was selected.
        // Each case represents a different menu option.
        switch (choice) {

            // OPTION 1: DISPLAY INVENTORY.
            case "1":

                // Call the function that displays the inventory.
                showInventory();

                // Display the menu again so the user can continue.
                showMenu();

                // break prevents the program from continuing
                // into the next switch case.
                break;


            // OPTION 2: COLLECT RESOURCES.
            case "2":

                // Ask the user which resource they want to collect.
                input.question("What resource do you want to collect? ", function(name) {

                    // Ask how many units they want to collect.
                    input.question("How many do you want to collect? ", function(amount) {

                        // Convert the user's answer into a number.
                        // Terminal input is normally received as text.
                        const quantity = Number(amount);

                        // Check that the resource name is not empty
                        // and that the quantity is a positive whole number.
                        if (
                            name.trim() === "" ||
                            !Number.isInteger(quantity) ||
                            quantity <= 0
                        ) {

                            // Display an error for invalid input.
                            console.log("Please enter a valid resource and quantity.");

                        } else {

                            // Call the collection function.
                            // Pass the resource name and quantity into it.
                            collectResource(name.trim(), quantity);

                        }

                        // Return to the main menu after collecting.
                        showMenu();

                    });

                });

                break;


            // OPTION 3: SEARCH FOR AN ITEM.
            case "3":

                // Ask the user which item they want to find.
                input.question("Enter the item name: ", function(name) {

                    // Pass the search term into the search function.
                    searchItem(name);

                    // Return to the main menu.
                    showMenu();

                });

                break;


            // OPTION 4: CRAFT AN ITEM.
            case "4":

                // Display all available crafting recipes.
                console.log("\nAvailable Crafting Recipes:");

                // Use a for...of loop to go through every recipe.
                for (const recipe of recipes) {

                    // Display the name of each recipe.
                    console.log("- " + recipe.name);

                }

                // Ask the player which tool they want to craft.
                input.question("\nWhat do you want to craft? ", function(name) {

                    // Send the recipe name to the crafting function.
                    craftItem(name);

                    // Return to the main menu.
                    showMenu();

                });

                break;


            // OPTION 5: DISPLAY PLAYER STATUS.
            case "5":

                // Call the function that displays player information.
                showStatus();

                // Return to the main menu.
                showMenu();

                break;


            // OPTION 6: EXIT THE PROGRAM.
            case "6":

                // Display a goodbye message.
                console.log("\nThanks for playing Minecraft!");

                // Close readline so the program can end.
                input.close();

                break;


            // DEFAULT: HANDLE INVALID MENU OPTIONS.
            default:

                // This runs when the user enters something
                // other than 1, 2, 3, 4, 5, or 6.
                console.log("\nInvalid option. Please choose 1-6.");

                // Show the menu again.
                showMenu();

        }

    });

}


// =============================================
// 11. START THE PROGRAM
// =============================================

// Call the showMenu function to start the game.
// Without this line, the menu would never appear.
showMenu();
