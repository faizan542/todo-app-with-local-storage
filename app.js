function ifUserExists() {
    if (localStorage.getItem('UserAccounts') == null) {
        window.location.replace('file:///D:/js%20applications/todo-app/authantication/signup/signup.html')
    }
    else if (localStorage.getItem('UserAccounts') != null && localStorage.getItem('loggedInUser') == null) {
        window.location.replace('file:///D:/js%20applications/todo-app/authantication/login/login.html')
    }
    else {
        window.location.replace('file:///D:/js%20applications/todo-app/todos/todo.html')
    }
}