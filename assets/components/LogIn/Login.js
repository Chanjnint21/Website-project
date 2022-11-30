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

        const newUser = localStorage.getItem("new-email");
        const newPass = localStorage.getItem("new-pass");
        const role = localStorage.getItem("new-role");

        const user1 = "adminpage"
        const pass1 = 12345;

        const user2 = "userpage"
        const pass2 = 54321;

        if (user1 == inputname && pass1 == inputpassword){
            var logincard = document.getElementById("login-card");
            var loader = document.getElementById("load");
            logincard.style.display = "none";
            loader.style.display = "block";
            timeout = setTimeout(switchtoAdmin, 3000);
            // switchtoAdmin();
        } else if (user2 == inputname && pass2 == inputpassword) {
            var logincard = document.getElementById("login-card");
            var loader = document.getElementById("load");
            logincard.style.display = "none";
            loader.style.display = "block";
            timeout = setTimeout(switchtoUser, 3000);
            // switchtoUser();
        } else if(newUser == inputname && newPass == inputpassword){
            if(role == "Admin"){
                var logincard = document.getElementById("login-card");
                var loader = document.getElementById("load");
                logincard.style.display = "none";
                loader.style.display = "block";
                timeout = setTimeout(switchtoAdmin, 2000);
            } else {
                var logincard = document.getElementById("login-card");
                var loader = document.getElementById("load");
                logincard.style.display = "none";
                loader.style.display = "block";
                timeout = setTimeout(switchtoUser, 2000);
            }
        } else {
            document.getElementById("Invalid_inp").innerHTML= "*Invalid email or password*";
        }
    } )   
}

function switchtoUser() {
    window.location.href = '../User-page/UserMainPage.html';
  }

function switchtoAdmin() {
    window.location.href = '../Admin-page/MainPage.html';
  }

