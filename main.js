
//variables
const todo = document.querySelector('#todo');
const submitButton = document.querySelector('#submit');
const list = document.querySelector('.list');
const filterOption = document.querySelector('#option-filter');
const saveButton = document.querySelector('#save');
const loadButton = document.querySelector('#load');
const deleteButton = document.querySelector('#delete-stuff');
let objLoad = false;
let allItems = [];
let itemsInnerText = [];
let storageItems = [];

//event listeners
document.addEventListener('keyup',addTodo);
submitButton.addEventListener('click', addTodo);
list.addEventListener('click', deleteItem);
filterOption.addEventListener('click', filterItems);
saveButton.addEventListener('click', saveToStorage);
loadButton.addEventListener('click', retrieveFromStorage);
deleteButton.addEventListener('click', deleteStorage);
//functions
function addTodo () {
    if (todo.value) {
        if (event.target.classList[0] === 'submit' || event.keyCode === 13) {
        let listItem = document.createElement('li');
        listItem.classList.add('list-item');
        listItem.innerHTML = todo.value + '<div class="item-container"><button class="delete"><i class="fas fa-trash"></i></button><button class="completed"><i class="fas fa-check"></i></button></div>';
        list.appendChild(listItem);
            todo.value = ''; 
            allItems.push(listItem);
            itemsInnerText.push(listItem.innerText);
         
        }
    }
}
    
function deleteItem(event) {
    if (event.target.classList[0] === 'delete') {
        const item = event.target;
        const itemParent = item.parentElement.parentElement
        itemParent.classList.add('animate-delete');
        itemParent.addEventListener('animationend', function () {
            itemParent.remove();
        })
    }
    if (event.target.classList[0] === 'completed') {
        event.target.parentElement.parentElement.style.textDecoration = 'line-through';
        event.target.parentElement.parentElement.style.opacity = '.5';
        event.target.parentElement.parentElement.classList.add('is-completed') 
    }
}

function filterItems () {
    if (filterOption.value === 'all') {
        allItems.forEach(function(element) {
           element.style.display = 'flex';
        }) 
    }
    if (filterOption.value === 'completed') {
        allItems.forEach(function(element) {
            if (element.classList.contains('is-completed')) {
            element.style.display = 'flex';  
            } else {
                element.style.display = 'none';
            } 
        })    
    }
    if (filterOption.value === 'uncompleted') {
        allItems.forEach(function(element) {
            if (element.classList.contains('is-completed') !== true) {
            element.style.display = 'flex';  
            } else {
                element.style.display = 'none';
            } 
        })    
    }
}

function saveToStorage () {
    let str = JSON.stringify(itemsInnerText)
    localStorage.setItem('all items',str);
    objLoad = false;
}

function retrieveFromStorage() {
    let obj = JSON.parse(localStorage.getItem('all items'));
    
    console.log(obj);
    if (objLoad === false) {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
        obj.forEach(function (element) {
            let listItem = document.createElement('li');
            listItem.classList.add('list-item');
            listItem.innerHTML = element + '<div class="item-container"><button class="delete"><i class="fas fa-trash"></i></button><button class="completed"><i class="fas fa-check"></i></button></div>';
            list.appendChild(listItem);
            allItems.push(listItem);
            itemsInnerText.push(listItem.innerText);
             }) 
             
             objLoad = true;
             console.log(objLoad)
        } else {
            console.log('already loaded');
        }
};

function deleteStorage () {
    localStorage.removeItem('all items');
}

