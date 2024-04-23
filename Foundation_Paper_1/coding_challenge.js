class book {
    constructor(title, author, genre, quantity) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.quantity = quantity;
    }

}

class bookstore {
    constructor() {
        this.books = [];
        this.bookTitles = new Set();
    }
    
    addBook(book) {
        if (!this.bookTitles.has(book.title)) { 
            this.books.push(book);
            this.bookTitles.add(book.title);
            console.log(`Book "${book.title}" added successfully.`);
        } 
        else {
            console.log(`Error: Book "${book.title}" already exists.`);
        }

        
    }

    updateBookQuantity(title, newQuantity) {
        const bookIndex = this.books.findIndex(book => book.title === title);

        if (bookIndex !== -1) {
            this.books[bookIndex].quantity = newQuantity;
            console.log(`Quantity for book "${title}" updated to ${newQuantity}.`);
        } 
        
        else {
            console.log(`Error: Book "${title}" not found.`);
        }
    }

    displayBooks() {
        if (this.books.length === 0) {
          console.log("No books available in the bookstore.");
        } else {
          console.log("Available Books:");
          this.books.forEach((book) => {
            console.log(`${book.title} by ${book.author} (${book.genre}) - Quantity: ${book.quantity}`);
          });
        }
      }
}


const book1 = new book('JS for Dummies', 'Bing Bang Bong', 'Information', 10);
const book2 = new book('JS for Dummies 2', 'Bing Bang Bong', 'Information', 10);
const book3 = new book('JS for Dummies 3', 'Bing Bang Bong', 'Information', 10);

const myBookstore = new bookstore();

myBookstore.addBook(book1);
myBookstore.addBook(book2);
myBookstore.addBook(book3);

myBookstore.updateBookQuantity("JS for Dummies", 100);
myBookstore.displayBooks();



