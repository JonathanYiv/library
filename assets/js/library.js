let myLibrary = []
const libraryPage = document.querySelector("#library");

const addButton = document.querySelector("#add");
addButton.addEventListener("click", addBookToLibrary);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  const newBook = new Book(title, author, pages, false);
  myLibrary.push(newBook);
  render();
  document.getElementById('title').value = "";
  document.getElementById('author').value = "";
  document.getElementById('pages').value = "";
}

function removeBookFromLibrary() {

}

function render() {
  const tableBody = document.querySelector('#book-list');
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  myLibrary.forEach((book, index) => {
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

    readStatusButton.dataset.bookNumber = index;
    readStatusButton.addEventListener("click", book.toggleReadStatus);

    tableBody.appendChild(row);
  });
}

Book.prototype.toggleReadStatus = function() {
  console.log(this.dataset.bookNumber);
  myLibrary[this.dataset.bookNumber].read = !myLibrary[this.dataset.bookNumber].read;
  render();
}

// Example Books
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
