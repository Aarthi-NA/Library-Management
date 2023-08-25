const book = {
    title: '',
    author: '',
    yearPublished: 0,
    readStatus: false,
    
    getSummary() {
    return `Title: ${this.title}, Author: ${this.author}, Year
    Published: ${this.yearPublished}`;
    },
    toggleReadStatus() {
    this.readStatus = !this.readStatus;
    }
    };
    
    // Library Array
    const library = [];
    
    //Methods
    function addBook(book) {
    
    library.push(book);
    }
    
    function removeLastBook() {
    return library.pop();
    }
    
    function addBookToFront(book) {
    library.unshift(book);
    }
    
    function removeFirstBook() {
    return library.shift();
    }
    
    // Additional Methods
    function getAllTitles() {
    return library.map(book => book.title);
    }
    
    function getBooksByAuthor(author) {
    return library.filter(book => book.author === author);
    }
    
    function getTotalBooksPublishedBefore(year) {
    return library.filter(book => book.yearPublished ==
    year).reduce((acc, curr) => acc + 1, 0);
    }
    
    function removeBookByTitle(title) {
    const index = library.findIndex(book => book.title === title);
    if (index !== -1) {
    library.splice(index, 1);
    }
    }
    
    function getBooksByReadStatus(status) {
    return library.filter(book => book.readStatus === status);
    }
    
    function getSubLibrary(start, end) {
    return library.slice(start, end);
    }
    
    // Bonus: User Interaction
    function promptUser(message) {
    return prompt(message);
    }
    
    function addBookManually() {
    const title = promptUser("Enter book title: ");
    const author = promptUser("Enter book author: ");
    const yearPublished = parseInt(promptUser("Enter book year published: "));
    const book = { title, author, yearPublished };
    addBook(book);
    }
    
    function removeBookManually() {
    const title = promptUser("Enter book title to remove: ");
    removeBookByTitle(title);
    }
    
    function searchBooksManually() {
    let query = prompt("Enter a keyword or phrase to search for: ");
    const filteredBooks = [];
    for (const book of library.books) {
    if (book.title.includes(query) || book.author.includes(query) ||
    book.getSummary.includes(query)) {
    filteredBooks.push(book);
    }
    }
    return filteredBooks;
    }
    
    console.log(library);
    addBook({ title: "The India Story", author: "Bimal Jalal",
    yearPublished: 2022 });
    addBook({ title: "Right Under Our Nose", author: "R. Giridharan",
    yearPublished: 2021 });
    addBook({ title: "The Thin Mind Map", author: "Dharmendra Rai",
    yearPublished: 2020 });
    console.log(library);
    console.log(getAllTitles());
    console.log(getBooksByAuthor("Bimal Jalal"));
    console.log(getTotalBooksPublishedBefore(2015));
    removeBookByTitle("Right Under Our Nose");
    console.log(library);
    
    searchBookManually();