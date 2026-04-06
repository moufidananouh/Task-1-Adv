export class Book {
    #title;
    #author;
    #category;
    #isAvailable;
    constructor(title, author, category, isAvailable) {
        this.#title = title;
        this.#author = author;
        this.#category = category;
        this.#isAvailable = isAvailable;
    }
    getTitle() {
        return this.#title;
    }
    getAuthor() {
        return this.#author;
    }
    getCategory() {
        return this.#category;
    }
    isBookAvailable() {
        return this.#isAvailable;
    }
    setAvailability(status) {
        this.#isAvailable = status;
    }
    displayInfo() {
        return ' Book information  : Title : ${this.#title} , Author : ${this.#author} , Category : ${this.#category} , Available : ${this.#isAvailable}? "Yes" : "No" ';
    }
}
//# sourceMappingURL=Book.js.map