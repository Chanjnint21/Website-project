(function() {
    document.getElementById("sidebarCollapse").addEventListener('click', (x) => {
        document.getElementById("sidebar").classList.toggle("active");
        document.getElementById("body").classList.toggle("active");
    });
})();
//----------------------------------------------------- button in (details) request page ---------------------------------------------

    document.getElementById("Reject").addEventListener("click", Rbtn)
    function Rbtn(){
        var btn = document.getElementById("demo1");
        btn.value="Reject"
        btn.style.color="red";
        document.getElementById("demo1").innerHTML= "Reject";
    }
    document.getElementById("Approve").addEventListener("click", Abtn)
    function Abtn(){
        var btn = document.getElementById("demo1");
        btn.value="Approve"
        btn.style.color="green";
        document.getElementById("demo1").innerHTML= "Approve";
    }


// function btn1(){
//     var btn = document.getElementById("demo1");
//     btn.value="Approve"
//     btn.style.color="green";
//     document.getElementById("demo1").innerHTML= "Approve";
// }

function btn2(){
    var btn = document.getElementById("demo2");
    btn.value="Approve"
    btn.style.color="green";
    document.getElementById("demo2").innerHTML= "Approve";
    // }
}

function btn3(){
    var btn = document.getElementById("demo3");
    btn.value="Approve"
    btn.style.color="green";
    document.getElementById("demo3").innerHTML= "Approve";
    //     document.getElementsByTagName("tr")[3].remove();
}
//----------------------------------------------------- button in request page ---------------------------------------------
function status1(){
    var elem = document.getElementById("demo1");
    if (elem.value=="Reject"){
        elem.value = "Approve";
        elem.style.color='green';
        document.getElementById("demo1").innerHTML= "Approve";
    } 
    else {
        elem.value = "Reject";
        elem.style.color='red';
        document.getElementById("demo1").innerHTML= "Reject";
    }
}

function status2(){
    var elem = document.getElementById("demo2");
    if (elem.value=="Reject"){
        elem.value = "Approve";
        elem.style.color='green';
        document.getElementById("demo2").innerHTML= "Approve";
    } 
    else {
        elem.value = "Reject";
        elem.style.color='red';
        document.getElementById("demo2").innerHTML= "Reject";
    }
}

function status3(){
    var elem = document.getElementById("demo3");
    if (elem.value=="Reject"){
        elem.value = "Approve";
        elem.style.color='green';
        document.getElementById("demo3").innerHTML= "Approve";
    } 
    else {
        elem.value = "Reject";
        elem.style.color='red';
        document.getElementById("demo3").innerHTML= "Reject";
    }
}



var tbl = document.getElementById('x');
if(tbl.rows.length==0){
    document.getElementById("text").innerHTML = 'No Request';
}


//----------------------------------------------------- date count ---------------------------------------------

function countdays () {
    var dateend = new Date (document.getElementById("leave_date").value);
    var datestart = new Date (document.getElementById("back_date").value);
    var counttime =  datestart.getTime()- dateend.getTime();
    var countdays = counttime / (1000 * 3600 * 24);
    document.getElementById("noOfDays").setAttribute("value", isNaN(countdays) ? '' : countdays);
    document.getElementById("noOfDays").innerHTML = countdays + "days";
  }

//--------------------------------------------------- comfirm modal ---------------------------------------------
function del(){
    document.getElementsByTagName("tr")[3].remove();
}

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

//--------------------------------------------------- store form input into local storage ---------------------------------------------
function movepage(){
    const Paperform = document.getElementById("paperform");
    var inputFname= document.getElementById("firstname");
    var inputLname= document.getElementById("lastname");
    var inputPhone= document.getElementById("phone");
    var inputEmail= document.getElementById("email");
    var inputLeaveDate= document.getElementById("leave_date");
    var inputBackDate= document.getElementById("back_date");
    var inputTotalleave= document.getElementById("noOfDays");
    var inputReason= document.getElementById("reason");

    Paperform.addEventListener('submit', function(e){
        e.preventDefault();
        
        localStorage.setItem("firstname", inputFname.value);
        localStorage.setItem("lastname", inputLname.value);
        localStorage.setItem("phone", inputPhone.value);
        localStorage.setItem("email", inputEmail.value);
        localStorage.setItem("From", inputLeaveDate.value);
        localStorage.setItem("To", inputBackDate.value);
        localStorage.setItem("Total Leave", inputTotalleave.value);
        localStorage.setItem("reason", inputReason.value);
        
        window.location.href = "Inbox.html";
    })
}
