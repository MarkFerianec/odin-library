function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        let bookReadOrNot;
        if (read == true)  {
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