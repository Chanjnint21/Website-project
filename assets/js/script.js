
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
//----------------------------------------------------- date count ---------------------------------------------

function countdays () {
    var dateend = new Date (document.getElementById("leave_date").value);
    var datestart = new Date (document.getElementById("back_date").value);
    var counttime =  datestart.getTime()- dateend.getTime();
    var countdays = counttime / (1000 * 3600 * 24);
    document.getElementById("noOfDays").setAttribute("value", isNaN(countdays) ? '' : countdays);
    document.getElementById("noOfDays").innerHTML = countdays + "days";
}

//--------------------------------------------------- store form input into local storage ---------------------------------------------
function movepage(){
    // Parse the JSON stored in allEntriesP
    var existingEntries = JSON.parse(localStorage.getItem("ToInbox"));
    if(existingEntries == null) existingEntries = [];

    var inputFname= document.getElementById("firstname").value;
    var inputLname= document.getElementById("lastname").value;
    var inputPhone= document.getElementById("phone").value;
    var inputEmail= document.getElementById("email").value;
    var inputLeaveDate= document.getElementById("leave_date").value  + ' to ' + document.getElementById("back_date").value;
    var inputTotalleave= document.getElementById("noOfDays").value;
    var inputtitle= document.getElementById("title").value;
    var inputReason= document.getElementById("reason").value;
    var inputattachment= document.getElementById("attachment").value;
    var status = "REJECT";

    //Get the date of submit form event
        const event = new Date();
        const years = {  year: 'numeric'};
        const months = { month: 'numeric' };
        const days = { day: 'numeric' };
        
        const year = event.toLocaleDateString('en-Us', years);
        const month = event.toLocaleDateString('en-Us', months);
        const day = event.toLocaleDateString('en-Us', days);
        
        const submitDate = day + "/" + month + "/" + year;

    const entry = {
        "InpFname": inputFname,
        "InpLname": inputLname,
        "Inpphone": inputPhone,
        "InpEmail": inputEmail,
        "InpLeaveDate": inputLeaveDate,
        "InpTotalleave": inputTotalleave,
        "Inptitle": inputtitle,
        "InpReason": inputReason,
        "Inpattachment": inputattachment,
        "Inpstatus": status,
        "InpSubmitday": submitDate
    };
    localStorage.setItem("newentry", JSON.stringify(entry));
    // Save allEntries back to local storage
    existingEntries.unshift(entry);
    localStorage.setItem("ToInbox", JSON.stringify(existingEntries));
    localStorage.setItem("ToRequestbox", JSON.stringify(existingEntries));

    document.getElementById("submit_form").addEventListener("click", function() {
        movepage();
    }, false);

    window.location.href = "Inbox.html";
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
    localStorage.removeItem('fromButtonRedirect');
}
function pageload(){
    var Accept =  localStorage.getItem('fromButtonRedirect');
    if (Accept !== 'yes') {
        window.location.href = "../login-page/LogIn.html";
    }
}
function loadvalue() {
    var Accept =  localStorage.getItem('fromButtonRedirect');
    if (Accept !== 'yes') {
        window.location.href = "../login-page/LogIn.html";
    }
    var myVar = setTimeout(showPage, 1000);
}

function showPage() {
        document.getElementById("elem").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
    }

