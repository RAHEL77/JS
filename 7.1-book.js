const book = {
    bookName: "js learning",
    autor: "Pini",
    price: 780,
    language: "english",
    publishdate: 2020
}
console.log(theBook(book));

function theBook(book) {
    return `The book ${book.bookName} was written by ${book.autor} in the year ${book.publishdate}`;
}