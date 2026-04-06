import { Book } from './Book.js';
export class ReferenceBook extends Book {
    #locationCode;
    constructor(title, author, category, isAvailable, locationCode) {
        super(title, author, category, isAvailable);
        this.#locationCode = locationCode;
    }
    getLocationCode() {
        return this.#locationCode;
    }
    displayInfo() {
        return `Book information  : Title : ${this.getTitle()} , Author : ${this.getAuthor()} , Category : ${this.getCategory()} , Available : ${this.isBookAvailable()}? "Yes" : "No" , LocationCode : ${this.getLocationCode()}`;
    }
}
//# sourceMappingURL=ReferenceBook.js.map