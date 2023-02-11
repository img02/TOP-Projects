const tableBody = document.getElementById('library-table-body');
const title = document.getElementById('add_book_title');
const author = document.getElementById('add_book_author');
const pages = document.getElementById('add_book_pages');
const read = document.getElementById('add_book_read');
const form = document.getElementById('form');


let myLibrary = [
    new Book('one', 'one author', 111, true),
    new Book('two', 'two author', 222, false),
    new Book('three', 'three author', 333, true)
];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read =  read
    this.info = function(){
      let result = `${title} by ${author}, ${pages} pages, `
      if (read) result += "has been read"
      else result += "not yet read"
      return result
    }
  }

function addBookToLibrary(book){
    myLibrary.push(book);
}

// forms table rows from current library
// to add to the html table
function displayBooks(){
    let tableData = ""
    for (let book of myLibrary) {        
        tableData += 
        `<tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.read}</td>
        </tr>`;
    }
    addToLibraryTable(tableData);
}

// adds table row data to the html table
function addToLibraryTable(tableData){
    tableBody.innerHTML = tableData;
}

function addNewBook(){
    if (title.value.length === 0 || author.value.length === 0 || pages.value.length === 0) {
        alert("Please add all book information.");
        return;
    }
    
    let book = new Book(title.value, author.value, pages.value, read.checked);
    addBookToLibrary(book);
}

function clearInputs(){    
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
}

let addButton = document.getElementById('add_book_button');

form.addEventListener("submit", (e)=> {
    e.preventDefault(); // stop form submit refreshing page
    addNewBook();
    displayBooks();
    clearInputs();
    });

displayBooks();
