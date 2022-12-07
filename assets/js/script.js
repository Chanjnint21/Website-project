
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


    // Paperform.addEventListener('submit', function(e){
    //     e.preventDefault();

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

        // const event = new Date();

        // const years = {  year: 'numeric'};
        // const months = { month: 'numeric' };
        // const days = { day: 'numeric' };
        
        // const year = event.toLocaleDateString('en-Us', years);
        // const month = event.toLocaleDateString('en-Us', months);
        // const day = event.toLocaleDateString('en-Us', days);
        
        // const submitDate= day + "/" + month + "/" + year;
        // localStorage.setItem("submitdate", submitDate); 

        // Fake localStorage to make it work in the snippet
        // LocalStorage = {
        // getItem: (key) => this[key],
        // setItem: (key, value) => this[key] = value
        // };

        // Make sure we get -something- back in case this is the first time we're accessing the storage.
        // const oldRequest = JSON.parse(LocalStorage.getItem('data') || '[]');

        // The creation of the new object can be done in 1 step.  
        // const array = Object.entries({
        //     Inpname: inputFname,
        //     InpLname: inputLname,
        //     Inpphone: inputPhone,
        //     InpEmail: inputEmail,
        //     InpLeaveDate: inputLeaveDate,
        //     InpTotalleave: inputTotalleave,
        //     Inptitle: inputtitle,
        //     InpReason: inputReason,
        //     Inpattachment: inputattachment,
        //     Inpstatus: status,
        //     InpSybmitedaL: submitDate,
        // });

        // oldRequest.push(array); 
        // localStorage.setItem('RequestData', JSON.stringify(oldRequest));
        // LocalStorage.setItem('data', JSON.stringify(oldRequest));
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
        //     submitDate,
        // }
        // var dataList = []
        // dataList.push(test)

        // localStorage.setItem("DataList", JSON.stringify(dataList));

        // window.location.href = "Inbox.html";
    // })
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

