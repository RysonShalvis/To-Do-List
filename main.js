const todo = document.querySelector('#todo');
const submitButton = document.querySelector('#submit');
const list = document.querySelector('.list');
document.addEventListener('keyup',addTodo);
submitButton.addEventListener('click', addTodo);
list.addEventListener('click', deleteItem)

function addTodo () {
    if (todo.value) {
        if (event.target.classList[0] === 'submit' || event.keyCode === 13) {
        let listItem = document.createElement('li');
        listItem.classList.add('list-item');
        listItem.innerHTML = todo.value + '<div class="item-container"><button class="delete"><i class="fas fa-trash"></i></button><button class="completed"><i class="fas fa-check"></i></button></div>';
        list.appendChild(listItem);
            todo.value = ''; 
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
    }
}
