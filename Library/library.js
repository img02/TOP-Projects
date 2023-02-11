const tableBody = document.getElementById('library-table-body');
const title = document.getElementById('add_book_title');
const author = document.getElementById('add_book_author');
const pages = document.getElementById('add_book_pages');
const read = document.getElementById('add_book_read');
const form = document.getElementById('form');


let myLibrary = [
    new Book('The Hobbit', 'J. R. R. Tolkien', 310, true),
    new Book('The Fellowship of the Ring', 'J. R. R. Tolkien', 423, false),
    new Book('The Two Towers', 'J. R. R. Tolkien', 352, true),
    new Book('The Return of the King', 'J. R. R. Tolkien', 416, false)
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

// forms table rows from current library
// to add to the html table
function displayBooks(){
    let tableData = ""
    for (let book of myLibrary) {        
        tableData += 
        `<tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>`;

        let readStatus = "Read";
        if (!book.read) {
            readStatus = "Not Read";                        
        }
        //toggle read button
        tableData += `<td><button id="${book.title}_toggle_read">${readStatus}</button></td>`        

        //delete buttons
        tableData +=
        `<td>
            <button id="${book.title}_delete" value="${book.title}">Delete</button>
        </td>
        </tr>`;
    }    
    addToLibraryTable(tableData);
}


/*
   ADD BOOK FUNCTIONS
*/

function addBookToLibrary(book){
    myLibrary.push(book);
}

// adds table row data to the html table
// then hook delete buttons to delete function
function addToLibraryTable(tableData){
    tableBody.innerHTML = tableData;
    hookDeleteButtons();
    hookReadButtons();
}

function addNewBook(){
    if (title.value.length === 0 || author.value.length === 0 || pages.value.length === 0 || read.value.length === 0) {
        alert("Please add all book information.");
        return;
    }       
    let readStatus;
    if (read.value === "Read") { readStatus = true;}

    let book = new Book(title.value, author.value, pages.value, readStatus);
    addBookToLibrary(book);
}

function clearInputs(){    
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
}

/*
    DELETE BOOK FUNCTIONS
*/

function deleteBook(book){
    console.log(`deleting book: ${book.title}`);
    let deleteIndex = myLibrary.indexOf(book);
   
    /*
    // if deleting first book, just shift
    if (deleteIndex === 0) {
        myLibrary.shift();
        return;
    }
    // if deleting last book, just pop
    if (deleteIndex === myLibrary.length-1) {
        myLibrary.pop();
        return;
    }
    //otherwise, if removing from the middle somewhere,
    // split arrays and rejoin, excluding the book to be deleted
    let startArr = myLibrary.slice(0, deleteIndex);
    let endArr = myLibrary.slice(deleteIndex+1);
    myLibrary = Array.prototype.concat(startArr, endArr);
    */

    //cleaner looking with a switch statement
    switch (deleteIndex) {
        case 0 :
            myLibrary.shift();
            break;            
        case myLibrary.length-1 :
            myLibrary.pop();
            break;
        default:
            let startArr = myLibrary.slice(0, deleteIndex);
            let endArr = myLibrary.slice(deleteIndex+1);
            myLibrary = Array.prototype.concat(startArr, endArr);
    }
}

// add click even listeners for delete buttons
function hookDeleteButtons(){
    for (let book of myLibrary){
        // hook delete button click event
        let deleteButton = document.getElementById( `${book.title}_delete`);
        deleteButton.addEventListener("click", (e)=> {
            //remove book from lib and refresh library display
            deleteBook(book);
            displayBooks();
        })
    }
}

/*
    TOGGLE READ FUNCTION
*/
function hookReadButtons() {
    for (let book of myLibrary) {
        let readButton = document.getElementById(`${book.title}_toggle_read`);
        readButton.addEventListener("click", (e) =>{
            e.preventDefault(); // not needed?
            if (book.read) {
                book.read = false;
                readButton.innerHTML = "Not Read";
            }
            else {
                book.read = true;
                readButton.innerHTML = "Read";
            }
        });
    }
}

///

form.addEventListener("submit", (e)=> {
    e.preventDefault(); // stop form submit refreshing page
    addNewBook();
    displayBooks();
    clearInputs();
    });

displayBooks();
