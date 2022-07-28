var userAccount = [];
var getUser = JSON.parse(localStorage.getItem('UserAccounts'));
userAccount = getUser;

function login() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var alert = document.getElementById('alert');
    var msg = "";
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value === "") {
        alert.style.display = "block";
        msg = "Please enter your email";
        alert.innerHTML = msg;
        return;
    }
    else if (!(email.value.match(emailPattern))) {
        alert.style.display = "block";
        msg = "Please enter your valid email";
        alert.innerHTML = msg;
        return;
    }
    if (password.value === "") {
        alert.style.display = "block";
        msg = "Please enter your password";
        alert.innerHTML = msg;
        return;
    }
    else {
        var emailMatch = false;
        var passwordMatch = false;

        for (var i = 0; i < userAccount.length; i++) {
            if (email.value === userAccount[i].email) {
                emailMatch = true

                if (password.value === userAccount[i].password) {
                    passwordMatch = true
                    localStorage.setItem('loggedInUser', JSON.stringify({ "email": email.value, "password": password.value }))
                    console.log("matched")

                    window.location.replace('file:///D:/js%20applications/todo-app/todos/todo.html');
                }

            }
        }

        if (emailMatch === false) {
            alert.style.display = "block";
            msg = "User not Found";
            alert.innerHTML = msg;
            console.log('User not found');
            return;
        }
        if (passwordMatch === false) {
            alert.style.display = "block";
            msg = "Invalid password";
            alert.innerHTML = msg;
            console.log('Invalid Password');
            return;
        }
    }
}