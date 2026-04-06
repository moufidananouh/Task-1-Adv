export class Book {
    #title : string;
    #author : string;
    #category : string;
    #isAvailable : boolean;
    constructor (title : string , author : string , category : string , isAvailable : boolean){
        this.#title = title;
        this.#author = author;
        this.#category = category;
        this.#isAvailable = isAvailable;
    }

    getTitle() : string {
        return this.#title;
    }

    getAuthor() : string {
        return this.#author;
    }

    getCategory() : string {
        return this.#category;
    }

    isBookAvailable() : boolean {
        return this.#isAvailable;
    }

    setAvailability(status : boolean){
        this.#isAvailable = status;
    }

    displayInfo() : string {
        return ' Book information  : Title : ${this.#title} , Author : ${this.#author} , Category : ${this.#category} , Available : ${this.#isAvailable}? "Yes" : "No" '
    }


}