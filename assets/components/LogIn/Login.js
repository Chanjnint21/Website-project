//--------------------------------------------------- hide/show password ---------------------------------------------
function visbility(){
    var Eye = document.getElementById("eye");
    Eye.addEventListener('click', show_hide()) 
    function show_hide(){
        var password = document.getElementById("password");
        if (password.type ==="password"){
            password.type ="text";
            document.getElementById("eye").innerHTML = "visibility";
        } else {
            password.type = "password";
            document.getElementById("eye").innerHTML = "visibility_off";
        }
}
}

//--------------------------------------------------- user/admin log in account ---------------------------------------------------


function LogIn(){
    const Login_form = document.getElementById("login_form");
    const inputname= document.getElementById("username").value;
    const inputpassword= document.getElementById("password").value;

    Login_form.addEventListener('submit', function (e){
        e.preventDefault();

        var logincard = document.getElementById("login-card");
        var loader = document.getElementById("load");
        const newUser = localStorage.getItem("new-email");
        const newPass = localStorage.getItem("new-pass");


        const user1 = "adminpage"
        const pass1 = 12345;

        const user2 = "userpage"
        const pass2 = 54321;

        if (user1 == inputname && pass1 == inputpassword){
            switchtoAdmin();
        } else if (user2 == inputname && pass2 == inputpassword) {
            switchtoUser();
        } else if(newUser == inputname && newPass == inputpassword){
            logincard.style.display = "none";
            loader.style.display = "block";
            timeout = setTimeout(switchpage, 5000);
        } else {
            document.getElementById("Invalid_inp").innerHTML= "*Invalid email or password*"
        }
    } )   
}

function switchpage(){
    var role = localStorage.getItem("new-role");
    if (role == "admin"){
        window.location.href = '../Admin-page/MainPage.html';
    }
}

function switchtoUser() {
    var logincard = document.getElementById("login-card");
    var loader = document.getElementById("load");
    logincard.style.display = "none";
    loader.style.display = "block";
    timeout = setTimeout(switchtoUser, 1000);
    if(timeout == 3){
            window.location.href = '../User-page/UserMainPage.html';
    }
  }

function switchtoAdmin() {
    var logincard = document.getElementById("login-card");
    var loader = document.getElementById("load");
    logincard.style.display = "none";
    loader.style.display = "block";
    timeout = setTimeout(switchtoAdmin, 1000);
    if(timeout == 3){
            window.location.href = '../Admin-page/MainPage.html';
    }
  }

