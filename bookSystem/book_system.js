//add book details in the management system
//// user input retrieval
//checks if all fields have been filled and the page number is a valid number
// if it's all ok, the function creates the a book object
// and then push it in the books array
//After adding the book, the showbooks() function is 
//called to update the display with the newly added book details
// If any field is empty or if pagesNumber is not a valid number, 
//an alert prompts the user to fill in all fields correctly.
//creates a book object containing properties such as name, 
//authorName, bookDescription, and pagesNumber, storing the user-entered data
//showbooks() function to show book details in the management system
    //The map() function iterates through the books array, creating a 
    //new array of HTML elements or strings based on 
    //the book information present in each array element.
// clearInputs function to clear the book details in the management system
let books = [];
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
    
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}