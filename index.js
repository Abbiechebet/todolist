let textInput = document.querySelector("#text-input");
let addButton = document.querySelector("#add-button");
let todosContainer = document.querySelector(".todos-container");

let todoList = [];

addButton.addEventListener('click', () =>{ 
    if(textInput.value.trim().length == '')
    return;

//create li element and append it to the parent
    let todosItemContainer = document.createElement('li');
    todosContainer.appendChild(todosItemContainer);

//create p element and append it to the li
    let todosItem = document.createElement('p');
    todosItem.innerHTML = textInput.value;
    todosItemContainer.appendChild(todosItem);

//create edit button
    let editButton = document.createElement('button');
    editButton.id = 'edit-button';
    editButton.innerText = 'Edit';
    todosItemContainer.appendChild(editButton);
//add click event to edit button
    editButton.addEventListener('click', () =>{
        textInput.value = todosItem.innerText;
        let parent = editButton.parentElement;
        parent.parentElement.removeChild(parent);
    })

//create delete button
    let deleteButton = document.createElement('button');
    deleteButton.id = 'delete-button';
    deleteButton.innerText = 'Delete';
    todosItemContainer.appendChild(deleteButton);
//add click event to edit button
    deleteButton.addEventListener('click', () =>{
        let parent = deleteButton.parentElement;
        parent.parentElement.removeChild(parent);
    })

    textInput.value = "";
    });

    textInput = document.querySelector("#text-input");
    todosItem = document.querySelector("p");

    //todosItem.innerHTML = localStorage.getItem('value');
    textInput.addEventListener('keyup', display);

function display(){
    localStorage.setItem('value', textInput.value);
    todosItem.innerHTML = localStorage.getItem('value');
}