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
    // document.getElementById("loader").style.visibility = "hidden";
    const Login_form = document.getElementById("login_form");
    const inputname= document.getElementById("username");
    const inputpassword= document.getElementById("password");

    Login_form.addEventListener('submit', function (e){
        e.preventDefault();

        localStorage.setItem("Username", inputname.value);
        localStorage.setItem("Password", inputpassword.value);
        const User = localStorage.getItem("Username");
        const Pass = localStorage.getItem("Password");


        const user1 = "adminpage"
        const pass1 = 12345;

        const user2 = "userpage"
        const pass2 = 54321;

        if (user1 == User && pass1 == Pass){
            switchtoAdmin();
        } else if (user2 == User && pass2 == Pass) {
            switchtoUser();
        } else {
            alert("Invalid Input");
        }
    } )   
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