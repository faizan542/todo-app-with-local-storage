var userAccounts = [];

function signup() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var alert = document.getElementById('alert');
    var msg = "";

    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");

    if (name.value === "") {
        alert.style.display = "block"
        msg = "Please enter your name";
        alert.innerHTML = msg;
        console.log("Please enter your name")
        return;
    }
    else if (name.value.length < 3) {
        alert.style.display = "block"
        msg = "Your name is too short";
        alert.innerHTML = msg;
        console.log("Your name is too short")
        return;
    }
    if (email.value === "") {
        alert.style.display = "block"
        msg = "Please enter your email";
        alert.innerHTML = msg;
        console.log("Please enter your email")
        return;

    }
    else if (!(email.value.match(emailPattern))) {
        alert.style.display = "block"
        msg = "Please enter your valid email";
        alert.innerHTML = msg;
        console.log("Please enter your valid email")
        return;

    }
    if (password.value === "") {
        alert.style.display = "block"
        msg = "Please enter your password";
        alert.innerHTML = msg;
        console.log("Please enter your passwoed")
        return;
    }
    else if (password.value.length < 8) {
        alert.style.display = "block"
        msg = "Your password must be at least 8 characters";
        alert.innerHTML = msg;
        console.log("Your password must be at least 8 characters")
        return;
    }
    else if (password.value.length > 25) {
        alert.style.display = "block"
        msg = "Your password must be at max 25 characters";
        alert.innerHTML = msg;
        console.log("Your password must be at max 25 characters")
        return;
    }
    else if (!(password.value.match(passwordPattern))) {
        alert.style.display = "block"
        msg = "Your password should contain at least one uppercase character, one lowercase character and one digit";
        alert.innerHTML = msg;
        console.log("Your password should contain at least one uppercase character, one lowercase character and one digit")
        return;
    }
    else {
        var emailMatch = false;
        for (var i = 0; i < userAccounts.length; i++) {
            if (email.value === userAccounts[i].email) {
                alert.style.display = "block"
                msg = "The email address is already in use by another account";
                alert.innerHTML = msg;
                console.log("The email address is already in use by another account");
                emailMatch = true;
                return;
            }
            
        }
        if(emailMatch === false){
            userAccounts.push({ "name": name.value, "email": email.value, "password": password.value });
            setItems();
            window.location.replace('file:///D:/js%20applications/todo-app/authantication/login/login.html');
            return;
        }
        alert.style.display = "none";
        name.value = "";
        email.value = "";
        password.value = "";
    }
};

function setItems() {
    localStorage.setItem('UserAccounts', JSON.stringify(userAccounts));
}


function getItem() {
    var getUserAccounts = JSON.parse(localStorage.getItem('UserAccounts'));
    userAccounts = getUserAccounts;
    if (!userAccounts) {
        userAccounts = [];
    }
}
getItem();