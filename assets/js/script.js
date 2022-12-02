(function() {
    var menu_icon = document.getElementById("sidebarCollapse");
    var sidebar =document.getElementById("sidebar");
    
    menu_icon.addEventListener('click', (x) => {
        sidebar.classList.toggle("active");

        if(sidebar.classList.contains('active')) {
            document.getElementById("sidebarCollapse").innerHTML="menu_open";
        } else {
            document.getElementById("sidebarCollapse").innerHTML="menu";
        }
        document.getElementById("section").classList.toggle("active");
        document.getElementById("afterCollape").classList.toggle("after-collape");
        document.getElementById("beforeCollape").classList.toggle("before-collape");
        document.getElementById("dashboardText").classList.toggle("after-collape");
        document.getElementById("permissionText").classList.toggle("after-collape");
        document.getElementById("inboxText").classList.toggle("after-collape");
        document.getElementById("logoutText").classList.toggle("after-collape");
        document.getElementById("logout").classList.toggle("after-collape");
        document.getElementById("UMtext").classList.toggle("after-collape");
        document.getElementById("sidebar-details").classList.toggle("after-collape")
    });
})();
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
// function del(){
//     document.getElementsByTagName("tr")[1].remove();
//     document.getElementById("row1").innerHTML="1";
//     document.getElementById("row2").innerHTML="2";
//     document.getElementById("row3").innerHTML="3";

// }

//--------------------------------------------------- store form input into local storage ---------------------------------------------
function movepage(){
    const Paperform = document.getElementById("paperform");

    Paperform.addEventListener('submit', function(e){
        e.preventDefault();
        var inputFname= document.getElementById("firstname").value;
        var inputLname= document.getElementById("lastname").value;
        var inputPhone= document.getElementById("phone").value;
        var inputEmail= document.getElementById("email").value;
        var inputLeaveDate= document.getElementById("leave_date").value  + ' to ' + document.getElementById("back_date").value;
        // var inputBackDate= document.getElementById("back_date").value;
        var inputTotalleave= document.getElementById("noOfDays").value;
        var inputtitle= document.getElementById("title").value;
        var inputReason= document.getElementById("reason").value;
        var inputattachment= document.getElementById("attachment").value;
        const status = "PENDING";
        // var test = {
        //     inputFname,
        //     inputLname,
        //     inputPhone,
        //     inputEmail,
        //     inputLeaveDate,
        //     inputTotalleave,
        //     inputtitle,
        //     inputReason,
        //     inputattachment,
        //     status,
        // }

        // var dataList = []
        // dataList.push(test)

        //store as array
        // var ARRAY = [inputFname, inputLname, inputPhone, inputEmail, inputLeaveDate, inputBackDate, inputTotalleave, inputtitle, inputReason, inputattachment];
        // localStorage.setItem(inputtitle, JSON.stringify(ARRAY));

        // // store one by one as variable
        // localStorage.setItem("DataList", JSON.stringify(dataList));
        // localStorage.setItem("firstname", inputFname);
        // localStorage.setItem("lastname", inputLname);
        // localStorage.setItem("phone", inputPhone);
        // localStorage.setItem("email", inputEmail);
        // localStorage.setItem("From", inputLeaveDate);
        // localStorage.setItem("To", inputBackDate);
        // localStorage.setItem("TotalLeave", inputTotalleave);
        // localStorage.setItem("title", inputtitle);
        // localStorage.setItem("reason", inputReason);
        // localStorage.setItem("attachment", inputattachment);
        const event = new Date();

        const years = {  year: 'numeric'};
        const months = { month: 'numeric' };
        const days = { day: 'numeric' };
        
        const year = event.toLocaleDateString('en-Us', years);
        const month = event.toLocaleDateString('en-Us', months);
        const day = event.toLocaleDateString('en-Us', days);
        
        const submitDate= day + "/" + month + "/" + year;
        // localStorage.setItem("submitdate", submitDate); 

        //store the form inout as the array
        var test = {
            inputFname,
            inputLname,
            inputPhone,
            inputEmail,
            inputLeaveDate,
            inputTotalleave,
            inputtitle,
            inputReason,
            inputattachment,
            status,
            submitDate,
        }
        var dataList = []
        dataList.push(test)


        localStorage.setItem("DataList", JSON.stringify(dataList));

        window.location.href = "Inbox.html";
    })
}
//------------------------------------------------------- Logout ---------------------------------------------------

function LogOut(){
    var wrappe = document.getElementById("wrapper");
    var loader = document.getElementById("loading");
    wrappe.style.display = "none";
    loader.style.display = "block";
    timeou = setTimeout(LogOutnow, 2000);
    // if(timeou == 3){
    //         window.location.href = '../login-page/LogIn.html';
    // }
}

function LogOutnow(){
    window.location.href = '../login-page/LogIn.html';
}

function loadvalue() {
        // document.getElementById("myDiv").style.display = "block";
        var myVar = setTimeout(showPage, 1000);
    }
    function showPage() {
        document.getElementById("elem").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
    }

//---count the row of request
function dashboard(){
    var table = document.getElementById("display");
    var tbodyRowCount = table.tBodies[0].rows.length;
    document.getElementById('').innerHTML = tbodyRowCount;
}

