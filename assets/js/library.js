let myLibrary = []

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {

}

// loops through myLibrary and displays each book
// on the page
function render() {

}

Book.prototype.toggleReadStatus = function() {

}

// Hint: You will need to associate your
// DOM elements with the actual book objects
// in some way. One easy solution is giving
// them a data-attribute that corresponds
// to the index of the library array.
