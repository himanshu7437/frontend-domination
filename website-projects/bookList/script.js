const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const submit = document.getElementById("submit");
const bookList = document.getElementById("book-list");

let data = []

submit.addEventListener("click", () =>{
    let titleInput = title.value.trim();
    let authorInput = author.value.trim();
    let isbnInput = isbn.value.trim();

    if(titleInput === "" || authorInput === "" || isbnInput === "") {
        alert("Enter all fields");
        return;
    }

    const book = {
        title: titleInput,
        author: authorInput,
        isbn: isbnInput
    }

    if(data.some(book => book.isbn ===isbnInput)) {
        alert("Book with this ISBN already exists!")
        return;
    }

    data.push(book);
    saveToLocalStorage();
    addBookToTable(book);

    //clear input
    title.value = ""
    author.value = ""
    isbn.value = ""

    title.focus();
})

function addBookToTable(book) {
    const newRow = document.createElement("tr");

    //create columns(cells)
    const titleCol = document.createElement("td");
    titleCol.textContent = book.title;

    const authorCol = document.createElement("td");
    authorCol.textContent = book.author;

    const isbnCol = document.createElement("td");
    isbnCol.textContent = book.isbn;

    //delete button 
    const deleteCol = document.createElement("td");
    const deleteBtn = document.createElement("button")

    deleteBtn.innerHTML = "&#10006;";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.style.cursor = "pointer";
    deleteBtn.addEventListener("click", () => {
    if (confirm(`Delete "${book.title}"?`)) {
        newRow.remove();
        data = data.filter((b) => b.isbn !== book.isbn);
        saveToLocalStorage();
        }
    });

    deleteCol.appendChild(deleteBtn);

    //append all columns to row
    newRow.appendChild(titleCol);
    newRow.appendChild(authorCol);
    newRow.appendChild(isbnCol);
    newRow.appendChild(deleteCol);

    //append to tbody
    bookList.appendChild(newRow);
}

function saveToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(data));
}

window.addEventListener("DOMContentLoaded", () => {
  const saved = JSON.parse(localStorage.getItem("books")) || [];
  data = saved;
  data.forEach(addBookToTable);
});