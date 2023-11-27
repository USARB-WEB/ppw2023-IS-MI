let todoList = []

document.addEventListener('DOMContentLoaded', function () {
    getTodoFromLocalStorage();
    displayTodos();

    document.getElementById('todo-add-button').addEventListener('click', function () {  
        addTodo();
        displayTodos();
    })
})

function getTodoFromLocalStorage() {
    const todoListString = localStorage.getItem('todoList');
    todoList = JSON.parse(todoListString) || [];
}

function saveTodoToLocalStorage() {
    const todoListString = JSON.stringify(todoList);
    localStorage.setItem('todoList', todoListString);
}

function addTodo() {
    todoList.push({
        id: todoList.length + 1,
        text: document.getElementById('todo-add-input').value,
        completed: false
    });
    saveTodoToLocalStorage();
}

function displayTodos(){
    const todoListContainer = document.getElementById('todo-list-container');   
    todoListContainer.innerHTML = '';

    for (const todo of todoList) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        const todoCheckbox = document.createElement('input');
        todoCheckbox.type = 'checkbox';
        todoCheckbox.classList.add('todo-checkbox');
        todoItem.appendChild(todoCheckbox);

        const todoText = document.createElement('span');
        todoText.classList.add('todo-text');
        todoText.innerText = todo.text;
        todoItem.appendChild(todoText);

        const todoDeleteButton = document.createElement('button');
        todoDeleteButton.classList.add('todo-delete');
        todoDeleteButton.innerText = 'Delete';
        todoDeleteButton.addEventListener('click', function () {
            todoList = todoList.filter(function (todoItem) {
                return todoItem.id !== todo.id;
            });
            saveTodoToLocalStorage();
            displayTodos();
        })
        todoItem.appendChild(todoDeleteButton);

        todoListContainer.appendChild(todoItem);
    }
}