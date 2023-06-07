const addInput = document.querySelector(".add-task");
const addButton = document.querySelector(".add-button");
const options = document.querySelector(".options");
const toDoList = document.querySelector(".list");

addButton.addEventListener("click",listEntries);

function listEntries (event){
event.preventDefault();
console.log("done");
const listEntryDiv = document.createElement("div");
listEntryDiv.classList.add("list-entryDiv");
const listEntry = document.createElement("li");
listEntry.innerText= addInput.value;
listEntry.classList.add("list-entry")
listEntryDiv.appendChild(listEntry);
console.log("done");
 
const doneButton = document.createElement("button");
doneButton.innerHTML = <i class="fa-solid fa-square-check"></i>
doneButton.className.add("doneBtn")

 const deleteButton = document.createElement("button");
 deleteButton.innerHTML = <i class="fa-solid fa-trash"></i>
 deleteButton.classList.add("deleteBtn");
 
}

