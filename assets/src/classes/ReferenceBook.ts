import {Book} from './Book.js';
export class ReferenceBook extends Book{
    #locationCode : string | number;
    constructor (title : string , author : string , category : string , isAvailable : boolean , locationCode : string | number){
        super (title , author , category , isAvailable);
        this.#locationCode = locationCode;
    }
    getLocationCode() : string | number{
        return this.#locationCode;
    }

    displayInfo() : string {
        return `Book information  : Title : ${this.getTitle()} , Author : ${this.getAuthor()} , Category : ${this.getCategory()} , Available : ${this.isBookAvailable()}? "Yes" : "No" , LocationCode : ${this.getLocationCode()}`
    }
}