import { Library } from "./classes/Library.js";
import { Book } from "./classes/Book.js";
import { ReferenceBook } from "./classes/ReferenceBook.js";
const library = new Library();
library.addBook(new Book("It", "Stephan King", "Horror", false));
library.addBook(new Book("A Tyle Of Two Cities", "Charles Dickens ", "Historical", true));
library.addBook(new ReferenceBook("Treasure Land", "Robert Louis Stevenson", "Advanture", true, "A-12"));
library.addBook(new Book("Love In The Time Of Cholera", "Gabriel Garcia Marquez", "Romance", true));
library.addBook(new Book("Catching Fire", "Suzanne Collins", "Science Fiction", false));
library.addBook(new Book("Alice's Advantures In WonderLand", "Lewis Carroll", "Advanture", true));
library.addBook(new ReferenceBook("Atlas Shrugged", "Ayn Rand", "Science Fiction", true, "A-5"));
library.addBook(new ReferenceBook("War And Peace", "Leo Tolstoy", "Historical", false, "A-10"));
library.addBook(new ReferenceBook("Misery", "Stephan King", "Horror", true, "C-1"));
library.addBook(new ReferenceBook("Adam Bede", "George Eliot", "Romance", false, "B-2"));
const container = document.getElementById("booksContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const newTitle = document.getElementById("newTitle");
const newAuthor = document.getElementById("newAuthor");
const newCategory = document.getElementById("newCategory");
const newType = document.getElementById("newType");
const newLocation = document.getElementById("newLocation");
const addBtn = document.getElementById("addBtn");
newType.addEventListener("change", () => {
    newLocation.style.display = newType.value === "reference" ? "block" : "none";
});
addBtn.addEventListener("click", () => {
    if (!newTitle.value || !newAuthor.value || !newCategory.value)
        return;
    const book = newType.value === "reference"
        ? new ReferenceBook(newTitle.value, newAuthor.value, newCategory.value, false, newLocation.value)
        : new Book(newTitle.value, newAuthor.value, newCategory.value, true);
    library.addBook(book);
    renderBooks();
    newTitle.value = "";
    newAuthor.value = "";
    newCategory.value = "";
    newLocation.value = "";
});
function renderBooks() {
    container.innerHTML = "";
    let books = library.searchBooks(searchInput.value);
    if (categoryFilter.value !== "") {
        books = books.filter(b => b.getCategory() === categoryFilter.value);
    }
    books.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";
        card.innerHTML = ` <h3>${book.getTitle()}</h3>
            <p><strong>Authore:</strong> ${book.getAuthor()}</p>
            <p><strong>Category:</strong> ${book.getCategory()}</p>
            <p><strong>Availability:</strong> ${book.isBookAvailable() ? "Available" : "Not Available"}</p>
            ${book instanceof ReferenceBook ? `<p><strong>Location Code:</strong>${book.getLocationCode()}</p>` : ""}
            <button class="toggle">Change Availability</button>
            <button class="remove">Remove Book</button>`;
        card.querySelector(".toggle").addEventListener("click", () => {
            library.toggleAvailability(book.getTitle());
            renderBooks();
        });
        card.querySelector(".remove").addEventListener("click", () => {
            library.removeBook(book.getTitle());
            renderBooks();
        });
        container.appendChild(card);
    });
}
searchInput.addEventListener("input", renderBooks);
categoryFilter.addEventListener("change", renderBooks);
renderBooks();
//# sourceMappingURL=main.js.map