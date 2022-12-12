//--------------------------------------------------- store form input into local storage ---------------------------------------------
function movepage(){
    // Parse the JSON stored in allEntriesP
    var InboxEntries = JSON.parse(localStorage.getItem("ToInbox"));
    if(InboxEntries == null) InboxEntries = [];
    var RequestEntries = JSON.parse(localStorage.getItem("ToRequestbox"));
    if(RequestEntries == null) RequestEntries = [];

    var inputFname= document.getElementById("firstname").value;
    var inputLname= document.getElementById("lastname").value;
    var inputPhone= document.getElementById("phone").value;
    var inputEmail= document.getElementById("email").value;
    var inputLeaveDate= document.getElementById("leave_date").value  + ' to ' + document.getElementById("back_date").value;
    var inputTotalleave= document.getElementById("noOfDays").value;
    var inputtitle= document.getElementById("title").value;
    var inputReason= document.getElementById("reason").value;
    var inputattachment= document.getElementById("attachment").value;
    var pending_review = "<button title='view detail' data-toggle='tooltip'><span class='material-icons' data-toggle='modal' data-target='#modal-pending'>edit</span></button >";
    var status = "PENDING";

    if (inputFname == "" || inputLname == "" || inputPhone == "" || inputEmail == "" ){
        alert('Please complete all the requirement')
    } else if (inputtitle == "" || inputReason == "" || inputLeaveDate == "" || inputtitle == ""){
        alert('Please complete all the requirement')
    } else {
            // Get the date of submit form event
            const event = new Date();
            const years = {  year: 'numeric'};
            const months = { month: 'numeric' };
            const days = { day: 'numeric' };
            
            const year = event.toLocaleDateString('en-Us', years);
            const month = event.toLocaleDateString('en-Us', months);
            const day = event.toLocaleDateString('en-Us', days);
            
            const submitDate = day + "/" + month + "/" + year;
            var current_time = event.getHours()+":"+event.getMinutes()+":"+ event.getSeconds();

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
            "InpSubmitday": submitDate,
            "Inptime" : current_time,
            "pendingmodal" : pending_review
        };

        // Save allEntries back to local storage
        InboxEntries.unshift(entry);
        RequestEntries.unshift(entry);
        localStorage.setItem("ToInbox", JSON.stringify(InboxEntries));
        localStorage.setItem("ToRequestbox", JSON.stringify(RequestEntries));
        // window.location.href = "Inbox.html";
    }
}