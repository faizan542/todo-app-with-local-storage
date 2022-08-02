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
    window.location.replace('../authantication/login/login.html');
}


var addBtn = document.getElementById('add-btn');
var addTodoTitle = document.getElementById('todo_title');
var addTodoText = document.getElementById('todo_text');
var alerts = document.getElementById('alert');
var msg = "";

var todoArray = [];

function addTodos() {
    if (addTodoTitle.value === "" || addTodoText.value === "") {

        alerts.style.display = "block";
        msg = "Add title and Description";
        alerts.innerHTML = msg;
        return;
    }
    else {
        todoArray.push({ title: addTodoTitle.value, text: addTodoText.value })
        alerts.style.display = "none"
        getInfo.todos = todoArray;
        localStorage.setItem('UserAccounts', JSON.stringify(userAccounts));
        showTodos();
    }
    addTodoTitle.value = "";
    addTodoText.value = "";
}

//---------------------- showTodos function--------------------------------

function showTodos() {
    var todos = getInfo.todos;
    todoArray = todos;
    if (!todoArray) {
        todoArray = [];
    }

    var todosDiv = "";

    todoArray.forEach(function (element, index) {
        todosDiv += `
        <div id="todo" class="py-3 my-3 container">
                <p class="todo-counter">${index + 1}</p>
                <p class="todo-title">${element.title}</p>
                <p class="todo-text">${element.text}</p>
                <button id="${index}" onclick="deleteTodo(this.id)" class="btn btn-danger">Delete</button>
                <button  onclick="openEditModal(this)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal_form" >Edit</button>
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

// ----------------------------Deleting Todo Function-----------------------------------
function deleteTodo(index) {
    getInfo.todos = todoArray;
    todoArray.splice(index, 1);
    localStorage.setItem('UserAccounts', JSON.stringify(userAccounts));
    showTodos()
}

// =========================Edit Todo Function------------------------------------------

var editTodoTitle = document.getElementById('edit_title');
var editTodoText = document.getElementById('edit_text');
let currentIndex;
let myVal;
let mySecVal;
function openEditModal(e) {
    for (var i = 0; i < todoArray.length; i++) {
        if (todoArray[i].title === e.parentNode.childNodes[3].innerHTML || todoArray[i].text === e.parentNode.childNodes[5].innerHTML ) {
            editTodoTitle.value = todoArray[i].title;
            editTodoText.value = todoArray[i].text;
            currentIndex = i;
            myVal = e;
            mySecVal = e;
            // console.log( e.parentNode.childNodes[5])
        }
    }
};

function editMyTodo() {
    todoArray.splice(currentIndex, 1, { title: editTodoTitle.value, text: editTodoText.value });
    getInfo.todos = todoArray;
    myVal.parentNode.childNodes[3].innerHTML = editTodoTitle.value;
    mySecVal.parentNode.childNodes[5].innerHTML = editTodoText.value;
    localStorage.setItem('UserAccounts', JSON.stringify(userAccounts));
};