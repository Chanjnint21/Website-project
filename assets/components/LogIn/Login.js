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
    var TotalUser = JSON.parse(localStorage.getItem("Total User"));
    Login_form.addEventListener('submit', function (e){
        e.preventDefault();
        for(i = 0; i < TotalUser.length; i++) {
            if(TotalUser[i].InpEmail == inputname && TotalUser[i].InpPassword == inputpassword && TotalUser[i].InpRole == "Admin" ){
                var logincard = document.getElementById("login-card");
                var loader = document.getElementById("load");
                logincard.style.display = "none";
                loader.style.display = "block";
                timeout = setTimeout(switchtoAdmin, 2000);
                console.log("Login succeed");
            } else if(TotalUser[i].InpEmail == inputname && TotalUser[i].InpPassword == inputpassword && TotalUser[i].InpRole == "General User" ){
                var logincard = document.getElementById("login-card");
                var loader = document.getElementById("load");
                logincard.style.display = "none";
                loader.style.display = "block";
                timeout = setTimeout(switchtoUser, 2000);
                console.log("Login succeed");
            } else {
                document.getElementById("Invalid_inp").innerHTML= "*Invalid email or password*";
                console.log("Login failed");
            }
        };
    } )   
}

function switchtoUser() {
    localStorage.setItem('fromButtonRedirect', 'yes');
    window.location.href = '../User-page/UserMainPage.html';
    ;
  }

function switchtoAdmin() {
    localStorage.setItem('fromButtonRedirect', 'yes');
    window.location.href = '../Admin-page/MainPage.html';
    
  }

