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
            // document.getElementById("login-card").style.visibility = "hidden";  
            // myVar = setTimeout(showPage, 1500);
            // function showPage() {
            //     document.getElementById("loader").style.display = "visible";
            //   }
            window.location.href = '/Users/soramitsukh/Documents/Intern/Website-project/Admin-page/MainPage.html';
        } else if (user2 == User && pass2 == Pass) {
            window.location.href = '/Users/soramitsukh/Documents/Intern/Website-project/User-page/UserMainPage.html';
        } else {
            alert("Invalid Input");
        }
    } )   
}

// function LogIn() {
//     myVar = setTimeout(showPage, 1500);
//     window.location.href='User-page/UserMainPage.html';
//   }
  
//   function showPage() {
//     document.getElementById("loader").style.display = "none";
//     document.getElementById("myDiv").style.display = "block";
//   }