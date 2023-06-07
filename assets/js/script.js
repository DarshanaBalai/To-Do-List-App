const addInput = document.querySelector(".add-task");
const addButton = document.querySelector(".add-button");
const options = document.querySelector(".options");
const toDoList = document.querySelector(".list");

addButton.addEventListener("click",listEntries)

function listEntries (event){
event.preventDefault();
console.log("done");
let listEntryDiv = document.createElement("div");
listEntryDiv.classList.add("list-entryDiv");
let listEntry =document.createElement("li");
listEntry.innerText= addInput.value;
listEntry.classList.add("list-entry")
listEntryDiv.appendChild(listEntry);
console.log("done");
 
let doneButton = document.createElement("button");
doneButton.innerHTML = <i class="fa-solid fa-square-check"></i>
doneButton.className.add("doneBtn")
}

