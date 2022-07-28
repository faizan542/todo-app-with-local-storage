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