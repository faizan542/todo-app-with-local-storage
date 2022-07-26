var userAccounts = [];

var signup = function () {
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
    }
}