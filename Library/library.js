let myLibrary = [];

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


