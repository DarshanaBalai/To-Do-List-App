const addInput = document.querySelector(".add-task");
const addButton = document.querySelector(".add-button");
const options = document.querySelector(".options");
const toDoList = document.querySelector(".list");

addButton.addEventListener('submit', listEntries)

function listEntries (event){
event.preventDefault();

let listEntryDiv = document.createElement("div");
listEntryDiv.classList.add("listEntryDiv");
let listEntry =document.createElement("li");
listEntry.innerHTML= addInput.value;
listEntry.classList.add("listEntry")
listEntryDiv.appendChild(listEntry);

}