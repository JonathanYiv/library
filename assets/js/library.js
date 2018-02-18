let myLibrary = []

function Book(title, author, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {

}

// loops through myLibrary and displays each book
// on the page
const libraryPage = document.querySelector("#library");

function render() {
  myLibrary.forEach(book => {
    const row = document.createElement("tr");
    row.classList.add("book");

    const titleCell = row.insertCell();
    const title = document.createTextNode(book.title);
    titleCell.appendChild(title);

    const authorCell = row.insertCell();
    const author = document.createTextNode(book.author);
    authorCell.appendChild(author);

    const pagesCell = row.insertCell();
    const pages = document.createTextNode(book.pages);
    pagesCell.appendChild(pages);

    const readStatusCell = row.insertCell();
    const readStatusButton = document.createElement("button");
    const readStatus = document.createTextNode(book.read ? "Yes" : "No");
    readStatusButton.appendChild(readStatus);
    readStatusCell.appendChild(readStatusButton);

    libraryPage.appendChild(row);
  });
}

Book.prototype.toggleReadStatus = function() {
  this.read = !this.read;
}

// Hint: You will need to associate your
// DOM elements with the actual book objects
// in some way. One easy solution is giving
// them a data-attribute that corresponds
// to the index of the library array.

const philosophersStone = new Book("Harry Potter and the Philosopher's Stone",
                                   "J.K. Rowling",
                                   223,
                                   true);

const chamberOfSecrets = new Book("Harry Potter and the Chamber of Secrets",
                                  "J.K. Rowling",
                                  251,
                                  true);

myLibrary.push(philosophersStone, chamberOfSecrets);

render();
