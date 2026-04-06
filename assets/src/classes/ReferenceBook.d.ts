import { Book } from './Book.js';
export declare class ReferenceBook extends Book {
    #private;
    constructor(title: string, author: string, category: string, isAvailable: boolean, locationCode: string | number);
    getLocationCode(): string | number;
    displayInfo(): string;
}
//# sourceMappingURL=ReferenceBook.d.ts.map