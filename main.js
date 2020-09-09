
//variables
const todo = document.querySelector('#todo');
const submitButton = document.querySelector('#submit');
const list = document.querySelector('.list');
const filterOption = document.querySelector('#option-filter');
let items = [];

//event listeners
document.addEventListener('keyup',addTodo);
submitButton.addEventListener('click', addTodo);
list.addEventListener('click', deleteItem);
filterOption.addEventListener('click', filterItems)

//functions
function addTodo () {
    if (todo.value) {
        if (event.target.classList[0] === 'submit' || event.keyCode === 13) {
        let listItem = document.createElement('li');
        listItem.classList.add('list-item');
        listItem.innerHTML = todo.value + '<div class="item-container"><button class="delete"><i class="fas fa-trash"></i></button><button class="completed"><i class="fas fa-check"></i></button></div>';
        list.appendChild(listItem);
            todo.value = ''; 
            items.push(listItem);
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
        items.forEach(function(element) {
           element.style.display = 'flex';
        }) 
    }
    if (filterOption.value === 'completed') {
        items.forEach(function(element) {
            if (element.classList.contains('is-completed')) {
            element.style.display = 'flex';  
            } else {
                element.style.display = 'none';
            } 
        })    
    }
    if (filterOption.value === 'uncompleted') {
        items.forEach(function(element) {
            if (element.classList.contains('is-completed') !== true) {
            element.style.display = 'flex';  
            } else {
                element.style.display = 'none';
            } 
        })    
    }
}

