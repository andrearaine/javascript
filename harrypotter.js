
// Array containing Harry Potter books
const books = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        description: "Harry discovers that he is a wizard and begins his journey at Hogwarts School of Witchcraft and Wizardry."
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        description: "Harry returns to Hogwarts and investigates a mysterious chamber that threatens the students."
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K. Rowling",
        description: "Harry learns about Sirius Black, an escaped prisoner connected to his family's past."
    },
    {
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        description: "Harry unexpectedly becomes a participant in the dangerous Triwizard Tournament."
    },
    {
        title: "Harry Potter and the Order of the Phoenix",
        author: "J.K. Rowling",
        description: "Harry and his friends prepare to face the growing threat of Lord Voldemort."
    },
    {
        title: "Harry Potter and the Half-Blood Prince",
        author: "J.K. Rowling",
        description: "Harry discovers important secrets about Voldemort's past while studying at Hogwarts."
    },
    {
        title: "Harry Potter and the Deathly Hallows",
        author: "J.K. Rowling",
        description: "Harry, Ron, and Hermione set out on a journey to find the remaining Horcruxes."
    }
];

// Function to search for a book
function searchBook() {

    // Ask the user to enter a book title
    let search = prompt("Enter the Harry Potter book title:");

    // Variable to check if the book is found
    let found = false;

    // Loop through all books in the array
    for (let i = 0; i < books.length; i++) {

        // Check if the title matches the user's search
        if (books[i].title.toLowerCase() === search.toLowerCase()) {

            // Display book information
            console.log("Book Found!");
            console.log("Title: " + books[i].title);
            console.log("Author: " + books[i].author);
            console.log("Description: " + books[i].description);

            found = true;
            break;
        }
    }

    // If the book does not exist
    if (found === false) {
        console.log("Sorry, this book was not found.");
    }
}

// Run the search function
searchBook();
