function ifUserExists() {
    if (localStorage.getItem('UserAccounts') == null) {
        window.location.replace('./authantication/signup/signup.html')
    }
    else if (localStorage.getItem('UserAccounts') !== null && localStorage.getItem('loggedInUser') === null) {
        window.location.replace('./authantication/login/login.html')
    }
    else {
        window.location.replace('./todos/todo.html')
    }
};