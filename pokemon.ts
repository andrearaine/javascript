
// Create an array containing Pokémon names.
const pokemonNames = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Pikachu"
];

// Create an array containing the Pokémon types.
// Each type matches the Pokémon in the same position above.
const pokemonTypes = [
    "Grass / Poison",
    "Grass / Poison",
    "Grass / Poison",
    "Fire",
    "Fire",
    "Fire / Flying",
    "Water",
    "Water",
    "Water",
    "Electric"
];

// Create an empty array to store the completed Pokémon information.
const pokemon = [];

// Create a variable to assign numbers to each Pokémon.
// Start counting at 1.
let number = 1;

// Use a for...of loop to go through each Pokémon name.
for (const name of pokemonNames) {

    // Get the Pokémon type from the matching position.
    // number - 1 is used because array positions start at 0.
    const type = pokemonTypes[number - 1];

    // Create an object containing the Pokémon's information.
    const newPokemon = {
        number: number,
        name: name,
        type: type
    };

    // Add the new Pokémon object to the pokemon array.
    pokemon.push(newPokemon);

    // Increase the number by 1 for the next Pokémon.
    number++;
}

// Display all Pokémon information.
console.log("----- POKÉMON DATABASE -----");

// Use another for...of loop to display each Pokémon.
for (const p of pokemon) {

    // Display the Pokémon number, name, and type.
    console.log(
        "#" + p.number + " " +
        p.name + " - Type: " + p.type
    );

}
