const todo = document.querySelector('#todo');
const submitButton = document.querySelector('#submit');
const list = document.querySelector('.list');

submitButton.addEventListener('click', addTodo);
list.addEventListener('click', deleteItem)

function addTodo () {
    if (todo.value) {
        let listItem = document.createElement('li');
        listItem.classList.add('list-item');
        listItem.innerHTML = todo.value + '<div class="item-container"><button class="delete"><i class="fas fa-trash"></i></button><button class="completed"><i class="fas fa-check"></i></button></div>';
        list.appendChild(listItem);
        todo.value = ''; 
    }
    
 
}
    
function deleteItem(event) {
    if (event.target.classList[0] === 'delete') {
        event.target.parentElement.parentElement.remove();
    }
    if (event.target.classList[0] === 'completed') {
        event.target.parentElement.parentElement.style.textDecoration = 'line-through';
        
    }
}



