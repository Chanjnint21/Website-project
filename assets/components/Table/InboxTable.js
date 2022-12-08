var pending_review = "<button title='view detail' data-toggle='tooltip'><span class='material-icons' data-toggle='modal' data-target='#modal-pending'>edit</span></button > <button type='button' title='edit' data-toggle='tooltip'><span class='material-icons text-danger' data-toggle='modal' data-target='#comfirm-modal >delete</span></button>";

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
    if (data.Inpattachment.value == null){
        document.getElementById("In_attachment").value = "None";
    } else {
        document.getElementById("In_attachment").value = data.Inpattachment;
    }
});

//delete the request----------------------------
function deleteRequest(){
    var Inbox_listData = JSON.parse(localStorage.getItem("ToInbox"));
    var Useremail = document.getElementById("In_email").value ;
    var UserFname = document.getElementById("In_fname").value;
    var UserLname = document.getElementById("In_lname").value;
    var Userphone = document.getElementById("In_phone").value;
    var Usereason = document.getElementById("In_reason").value;
    var Usertotalleave = document.getElementById("In_totalleave").value;
    var Userleavedate = document.getElementById("In_leavedate").value;
    for (var i = 0; i <= Inbox_listData.length; i++ ){
        if (Inbox_listData[i].InpEmail == Useremail && Inbox_listData[i].InpFname == UserFname && Inbox_listData[i].InpLname == UserLname && Inbox_listData[i].Inpphone == Userphone && Inbox_listData[i].InpReason == Usereason && Inbox_listData[i].InpTotalleave == Usertotalleave && Inbox_listData[i].InpSubmitday == Userleavedate ){
            Inbox_listData.splice(i, 1);
            localStorage.setItem('ToInbox', JSON.stringify(Inbox_listData));
            location.reload();
        }
    }
}