
// 1. Create suits and card values
const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

const values = [
    "Ace", "2", "3", "4", "5", "6", "7",
    "8", "9", "10", "Jack", "Queen", "King"
];

// 2. Create an empty deck
let deck = [];

// 3. Create all 52 cards
for (let suit of suits) {

    for (let value of values) {

        let card = {
            suit: suit,
            value: value
        };

        deck.push(card);
    }
}

// 4. Print only Hearts cards
console.log("\n--- HEARTS CARDS ---");

for (let card of deck) {

    if (card.suit === "Hearts") {
        console.log(card.value + " of " + card.suit);
    }
}

// 5. Find the Queen of Spades
console.log("\n--- QUEEN OF SPADES ---");

let queenOfSpades = deck.find(function(card) {

    return card.suit === "Spades" && card.value === "Queen";

});

console.log(queenOfSpades);

// 6. Count total cards
console.log("\n--- TOTAL CARDS ---");

console.log("There are " + deck.length + " cards in the deck.");

// 7. Randomly select one card
console.log("\n--- RANDOM CARD ---");

function drawCard() {

    let randomIndex = Math.floor(Math.random() * deck.length);

    let selectedCard = deck[randomIndex];

    return selectedCard;
}

console.log("You drew: ");
console.log(drawCard());
