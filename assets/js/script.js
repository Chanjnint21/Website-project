(function() {
    var menu_icon = document.getElementById("sidebarCollapse");
    var sidebar =document.getElementById("sidebar");
    
    menu_icon.addEventListener('click', (x) => {
        sidebar.classList.toggle("active");

        if(sidebar.classList.contains('active')) {
            document.getElementById("sidebarCollapse").innerHTML="menu";
        } else {
            document.getElementById("sidebarCollapse").innerHTML="menu_open";
        }
        document.getElementById("body").classList.toggle("active");
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
//----------------------------------------------------- button in (details) request page ---------------------------------------------

// document.getElementById("Reject").addEventListener("click", Rbtn)
//     function Rbtn(){
//         var btn = document.getElementById("demo1");
//         btn.value="Reject"
//         btn.style.color="red";
//         document.getElementById("demo1").innerHTML= "Reject";
//     }
// document.getElementById("Approve").addEventListener("click", Abtn)
//     function Abtn(){
//         var btn = document.getElementById("demo1");
//         btn.value="Approve"
//         btn.style.color="green";
//         document.getElementById("demo1").innerHTML= "Approve";
//     }
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
        var inputLeaveDate= document.getElementById("leave_date").value;
        var inputBackDate= document.getElementById("back_date").value;
        var inputTotalleave= document.getElementById("noOfDays").value;
        var inputtitle= document.getElementById("title").value;
        var inputReason= document.getElementById("reason").value;
        var inputattachment= document.getElementById("attachment").value;

        //store as array
        // var ARRAY = [inputFname, inputLname, inputPhone, inputEmail, inputLeaveDate, inputBackDate, inputTotalleave, inputtitle, inputReason, inputattachment];
        // localStorage.setItem(inputtitle, JSON.stringify(ARRAY));

        // store one by one as variable
        localStorage.setItem("firstname", inputFname);
        localStorage.setItem("lastname", inputLname);
        localStorage.setItem("phone", inputPhone);
        localStorage.setItem("email", inputEmail);
        localStorage.setItem("From", inputLeaveDate);
        localStorage.setItem("To", inputBackDate);
        localStorage.setItem("TotalLeave", inputTotalleave);
        localStorage.setItem("title", inputtitle);
        localStorage.setItem("reason", inputReason);
        localStorage.setItem("attachment", inputattachment);

        const event = new Date();

        const years = {  year: 'numeric'};
        const months = { month: 'numeric' };
        const days = { day: 'numeric' };
        
        const year = event.toLocaleDateString('en-Us', years);
        const month = event.toLocaleDateString('en-Us', months);
        const day = event.toLocaleDateString('en-Us', days);
        
        const submitDate= day + "/" + month + "/" + year;
        localStorage.setItem("submitdate", submitDate); 

        const status = "PENDING";
        localStorage.setItem("status", status);

        window.location.href = "Inbox.html";
    })
}
//------------------------------------------------------- Logout ---------------------------------------------------

function LogOut(){
    var wrappe = document.getElementById("wrapper");
    var loader = document.getElementById("loading");
    wrappe.style.display = "none";
    loader.style.display = "block";
    timeou = setTimeout(LogOut, 1000);
    if(timeou == 3){
            window.location.href = '../login-page/LogIn.html';
    }
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

//------------------------------------------------------- load value into row of table ---------------------------------------------------
// function loadvalue(){
    // document.getElementById("req_fname").innerHTML= localStorage.getItem("firstname");
    // document.getElementById("req_lname").innerHTML= localStorage.getItem("lastname");
    // document.getElementById("req_phone").innerHTML= localStorage.getItem("phone");
    // document.getElementById("req_email").innerHTML= localStorage.getItem("email");
    // document.getElementById("req_totalleave").innerHTML= localStorage.getItem("TotalLeave") + "days";
    // document.getElementById("req_date").innerHTML= localStorage.getItem("From") + " to " + localStorage.getItem("To");
    // document.getElementById("req_reason").innerHTML= localStorage.getItem("reason");
    // document.getElementById("req_attachment").innerHTML= localStorage.getItem("attachment");
    
    // //added to the table

    // // document.getElementById("T_fname").innerHTML= localStorage.getItem("firstname");
    // // document.getElementById("T_lname").innerHTML= localStorage.getItem("lastname");
    // // document.getElementById("T_title").innerHTML= localStorage.getItem("title");
    // // document.getElementById("T_date").innerHTML= localStorage.getItem("submitdate");
    // // document.getElementById("T_status").innerHTML= localStorage.getItem("status");
    // var row= 1;
    //     var display = document.getElementById("display");
    //     var newRow = display.insertRow(row);

    //     var cell1 = newRow.insertCell(0);
    //     var cell2 = newRow.insertCell(1);
    //     var cell3 = newRow.insertCell(2);
    //     var cell4 = newRow.insertCell(3);
    //     var cell5 = newRow.insertCell(4);
    //     var cell6 = newRow.insertCell(5);
    //     var cell7 = newRow.insertCell(6);

    //     cell1.innerHTML = "1";
    //     cell2.innerHTML = localStorage.getItem("firstname");
    //     cell2.innerHTML = localStorage.getItem("firstname");
    //     cell3.innerHTML = localStorage.getItem("lastname");
    //     cell4.innerHTML = localStorage.getItem("title");
    //     cell5.innerHTML = localStorage.getItem("submitdate");
    //     cell6.innerHTML = "<span type='button' class='material-icons' data-toggle='modal' data-target='#modal-pending'>_reviews</span>";
    //     cell7.innerHTML = localStorage.getItem("status");
// }

// function refresh(){
//     // var btn = document.getElementById('btnn');
//     // var elem = document.getElementById('elem');

//     // btn.addEventListener('click', function() {

//     // });
//     document.getElementById("req_fname").innerHTML= localStorage.getItem("firstname");
//     document.getElementById("req_lname").innerHTML= localStorage.getItem("lastname");
//     document.getElementById("req_phone").innerHTML= localStorage.getItem("phone");
//     document.getElementById("req_email").innerHTML= localStorage.getItem("email");
//     document.getElementById("req_totalleave").innerHTML= localStorage.getItem("TotalLeave") + "days";
//     document.getElementById("req_date").innerHTML= localStorage.getItem("From") + " to " + localStorage.getItem("To");
//     document.getElementById("req_reason").innerHTML= localStorage.getItem("reason");
//     document.getElementById("req_attachment").innerHTML= localStorage.getItem("attachment");
    
//     if (localStorage.getItem("firstname") === null){
//         elem.classList.remove('show');
//         // this force-restarts the CSS animation
//         void elem.offsetWidth;
//         elem.classList.add('show');
//         // setTimeout(alert("no New Request !"), 5000);
//     } else {
//         elem.classList.remove('show');
//         // this force-restarts the CSS animation
//         void elem.offsetWidth;
//         elem.classList.add('show');
//         var row= 1;
//         var display = document.getElementById("display");
//         var newRow = display.insertRow(row);

//         var cell1 = newRow.insertCell(0);
//         var cell2 = newRow.insertCell(1);
//         var cell3 = newRow.insertCell(2);
//         var cell4 = newRow.insertCell(3);
//         var cell5 = newRow.insertCell(4);
//         var cell6 = newRow.insertCell(5);
//         var cell7 = newRow.insertCell(6);

//         cell1.innerHTML = "1";
//         cell2.innerHTML = localStorage.getItem("firstname");
//         cell3.innerHTML = localStorage.getItem("lastname");
//         cell4.innerHTML = localStorage.getItem("title");
//         cell5.innerHTML = localStorage.getItem("submitdate");
//         cell6.innerHTML = "<span type='button' class='material-icons' data-toggle='modal' data-target='#modal-pending'>_reviews</span>";
//         cell7.innerHTML = localStorage.getItem("status");
    
//         document.getElementById("row1").innerHTML="2";
//         document.getElementById("row2").innerHTML="3";
//         document.getElementById("row3").innerHTML="4";
//     }
// }

