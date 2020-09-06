const todo = document.querySelector('#todo');
const submitButton = document.querySelector('#submit');
const list = document.querySelector('.list');

submitButton.addEventListener('click', addTodo);
list.addEventListener('click', deleteItem)

function addTodo () {
    console.log(todo.value)
    let listItem = document.createElement('li');
    listItem.innerHTML = todo.value + '<button class="delete">Delete</button><button class="completed">Complete</button>';
    list.appendChild(listItem);
    todo.value = '';
    
 
}
    
function deleteItem(event) {
    if (event.target.classList[0] === 'delete') {
        event.target.parentElement.remove();
    }
    if (event.target.classList[0] === 'completed') {
        event.target.parentElement.style.textDecoration = 'line-through';
        
    }
}



