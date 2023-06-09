console.log("hello");

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
 
const editButton = document.createElement("button");
editButton.innerHTML= '<i class="fa-solid fa-pen-to-square"></i>';
editButton.classList.add("editBtn");
listEntryDiv.appendChild(editButton)

const doneButton = document.createElement("button");
 doneButton.innerHTML =  '<i class="fas fa-check-circle"></i>';
doneButton.classList.add("doneBtn");
listEntryDiv.appendChild(doneButton)

 const deleteButton = document.createElement("button");
deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
 deleteButton.classList.add("deleteBtn");
 listEntryDiv.appendChild(deleteButton)

 toDoList.appendChild(listEntryDiv);
 addInput.value = "";


editButton.addEventListener("click", handleEdit);

function handleEdit (event){
    if(editButton.innerHTML == '<i class="fa-solid fa-pen-to-square"></i>'){
        editButton.removeAttribute("readonly");

        editButton.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
      
        editButton.focus();
    }else{
        editButton.innerHTML ='<i class="fa-solid fa-bookmark"></i>';
        editButton.setAttribute("readonly", "readonly");
			
    }
}
    deleteButton.addEventListener('click' , handleDelete);

    function handleDelete (event){
        toDoList.removeChild(listEntryDiv);
      
    }

    doneButton.addEventListener('click', handleDone)

    function handleDone (event) {
        console.log('complete')
        listEntryDiv.style.textDecoration = "line-through";
       
    }
}