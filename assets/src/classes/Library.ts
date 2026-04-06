import {Book} from './Book.js';
export class Library {
    #books : Book[] =[];

    constructor(initialBooks: Book[]=[]){
        this.#books = [...initialBooks];
    }

    // Define function addBook()
    addBook (book : Book) : void{
        this.#books.push(book);
    }

    //Define function removeBook()
    removeBook (title : string): void{
        this.#books = this.#books.filter(b => b.getTitle() !== title);
    }

    //Define function searchBook()
    searchBooks(keyword: string): Book[] {
        const lower = keyword.toLowerCase();
        return this.#books.filter(b =>
            b.getTitle().toLowerCase().includes(lower) ||
            b.getAuthor().toLowerCase().includes(lower)
        );
    }

    //Define function filterbycategory()
        filterByCategory(category: string): Book[] {
        return this.#books.filter(b => b.getCategory() === category);
    }

    //Define function toggleavailability()
    toggleAvailability(title: string): void {
        const book = this.#books.find(b => b.getTitle() === title);
        if (book) {
            book.setAvailability(!book.isBookAvailable());
        }
    }
}