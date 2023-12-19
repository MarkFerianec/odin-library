const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    let bookReadOrNot;
    if (read == true) {
      bookReadOrNot = 'read';
    } else {
      bookReadOrNot = 'not read yet';
    }
    return title + ' by ' + author + ', ' + pages + ' pages, ' + bookReadOrNot;
    // console.log(title + ' by ' + author + ', ' + pages + ' pages, ' + bookReadOrNot);
  }
}

// function addBookToLibrary(title, author, pages, read) {
//   // add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array.
//   // read user input
//   // enter book name, author, pages and if read or not
//   let bookTitle = title;
//   let bookAuthor = author;
//   let bookPages = pages;
//   let bookRead = read;

//   myLibrary.push(new Book(bookTitle, bookAuthor, bookPages, bookRead));
// }

// Some default books
// addBookToLibrary('Hobbit', 'Tolkien', 295, true);
// addBookToLibrary('Book2', 'Someone', 300, false);
// addBookToLibrary('Book3', 'Someone Else', 1000, true);

const display = document.querySelector('.book-container');

// This was initially here to display default books
// for (let i = 0; i < myLibrary.length; i++) {
//   const div = document.createElement('div');
//   div.style.display = 'flex';
//   div.style.flexDirection = 'column';
//   div.style.border = '1px solid black';
//   div.style.padding = '50px';
//   div.style.margin = '50px';
//   // this is new
//   div.dataset.bookIndex = i;

//   console.log(div.dataset);
//   console.log(div.dataset.bookIndex);

//   display.appendChild(div);

//   //   let bookIndex = i;
//   // let bookIndex = myLibrary.length - 1;

//   const titleDiv = document.createElement('div');
//   div.appendChild(titleDiv);
//   titleDiv.textContent = myLibrary[i].title;

//   const authorDiv = document.createElement('div');
//   div.appendChild(authorDiv);
//   authorDiv.textContent = myLibrary[i].author;

//   const pagesDiv = document.createElement('div');
//   div.appendChild(pagesDiv);
//   pagesDiv.textContent = myLibrary[i].pages;

//   const readDiv = document.createElement('div');
//   div.appendChild(readDiv);
//   if (myLibrary[i].read == true) {
//     // readDiv.textContent = myLibrary[i].read;
//     readDiv.textContent = 'This book has been read';
//   } else {
//     // readDiv.textContent = myLibrary[i].read;
//     readDiv.textContent = 'This book has not been read';
//   }
//   // readDiv.textContent = myLibrary[i].read;

//   const readButton = document.createElement('button');
//   readButton.textContent = 'Has this book been read?';
//   div.appendChild(readButton);

//   readButton.addEventListener('click', toggleReadStatus);

//   function toggleReadStatus() {
//     if (myLibrary[i].read == true) {
//       myLibrary[i].read = false;
//       // readDiv.textContent = myLibrary[i].read;
//       readDiv.textContent = 'This book has not been read';
//     } else if (myLibrary[i].read == false) {
//       myLibrary[i].read = true;
//       // readDiv.textContent = myLibrary[i].read;
//       readDiv.textContent = 'This book has been read';
//     }
//     console.log(myLibrary[i].read);
//   }

//   const removeButton = document.createElement('button');
//   removeButton.textContent = 'Remove';
//   div.appendChild(removeButton);

//   removeButton.addEventListener('click', removeBook);

//   function removeBook() {
//     display.removeChild(div);
//     // myLibrary.splice(bookIndex, 1);

//     // if () {} // I might need an if statement to do different stuff when there is a few elements left in array

//     // myLibrary.splice(div.dataset.bookIndex, 1);

//     // myLibrary = myLibrary.filter(
//     //   (element) => element !== div.dataset.bookIndex
//     // );

//     // myLibrary = myLibrary.filter((i) => {
//     //   return i !== div.dataset.bookIndex;
//     // });

//     // console.log(div.dataset.bookIndex);
//     // console.log(typeof div.dataset.bookIndex);
//     // console.log(typeof Number(div.dataset.bookIndex));

//     // This does not work because the array shifts around objects
//     if (myLibrary.length == 1) {
//       myLibrary.pop();
//     } else {
//       myLibrary.splice(div.dataset.bookIndex, 1);
//       console.log(myLibrary);
//     }
//   }

//   // div.textContent = myLibrary[i].title + myLibrary[i].author + myLibrary[i].pages + myLibrary[i].read;
// }
// display.textContent = myLibrary[0].title + myLibrary[0].author + myLibrary[0].pages + myLibrary[0].read;

// for the amount of book objects that exist, make 1 div for each to display

// function bookDisplay(myLibrary) {
// display.textContent = myLibrary[0];
// }

// const div = document.createElement('div');
// display.appendChild(div);
// div.textContent = "Hello";

const addBookButton = document.querySelector('#addbook');
const dialog = document.querySelector('dialog');
const closeDialogButton = document.querySelector('#close-dialog-button');

addBookButton.addEventListener('click', displayModal);

function displayModal() {
  dialog.showModal();
}

closeDialogButton.addEventListener('click', closeModal);

function closeModal() {
  bookTitleSelector.value = '';
  bookAuthorSelector.value = '';
  bookPagesSelector.value = '';
  bookReadSelector.checked = false;
  dialog.close();
}

const bookTitleSelector = document.querySelector('#booktitle');
const bookAuthorSelector = document.querySelector('#bookauthor');
const bookPagesSelector = document.querySelector('#bookpages');
const bookReadSelector = document.querySelector('#bookread');

submit.addEventListener('click', submitForm);

function submitForm() {
  event.preventDefault();
  // let bookTitle = bookTitleSelector.value;
  // let bookAuthor = bookAuthor.value;
  myLibrary.push(
    new Book(
      bookTitleSelector.value,
      bookAuthorSelector.value,
      bookPagesSelector.value,
      bookReadSelector.checked
    )
  );
  // let bookIndex = myLibrary.length - 1; 
  const div = document.createElement('div');
  div.style.display = 'flex';
  div.style.flexDirection = 'column';
  div.style.border = '1px solid black';
  div.style.padding = '4rem';
  div.style.margin = '4rem';
  display.appendChild(div);
  div.dataset.bookIndex = myLibrary.length - 1;

  const titleDiv = document.createElement('div');
  div.appendChild(titleDiv);
  titleDiv.textContent = bookTitleSelector.value;

  const authorDiv = document.createElement('div');
  div.appendChild(authorDiv);
  authorDiv.textContent = bookAuthorSelector.value;

  const pagesDiv = document.createElement('div');
  div.appendChild(pagesDiv);
  pagesDiv.textContent = bookPagesSelector.value;

  const readDiv = document.createElement('div');
  div.appendChild(readDiv);
  if (bookReadSelector.checked == true) {
    readDiv.textContent = 'This book has been read';
  } else {
    readDiv.textContent = 'This book has not been read';
  }
  // readDiv.textContent = bookReadSelector.checked;

  // document.getElementById("bookread").checked

  const readButton = document.createElement('button');
  readButton.textContent = 'Has this book been read?';
  div.appendChild(readButton);

  readButton.addEventListener('click', toggleReadStatus);

  function toggleReadStatus() {
    if (myLibrary[bookIndex].read == true) {
      myLibrary[bookIndex].read = false;
      // readDiv.textContent = myLibrary[bookIndex].read;
      readDiv.textContent = 'This book has not been read';
    } else {
      myLibrary[bookIndex].read = true;
      // readDiv.textContent = myLibrary[bookIndex].read;
      readDiv.textContent = 'This book has been read';
    }
    console.log(myLibrary[bookIndex].read);
  }

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  div.appendChild(removeButton);

  removeButton.addEventListener('click', removeBook);

  function removeBook() {
    display.removeChild(div);
    // myLibrary.splice(bookIndex, 1);
    // console.log(div.dataset.bookIndex);
    // myLibrary.splice(div.dataset.bookIndex, 1);
    delete myLibrary[div.dataset.bookIndex];
  }

  bookTitleSelector.value = '';
  bookAuthorSelector.value = '';
  bookPagesSelector.value = '';
  bookReadSelector.checked = false;
  dialog.close();
}
