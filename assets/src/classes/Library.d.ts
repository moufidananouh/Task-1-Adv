import { Book } from './Book.js';
export declare class Library {
    #private;
    constructor(initialBooks?: Book[]);
    addBook(book: Book): void;
    removeBook(title: string): void;
    searchBooks(keyword: string): Book[];
    filterByCategory(category: string): Book[];
    toggleAvailability(title: string): void;
}
//# sourceMappingURL=Library.d.ts.map