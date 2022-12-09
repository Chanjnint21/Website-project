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
        {"data": "id",
            "render": function ( data, type, row, meta ) { 
                return pending_review
                }
        }
        
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
    document.getElementById("In_reason").value = data.InpReason;
    document.getElementById("In_time").innerHTML = data.Inptime;
    if (data.Inpattachment.value == null){
        document.getElementById("In_attachment").value = "None";
    } else {
        document.getElementById("In_attachment").value = data.Inpattachment;
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