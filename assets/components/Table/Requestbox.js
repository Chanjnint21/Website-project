// document.getElementById("ModalTitle").innerHTML = localStorage.getItem("firstname")+"'s form";
//     document.getElementById("req_fname").innerHTML = localStorage.getItem("firstname");
//     document.getElementById("req_lname").innerHTML = localStorage.getItem("lastname");
//     document.getElementById("req_phone").innerHTML = localStorage.getItem("phone");
//     document.getElementById("req_email").innerHTML = localStorage.getItem("email");
//     document.getElementById("req_totalleave").innerHTML = localStorage.getItem("TotalLeave") + "days";
//     document.getElementById("req_date").innerHTML = localStorage.getItem("From") + " to " + localStorage.getItem("To");
//     document.getElementById("req_reason").innerHTML = localStorage.getItem("reason");
//     document.getElementById("req_attachment").innerHTML = localStorage.getItem("attachment");

//     var t = $('#display').DataTable();
//     var firstname = localStorage.getItem("firstname");
//     var lastname = localStorage.getItem("lastname");
//     var title = localStorage.getItem("title");
//     var subdate = localStorage.getItem("submitdate");
//     var review = "<button title='review' data-toggle='tooltip'><span class='material-icons' type='button' data-toggle='modal' data-target='#modal-pending'>rate_review</span></button ><button data-title='delete'>"; //<span class='material-icons'  data-toggle='modal' data-target='#deletRow-modal'>delete</span></button >
//     var localstatus = localStorage.getItem("status");
//     var req_status = "<button data-toggle='modal' data-target='#comfirm-modal' data-title='change status' ><span id='demo1' value=''>PENDING</span></button>";
//     let num;
//     if (localstatus !== null){
//         num = 1;
//         t.row.add([num, firstname, lastname, title, subdate, req_status, review]).draw(false);
//     } else {
//         num = 0;
//     }

//     // Automatically add a first row of data
//     t.row.add([num + 1, 'Sokha', "chan", "Phcum Ben", "12/07/2022", req_status, review]).draw(false);
//     t.row.add([num + 2, 'MArk', "jackson", "Water festival", "12/06/2022", req_status, review]).draw(false);
//     t.row.add([num + 3, 'Thida', "karl", "Phcum Ben", "12/07/2022", req_status, review]).draw(false);
//     t.row.add([num + 4, 'Daro', "krosa", "Khmer New yeat", "15/04/2022", req_status, review]).draw(false);
//     t.row.add([num + 5, 'vireak', "chan", "Funeral", "10/03/2022", req_status, review]).draw(false);
//     t.row.add([num + 6, 'Kosal', "vicheka", "title", "13/07/2021",req_status, review]).draw(false);
//     t.row.add([num + 7, 'Kjoool', "Rosa", "title", "24/05/2021", req_status, review]).draw(false);
//     t.row.add([num + 8, 'forlto', "chanao", "titlw", "31/1/2021", req_status, review]).draw(false);
//     t.row.add([num + 9, 'candaal', "ghiloo", "title", "12/1/2021", req_status, review]).draw(false);
    
// function Approve(){
//     localStorage.removeItem("status");
//     localStorage.setItem("H-status", "APPROVE");
//     movetohistory()
// }

// function Reject(){
//     localStorage.removeItem("status");
//     localStorage.setItem("H-status", "REJECT");
//     movetohistory()
// }

// function movetohistory() {
//     localStorage.setItem("H-firstname", firstname);
//     localStorage.setItem("H-lastname", lastname);
//     localStorage.setItem("H-title", title);
//     localStorage.setItem("H-submitdate", subdate);
//     localStorage.setItem("H-reason", localStorage.getItem("reason"));
//     localStorage.setItem("H-email", localStorage.getItem("email"));
//     localStorage.setItem("H-phone", localStorage.getItem("reason"));
//     localStorage.setItem("H-From", localStorage.getItem("From"));
//     localStorage.setItem("H-to", localStorage.getItem("To"));
//     localStorage.setItem("H-to", localStorage.getItem("TotalLeave"));
//     localStorage.setItem("H-attachment", localStorage.getItem("attachment"));

//     let keysToRemove = ["firstname", "lastname", "title", "phone", "email", "TotalLeave", "From", "To", "reason", "attachment", "submitdate", "status"];
//     for (key of keysToRemove) {
//         localStorage.removeItem(key);
//         location.reload();
//     }
// }

var RReview = "<button title='review' +data+ data-toggle='tooltip'><span class='material-icons' type='button' data-toggle='modal' data-target='#modal-pending'>rate_review</span></button ><button data-title='delete'>"; //<span class='material-icons'  data-toggle='modal' data-target='#deletRow-modal'>delete</span></button >

// var table = $('#display').DataTable();

//import the data from local storage
var Request_listData = JSON.parse(localStorage.getItem("ToRequestbox"));

//display the data in table
$('#display').dataTable( {
    "data": Request_listData,
    "autoWidth": false,
    "columns": [ 
        {"data": "InpFname"},        
        {'data': 'InpFname'},
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
    if (data.Inpattachment.value == null){
        document.getElementById("req_attachment").innerHTML = "None";
    } else {
        document.getElementById("req_attachment").innerHTML = data.Inpattachment;
    }
});

function Approve() {
    const changestatus = {
        "Inpstatus": "APPROVE",
    };
    var Request_listData = JSON.parse(localStorage.getItem("ToRequestbox"));
    localStorage.setItem("ToHistory", JSON.stringify(Request_listData));
}

function Reject() {
    const changestatus = {
        "Inpstatus": "APPROVE",
    };
    var Request_listData = JSON.parse(localStorage.getItem("ToRequestbox"));
    localStorage.setItem("ToHistory", JSON.stringify(Request_listData));
}