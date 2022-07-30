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


function logout(){
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
    text: addTodoText.value,
}

function addTodos(){
    if(addTodoTitle.value === "" || addTodoText === ""){
        alerts.style.display = "block";
        msg = "Add titile and Description";
        alerts.innerHTML = msg;
    }
}