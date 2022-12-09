
var RReview = "<button title='review' +data+ data-toggle='tooltip'><span class='material-icons' type='button' data-toggle='modal' data-target='#modal-pending'>rate_review</span></button ><button data-title='delete'>"; //<span class='material-icons'  data-toggle='modal' data-target='#deletRow-modal'>delete</span></button >

//import the data from local storage
var Request_listData = JSON.parse(localStorage.getItem("ToRequestbox"));

let num = 1;
//display the data in table
$('#display').dataTable( {
    "data": Request_listData,
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
        {"data": "id",
            "render": function ( data, type, row, meta ) { 
                return RReview
                }
        }
        
     ]
} )
// for (var i = 0; i <=Request_listData.length; i++ ){
//     table.row.add([i+1 , Request_listData[i].InpFname, Request_listData[i].InpLname, Request_listData[i].Inptitle, Request_listData[i].InpSubmitday, Request_listData[i].Inpstatus, RReview]).draw(false);
// }
// $(document).ready(function () {
//     var table = $('#example').DataTable({
//         ajax: 'data/arrays.txt',
//         columnDefs: [
//             {
//                 targets: -1,
//                 data: null,
//                 defaultContent: '<button>Click!</button>',
//             },
//         ],
//     });
 
    // $('#display tbody').on('click', 'button', function () {
    //     var data = table.row($(this).parents('tr')).data();
    //     alert(data[0] + "'s salary is: " + data[5]);
    // });
// function deleteThis(e){
//     const data = e.target.getAttribute('data-id')
//     console.log(e.target.getAttribute('data-id'))
// }
var table = $('#display').DataTable();

$('#display tbody').on( 'click', 'tr',  (event) =>  {
    var data = table.row( event.currentTarget ).data()
    document.getElementById("ModalTitle").innerHTML = data.InpFname + "'s Request form";
    document.getElementById("req_fname").innerHTML = data.InpFname;
    document.getElementById("req_lname").innerHTML = data.InpLname;
    document.getElementById("req_phone").innerHTML = data.Inpphone;
    document.getElementById("req_email").innerHTML = data.InpEmail;
    document.getElementById("req_totalleave").innerHTML = data.InpTotalleave + " day(s)";
    document.getElementById("req_date").innerHTML = data.InpSubmitday;
    document.getElementById("req_reason").innerHTML = data.InpReason;
    document.getElementById("req_time").innerHTML = data.Inptime;
    if (data.Inpattachment.value == null){
        document.getElementById("req_attachment").innerHTML = "None";
    } else {
        document.getElementById("req_attachment").innerHTML = data.Inpattachment;
    }
});

//------------------------click Approve request and send to history and Inbox--------------------------
function Reject() {
    var existingEntries = JSON.parse(localStorage.getItem("ToHistory"));
    if(existingEntries == null) existingEntries = [];

    var Request_listData = JSON.parse(localStorage.getItem("ToRequestbox"));
    var UserFname = document.getElementById("req_fname").innerHTML;
    var Usertime = document.getElementById("req_time").innerHTML;
    var Userdate = document.getElementById("req_date").innerHTML;
    var historystatus = "REJECT";
    var comment = document.getElementById("comment-text").innerHTML;
    for (var i = 0; i <= Request_listData.length; i++ ){
        if ( Request_listData[i].InpFname == UserFname && Request_listData[i].Inptime == Usertime && Request_listData[i].InpSubmitday == Userdate){
            const entry = {
                "InpFname": Request_listData[i].InpFname,
                "InpLname": Request_listData[i].InpLname,
                "Inpphone": Request_listData[i].Inpphone,
                "InpEmail": Request_listData[i].InpEmail,
                "InpLeaveDate": Request_listData[i].InpLeaveDate,
                "InpTotalleave": Request_listData[i].InpTotalleave,
                "Inptitle": Request_listData[i].Inptitle,
                "InpReason": Request_listData[i].InpReason,
                "Inpattachment": Request_listData[i].Inpattachment,
                "Inpstatus": historystatus,
                "InpSubmitday": Request_listData[i].InpSubmitday,
                "Inpcomment" : comment
            };
            existingEntries.unshift(entry);
            localStorage.setItem("ToHistory", JSON.stringify(existingEntries));
            Request_listData.splice(i, 1);
            localStorage.setItem('ToRequestbox', JSON.stringify(Request_listData));
            SendReviewToInboxReject()
            }
        }
}

function SendReviewToInboxReject(){
    var Inbox_listData = JSON.parse(localStorage.getItem("ToInbox"));
    var Usertime = document.getElementById("req_time").innerHTML;
    var Inboxstatus = "REJECT";
    var comment = document.getElementById("comment-text").innerHTML;
    for (var i = 0; i <= Inbox_listData.length; i++ ){
        if ( Inbox_listData[i].Inptime == Usertime){
            const entry = {
                "InpFname": Inbox_listData[i].InpFname,
                "InpLname": Inbox_listData[i].InpLname,
                "Inpphone": Inbox_listData[i].Inpphone,
                "InpEmail": Inbox_listData[i].InpEmail,
                "InpLeaveDate": Inbox_listData[i].InpLeaveDate,
                "InpTotalleave": Inbox_listData[i].InpTotalleave,
                "Inptitle": Inbox_listData[i].Inptitle,
                "InpReason": Inbox_listData[i].InpReason,
                "Inpattachment": Inbox_listData[i].Inpattachment,
                "Inpstatus": Inboxstatus,
                "InpSubmitday": Inbox_listData[i].InpSubmitday,
                "Inpcomment" : comment,
            };
            Inbox_listData.push(entry);
            localStorage.setItem("ToInbox", JSON.stringify(Inbox_listData));
            Inbox_listData.splice(i, 1);
            localStorage.setItem('ToInbox', JSON.stringify(Inbox_listData));
            location.reload()
        }
    }
}

//------------------------ click Reject request and send to history and Inbox--------------------------
function Approve() {
    var existingEntries = JSON.parse(localStorage.getItem("ToHistory"));
    if(existingEntries == null) existingEntries = [];

    var Request_listData = JSON.parse(localStorage.getItem("ToRequestbox"));
    var UserFname = document.getElementById("req_fname").innerHTML;
    var Usertime = document.getElementById("req_time").innerHTML;
    var Userdate = document.getElementById("req_date").innerHTML;
    var historystatus = "APPROVE";
    var comment = document.getElementById("comment-text").innerHTML;
    for (var i = 0; i <= Request_listData.length; i++ ){
        if ( Request_listData[i].InpFname == UserFname && Request_listData[i].Inptime == Usertime && Request_listData[i].InpSubmitday == Userdate){
            const entry = {
                "InpFname": Request_listData[i].InpFname,
                "InpLname": Request_listData[i].InpLname,
                "Inpphone": Request_listData[i].Inpphone,
                "InpEmail": Request_listData[i].InpEmail,
                "InpLeaveDate": Request_listData[i].InpLeaveDate,
                "InpTotalleave": Request_listData[i].InpTotalleave,
                "Inptitle": Request_listData[i].Inptitle,
                "InpReason": Request_listData[i].InpReason,
                "Inpattachment": Request_listData[i].Inpattachment,
                "Inpstatus": historystatus,
                "InpSubmitday": Request_listData[i].InpSubmitday,
                "Inpcomment" : comment
            };
            existingEntries.unshift(entry);
            localStorage.setItem("ToHistory", JSON.stringify(existingEntries));
            Request_listData.splice(i, 1);
            localStorage.setItem('ToRequestbox', JSON.stringify(Request_listData));
            SendReviewToInbox()
            }
        }
}

function SendReviewToInbox(){
    var Inbox_listData = JSON.parse(localStorage.getItem("ToInbox"));
    var Usertime = document.getElementById("req_time").innerHTML;
    var Inboxstatus = "APPROVE";
    var comment = document.getElementById("comment-text").innerHTML;
    for (var i = 0; i <= Inbox_listData.length; i++ ){
        if ( Inbox_listData[i].Inptime == Usertime){
            const entry = {
                "InpFname": Inbox_listData[i].InpFname,
                "InpLname": Inbox_listData[i].InpLname,
                "Inpphone": Inbox_listData[i].Inpphone,
                "InpEmail": Inbox_listData[i].InpEmail,
                "InpLeaveDate": Inbox_listData[i].InpLeaveDate,
                "InpTotalleave": Inbox_listData[i].InpTotalleave,
                "Inptitle": Inbox_listData[i].Inptitle,
                "InpReason": Inbox_listData[i].InpReason,
                "Inpattachment": Inbox_listData[i].Inpattachment,
                "Inpstatus": Inboxstatus,
                "InpSubmitday": Inbox_listData[i].InpSubmitday,
                "Inpcomment" : comment,
            };
            Inbox_listData.push(entry);
            localStorage.setItem("ToInbox", JSON.stringify(Inbox_listData));
            Inbox_listData.splice(i, 1);
            localStorage.setItem('ToInbox', JSON.stringify(Inbox_listData));
            location.reload()
        }
    }
}