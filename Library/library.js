const table = document.getElementById('library_table');

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
    table.innerHTML += tableData;
}



displayBooks();
