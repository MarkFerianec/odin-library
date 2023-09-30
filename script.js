const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        let bookReadOrNot;
        if (read == true) {
            bookReadOrNot = "read";
        }
        else {
            bookReadOrNot = "not read yet";
        }
        return title + " by " + author + ", " + pages + " pages, " + bookReadOrNot;
        // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
    }
}

// hobbit = new Book("Hobbit", "Tolkien", 295, true);

function addBookToLibrary(title, author, pages, read) {
    // add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array.
    // read user input
    // enter book name, author, pages and if read or not
    let bookTitle = title;
    let bookAuthor = author;
    let bookPages = pages;
    let bookRead = read;
    //make bookObject

    // myLibrary.push(bookObject)
    myLibrary.push(new Book(bookTitle, bookAuthor, bookPages, bookRead));
}

// "Hobbit", "Tolkien", 295, true