export class Library {
    #books = [];
    constructor(initialBooks = []) {
        this.#books = [...initialBooks];
    }
    // Define function addBook()
    addBook(book) {
        this.#books.push(book);
    }
    //Define function removeBook()
    removeBook(title) {
        this.#books = this.#books.filter(b => b.getTitle() !== title);
    }
    //Define function searchBook()
    searchBooks(keyword) {
        const lower = keyword.toLowerCase();
        return this.#books.filter(b => b.getTitle().toLowerCase().includes(lower) ||
            b.getAuthor().toLowerCase().includes(lower));
    }
    //Define function filterbycategory()
    filterByCategory(category) {
        return this.#books.filter(b => b.getCategory() === category);
    }
    //Define function toggleavailability()
    toggleAvailability(title) {
        const book = this.#books.find(b => b.getTitle() === title);
        if (book) {
            book.setAvailability(!book.isBookAvailable());
        }
    }
}
//# sourceMappingURL=Library.js.map