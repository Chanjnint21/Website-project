var pending_review = "<button title='view detail' data-toggle='tooltip'><span class='material-icons' data-toggle='modal' data-target='#modal-pending'>edit</span></button >";
var after_review = "<button title='view detail' data-toggle='tooltip'><span class='material-icons' data-toggle='modal' data-target='#modal-reviewed>vi</span></button >";
var Inbox_listData = JSON.parse(localStorage.getItem("ToInbox"));

let num = 1;
//display the data in table
$('#display').dataTable( {
    "data": Inbox_listData,
    "autoWidth": false,
    "columns": [
        {"data": "id",
            "render": function(){
                return num++;
            }
        }, 
        {"data": "InpFname"},        
        {'data': 'InpLname'},
        {'data': 'Inptitle'},
        {'data': 'InpSubmitday'},
        {'data': 'Inpstatus'},
        {"data": "pendingmodal"}
        
     ]
} )

//----Assign the color of status
var Status_colume = document.getElementsByTagName('td');

for (var i = 0; i < Status_colume.length; i++) {
    if(Status_colume[i].innerHTML == "REJECT"){
        Status_colume[i].style.color = 'Red';
    } else if (Status_colume[i].innerHTML == "APPROVE"){
        Status_colume[i].style.color = 'Green';
    }
}

var table = $('#display').DataTable();

$('#display tbody').on( 'click', 'tr',  (event) =>  {
    var data = table.row( event.currentTarget ).data()
    document.getElementById("ModalTitle").value = data.InpFname + "'s Request form";
    document.getElementById("In_fname").value = data.InpFname;
    document.getElementById("In_lname").value = data.InpLname;
    document.getElementById("In_phone").value = data.Inpphone;
    document.getElementById("In_email").value = data.InpEmail;
    document.getElementById("In_totalleave").value = data.InpTotalleave + " day(s)";
    document.getElementById("In_leavedate").value = data.InpSubmitday;
    document.getElementById("In_title").value = data.Inptitle;
    document.getElementById("In_reason").value = data.InpReason;
    document.getElementById("In_time").innerHTML = data.Inptime;
    if (data.Inpattachment.value == null){
        document.getElementById("In_attachment").value = "None";
    } else {
        document.getElementById("In_attachment").value = data.Inpattachment;
    }
});

$('#display tbody').on( 'click', 'tr',  (event) =>  {
    var data = table.row( event.currentTarget ).data()
    document.getElementById("ReviewModalTitle").innerHTML = data.InpFname + "'s Request form";
    document.getElementById("RIn_Fname").innerHTML = data.InpFname;
    document.getElementById("RIn_Lname").innerHTML = data.InpLname;
    document.getElementById("RIn_phone").innerHTML = data.Inpphone;
    document.getElementById("RIn_email").innerHTML = data.InpEmail;
    document.getElementById("RIn_totalleave").innerHTML = data.InpTotalleave + " day(s)";
    document.getElementById("RIn_leavedate").innerHTML = data.InpSubmitday;
    document.getElementById("RIn_title").innerHTML = data.Inptitle;
    document.getElementById("RIn_reason").innerHTML = data.InpReason;
    document.getElementById("RIn_time").innerHTML = data.Inptime;
    if (data.Inpattachment.innerHTML == null){
        document.getElementById("RIn_attachment").innerHTML = "None";
    } else {
        document.getElementById("RIn_attachment").innerHTML = data.Inpattachment;
    }
});

//------------------- delete the request from Inbox and request box----------------------------
function deleteRequest(){
    var Inbox_listData = JSON.parse(localStorage.getItem("ToInbox"));
    var Usertime = document.getElementById("In_time").innerHTML;
    for (var i = 0; i <= Inbox_listData.length; i++ ){
        if ( Inbox_listData[i].Inptime == Usertime){
            Inbox_listData.splice(i, 1);
            localStorage.setItem('ToInbox', JSON.stringify(Inbox_listData));
            deleteInrequestbox()
        }
    }
}

function deleteInrequestbox(){
    var Request_listData = JSON.parse(localStorage.getItem("ToRequestbox"));
    var UserFname = document.getElementById("In_fname").value;
    var Usertime = document.getElementById("In_time").innerHTML;
    var Userdate = document.getElementById("In_leavedate").value;
    for (var i = 0; i <= Request_listData.length; i++ ){
        if ( Request_listData[i].InpFname == UserFname && Request_listData[i].Inptime == Usertime && Request_listData[i].InpSubmitday == Userdate){
            Request_listData.splice(i, 1);
            localStorage.setItem('ToRequestbox', JSON.stringify(Request_listData));
            location.reload()
        }
    }
}
// function savechange(){
//     var Inbox_listData = JSON.parse(localStorage.getItem("ToInbox"));
//     var Usertime = document.getElementById("req_time").innerHTML;
//     var UserFname = document.getElementById("In_fname").value;
//     var UserLname = document.getElementById("In_lname").value;
//     var UserPhone = document.getElementById("In_phone").value ;
//     var UserEmail = document.getElementById("In_email").value ;
//     var UserTotalleave = document.getElementById("In_totalleave").value;
//     var Usersubmitdat = document.getElementById("In_leavedate").value;
//     var Usertitle = document.getElementById("In_title").value;
//     var Usserreason = document.getElementById("In_reason").value;
//     var Usertime = document.getElementById("In_time").innerHTML;
//     var inputattachment= document.getElementById("In_attachment").value;
//     var status = "PENDING";

//     const event = new Date();
//     const years = {  year: 'numeric'};
//     const months = { month: 'numeric' };
//     const days = { day: 'numeric' };
    
//     const year = event.toLocaleDateString('en-Us', years);
//     const month = event.toLocaleDateString('en-Us', months);
//     const day = event.toLocaleDateString('en-Us', days);
    
//     const submitDate = day + "/" + month + "/" + year;
//     var current_time = event.getHours()+":"+event.getMinutes()+":"+ event.getSeconds();

//     var after_review = "<button title='view detail' data-toggle='tooltip'><span class='material-icons' data-toggle='modal' data-target='#modal-reviewed'>visibility</span></button >";
//     for (var i = 0; i <= Inbox_listData.length; i++ ){
//         if ( Inbox_listData[i].Inptime == Usertime){
//             const entry = {
//                 "InpFname": UserFname,
//                 "InpLname": UserLname,
//                 "Inpphone": UserPhone,
//                 "InpEmail": UserEmail,
//                 "InpLeaveDate": UserTotalleave,
//                 "InpTotalleave": Usersubmitdat,
//                 "Inptitle": Usertitle,
//                 "InpReason": Usserreason,
//                 "Inpattachment": inputattachment,
//                 "Inpstatus": status,
//                 "InpSubmitday": submitDate,
//                 "Inptime" : current_time,
//                 "pendingmodal" : after_review,
//             };
//             Inbox_listData.push(entry);
//             localStorage.setItem("ToInbox", JSON.stringify(Inbox_listData));
//             Inbox_listData.splice(i, 1);
//             localStorage.setItem('ToInbox', JSON.stringify(Inbox_listData));
//             location.reload()
//         }
//     }
// }