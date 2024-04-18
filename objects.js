// Can you write functions that allow you to:

// Search by book name.
// Display the total number of books onloan/not on loan
// Alter a book’s status (onloan/not on loan)
// Add a new book to the library
// Remove a book from the library 


const library = [ 
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        isLoaned: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        isLoaned: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        isLoaned: false
    }];


function loanStatus(library) {

  for (let i = 0; i < library.length; i++) 
     {
      let book = `'${library[i].title}' by '${library[i].author}'.`;
      if (library[i].isLoaned) {
        console.log('Out on loan: ' + book);
      } else
      {
       console.log('On the shelf: ' + book);
      }
  }

}

function searchByTitle(bookName) {
    const booksByTitle = [];
    for (let i = 0; i < library.length; i++) {
        if (library[i].title === bookName) {
            let bookStatus = library[i].isLoaned ? 'Out on Loan' : 'On the Shelf';
            booksByTitle.push(`${library[i].title} - ${bookStatus}`);
        }
    }
    return booksByTitle;
}


function totalBooksOnLoan() {
    let totalLoanedBooks = 0;
    let totalAvailableBooks = 0;
    for (let i = 0; i < library.length; i++) {
         library[i].isLoaned ? totalLoanedBooks++ : totalAvailableBooks++;     
    }    
    return `Books on loan: ${totalLoanedBooks}\nBooks available to loan: ${totalAvailableBooks}`; 
}       

//console.log(searchByTitle("Steve Jobs"));
console.log(totalBooksOnLoan());

// loanStatus(library);