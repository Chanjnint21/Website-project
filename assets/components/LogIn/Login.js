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
                var logginguser = {
                    'Fname' : TotalUser[i].InpFname,
                    'Lname' : TotalUser[i].InpLname
                }
                localStorage.setItem("Login User", JSON.stringify(logginguser));
                var logincard = document.getElementById("login-card");
                var loader = document.getElementById("load");
                logincard.style.display = "none";
                loader.style.display = "block";
                timeout = setTimeout(switchtoAdmin, 2000);
                console.log("Login succeed");
            } else if(TotalUser[i].InpEmail == inputname && TotalUser[i].InpPassword == inputpassword && TotalUser[i].InpRole == "General User" ){
                var logginguser = {
                    'Fname' : TotalUser[i].InpFname,
                    'Lname' : TotalUser[i].InpLname
                }
                localStorage.setItem("Login User", JSON.stringify(logginguser));
                var logincard = document.getElementById("login-card");
                var loader = document.getElementById("load");
                logincard.style.display = "none";
                loader.style.display = "block";
                timeout = setTimeout(switchtoUser, 2000);
                console.log("Login succeed");
            } else if(inputname == "admintester@gmail.com" && inputpassword == "test1234"){
                var logginguser = {
                    'Fname' : "Tester",
                    'Lname' : "Admin"
                }
                localStorage.setItem("Login User", JSON.stringify(logginguser));
                var logincard = document.getElementById("login-card");
                var loader = document.getElementById("load");
                logincard.style.display = "none";
                loader.style.display = "block";
                timeout = setTimeout(switchtoAdmin, 2000);
            } else if(inputname == "usertester@gmail.com" && inputpassword == "test4321"){
                var logginguser = {
                    'Fname' : "Tester",
                    'Lname' : "User"
                }
                localStorage.setItem("Login User", JSON.stringify(logginguser));
                var logincard = document.getElementById("login-card");
                var loader = document.getElementById("load");
                logincard.style.display = "none";
                loader.style.display = "block";
                timeout = setTimeout(switchtoUser, 2000);
            }else {
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

