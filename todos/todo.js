var getUser = JSON.parse(localStorage.getItem('UserAccounts'));
var getLoggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

var userAccounts = getUser;
var loggedInUser = getLoggedInUser;

var getInfo = "";

for (var i = 0; i < userAccounts.length; i++) {
    if (userAccounts[i].email === loggedInUser.email && userAccounts[i].password === loggedInUser.password) {
        getInfo = userAccounts[i]
    }
}
var userInfo = document.getElementById('userInfo');
userInfo.innerHTML = getInfo.name;


function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.replace('file:///D:/js%20applications/todo-app/authantication/login/login.html');
}


var addBtn = document.getElementById('add-btn');
var addTodoTitle = document.getElementById('todo-title');
var addTodoText = document.getElementById('todo-text');
var alerts = document.getElementById('alert');
var msg = "";

var todoArray = [];
var todoObj = {
    title: addTodoTitle.value,
    text: addTodoText.value
};

function addTodos() {
    if (addTodoTitle.value === "" || addTodoText === "") {
        alerts.style.display = "block";
        msg = "Add title and Description";
        alerts.innerHTML = msg;
    }
    else {
        getInfo.todos = todoArray;
        todoArray.push(todoObj);
        localStorage.setItem('todos', JSON.stringify(todoArray));
        showTodos();
    }

    var todos = localStorage.getItem('todos');
    if (todos === null) {
        todoArray = [];
    }
    else {
        todoArray = JSON.parse(todos);
    }
    addTodoTitle.value = "";
    addTodoText.value = "";
}

//---------------------- showTodos function--------------------------------

function showTodos() {
    var todos = localStorage.getItem('todos');
    if (todos === null) {
        todoArray = [];
    }
    else {
        todoArray = JSON.parse(todos);
    }

    var todosDiv = "";
    todoArray.forEach(function (element, index) {
        todosDiv += `
        <div id="todo">
                <p class="todo-counter">${index + 1}</p>
                <p class="todo-title fw-bold fst-italic">${element.title}</p>
                <p class="todo-text fw-semibold">${element.text}</p>
                <button id="${index}" onclick="deleteTodo(this.id)" class="btn btn-danger">Delete</button>
                <button id="${index}" onclick="editTodo(this.id)" class="btn btn-primary">Edit</button>
            </div>
        </div>
        `;
    });

    var todoElement = document.getElementById('todos');
    if (todoArray.length != 0) {
        todoElement.innerHTML = todosDiv;
    }
    else {
        todoElement.innerHTML = "No todos available! Add a todo using the form above";
    }
}
showTodos()