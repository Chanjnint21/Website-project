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
    document.getElementsByTagName("tr")[1].remove();
    document.getElementById("row1").innerHTML="1";
    document.getElementById("row2").innerHTML="2";
    document.getElementById("row3").innerHTML="3";

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
    var inputtitle= document.getElementById("title");
    var inputReason= document.getElementById("reason");
    var inputattachment= document.getElementById("attachment");

    Paperform.addEventListener('submit', function(e){
        e.preventDefault();

        localStorage.setItem("firstname", inputFname.value);
        localStorage.setItem("lastname", inputLname.value);
        localStorage.setItem("phone", inputPhone.value);
        localStorage.setItem("email", inputEmail.value);
        localStorage.setItem("From", inputLeaveDate.value);
        localStorage.setItem("To", inputBackDate.value);
        localStorage.setItem("TotalLeave", inputTotalleave.value);
        localStorage.setItem("title", inputtitle.value);
        localStorage.setItem("reason", inputReason.value);
        localStorage.setItem("attachment", inputattachment.value);

        const event = new Date();

        const years = {  year: 'numeric'};
        const months = { month: 'short' };
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

function refresh(){
    // var btn = document.getElementById('btnn');
    // var elem = document.getElementById('elem');

    // btn.addEventListener('click', function() {
    
    // });
    document.getElementById("req_fname").innerHTML= localStorage.getItem("firstname");
    document.getElementById("req_lname").innerHTML= localStorage.getItem("lastname");
    document.getElementById("req_phone").innerHTML= localStorage.getItem("phone");
    document.getElementById("req_email").innerHTML= localStorage.getItem("email");
    document.getElementById("req_totalleave").innerHTML= localStorage.getItem("TotalLeave") + "days";
    document.getElementById("req_date").innerHTML= localStorage.getItem("From") + " to " + localStorage.getItem("To");
    document.getElementById("req_reason").innerHTML= localStorage.getItem("reason");
    document.getElementById("req_attachment").innerHTML= localStorage.getItem("attachment");
    
    if (localStorage.getItem("firstname") === null){
        elem.classList.remove('show');
        // this force-restarts the CSS animation
        void elem.offsetWidth;
        elem.classList.add('show');
        // setTimeout(alert("no New Request !"), 5000);
    } else {
        elem.classList.remove('show');
        // this force-restarts the CSS animation
        void elem.offsetWidth;
        elem.classList.add('show');
        var row= 1;
        var display = document.getElementById("display");
        var newRow = display.insertRow(row);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);

        cell1.innerHTML = "1";
        cell2.innerHTML = localStorage.getItem("firstname");
        cell2.innerHTML = localStorage.getItem("firstname");
        cell3.innerHTML = localStorage.getItem("lastname");
        cell4.innerHTML = localStorage.getItem("title");
        cell5.innerHTML = localStorage.getItem("submitdate");
        cell6.innerHTML = "<span type='button' class='material-icons' data-toggle='modal' data-target='#modal-pending'>_reviews</span>";
        cell7.innerHTML = localStorage.getItem("status");
    
        document.getElementById("row1").innerHTML="2";
        document.getElementById("row2").innerHTML="3";
        document.getElementById("row3").innerHTML="4";
    }
}