// Function to create a book
function createBook(id, title, author, category = "General", year = new Date().getFullYear()) {
    return {
        id: id,
        title: title,
        author: author,
        category: category,
        year: year,

        location: {
            shelf: "",
            floor: 1
        }
    };
}

let book1 = createBook(1, "JavaScript Basics", "Ahmad");
console.log(book1);

// 2. Create a function `addBooks(...books)` 
// that accepts any number of books and stores them
//  in a global array called `library`.

//Rest parameter
let library = [];

function addBooks(...books) {
    library.push(...books);
}
let book2 = createBook(2, "Python for Beginners", "Ali");
let book3 = createBook(3, "HTML & CSS Guide", "Sara");

addBooks(book1, book2, book3);
console.log(library);

//3. Create a function `randomPicker(...args)` that returns a random argument.
function randomPicker(...args) {
    let randomIndex = Math.floor(Math.random() * args.length);
    return args[randomIndex];
}

let randomBook = randomPicker(book1, book2, book3);
console.log("Randomly picked book:", randomBook);

//4. Create an anonymous function stored in a variable `logBook` that 
// prints book info in a formatted way.

let logBook = function(book) {
    console.log(`Book ID: ${book.id}`);
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Category: ${book.category}`);
    console.log(`Year: ${book.year}`);
    console.log('-----------------------------');
};
logBook(book1);
logBook(book2);
logBook(book3);

// 5. Create a nested function generator `counter()` 
// that returns another function which increments a counter
function counter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}
let CounterTest = counter();
console.log("Counter Test:", CounterTest());
console.log("Counter Test:", CounterTest());
console.log("Counter Test:", CounterTest());

//6. Create an arrow function `getBookById` that returns a book by its id.
const getBookById = (id) => {
    return library.find(book => book.id === id);
};
console.log("Book with ID = 2:", getBookById(2));

// 8. Use lexical scope inside a function `libraryStats()`

function libraryStats() {
    let total = library.length; 

    function printStats() {    //nested function 
        console.log("Total Books:", total);
    }

    printStats();
}
libraryStats();

// 9. Create an arrow function that returns all books older than 10 years.

const getOldBooks = () => {
    const currentYear = new Date().getFullYear();
    return library.filter(book => currentYear - book.year > 10);
};
console.log("Books older than 10 years:", getOldBooks());

//10. Create a function `getTitles()` using map.
function getTitles() {
    return library.map(book => book.title);
}
console.log("Get title by mep:",getTitles());

//11. Create `filterByCategory(category)` using filter.
function filterByCategory(category) {
    return library.filter(book => book.category === category);
}
console.log("filtter by title : ",filterByCategory("General"));

//12. Create `countBooksByAuthor()` using reduce

function countBooksByAuthor() {
    return library.reduce((acc, book) => {
        acc[book.author] = (acc[book.author] || 0) + 1;
        return acc;
    }, {});
}
console.log("Books by author:", countBooksByAuthor());

//13. Use forEach to print all books.
console.log("Printing all books using forEach:");
library.forEach(book => {
    console.log(
        `ID: ${book.id},
        Title: ${book.title},
         Author: ${book.author},
         Category: ${book.category},
         Year: ${book.year}`);
});
// 14. Create a search function `searchBooks(keyword)` 
// that searches for books by title or author
function searchBooks(keyword) {
    keyword = keyword.toLowerCase(); // لتحويل البحث لحروف صغيرة
    return library.filter(book => 
        book.title.toLowerCase().includes(keyword) || 
        book.author.toLowerCase().includes(keyword)
    );
}

console.log("Search results for 'JavaScript':");
console.log(searchBooks("JavaScript"));
console.log("Search results for 'Ali':");
console.log(searchBooks("Ali"));
// 15. Updated createBook with nested location object

// function createBook(id, title, author, category = "General", year = new Date().getFullYear()) {
//     return {
//         id: id,
//         title: title,
//         author: author,
//         category: category,
//         year: year,
//         location: {      // nested object
//             shelf: "",
//             floor: 1
//         }
//     };
// }

let book4 = createBook(1, "JavaScript Basics", "salim");
let book5 = createBook(2, "Python for Beginners", "jmela");

console.log(book4);
console.log(book5);

console.log("Book1 shelf:", book4.location.shelf); 
console.log("Book2 floor:", book5.location.floor); 

//16. Demonstrate dot notation and bracket notation.
let book = createBook(1, "JavaScript Basics", "Haneen");

// Dot notation
console.log("Using dot notation:");
console.log(book.title);      

// Bracket notation
console.log("Using bracket notation:");
console.log(book["title"]);   
console.log(book["location"]["floor"]); 

book.category = "Programming";          
book["location"]["shelf"] = "A3";       

console.log("Updated book:", book);
// 17. Constructor function Book using new and this

function Book(id, title, author, category = "General", year = new Date().getFullYear()) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.category = category;
    this.year = year;
    this.location = {
        shelf: "",
        floor: 1
    };
}

let book6 = new Book(1, "JavaScript Basics", "Haneen");
let book7 = new Book(2, "Python for Beginners", "Ali");

console.log(book6);
console.log(book7);
console.log(book6.title);
console.log(book7.location.floor);

//18. Use Object.create() to create a library manager object.

const libraryManager = Object.create({
    addBook(book) {
        this.books.push(book);
    },
    listBooks() {
        return this.books;
    }
});

libraryManager.books = [];
let b1 = new Book(1, "Clean Code", "Martin");
let b2 = new Book(2, "Data Science", "Haneen");

libraryManager.addBook(b1);
libraryManager.addBook(b2);

console.log(libraryManager.listBooks());
// 19. Use Object.assign() to merge default settings with user settings

const defaultSettings = {
    theme: "light",
    showNotifications: true,
    language: "en",
    itemsPerPage: 10
};

const userSettings = {
    theme: "dark",
    language: "ar"
};

const finalSettings = Object.assign({}, defaultSettings, userSettings);

console.log("Final Settings:", finalSettings);
