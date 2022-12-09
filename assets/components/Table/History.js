// var table = $('#display').DataTable();
var Rreview = "<button title='view detail' data-toggle='tooltip'><span class='material-icons' type='button' data-toggle='modal' data-target='#modal-reviewed'>visibility</span></button ><button title='delete' data-toggle='tooltip'><span class='material-icons mx-2 text-danger'  data-toggle='modal' data-target='#deletRow-modal'>cancel</span></button >";
//import the data from local storage
var History_listData = JSON.parse(localStorage.getItem("ToHistory"));

let num = 1;
//display the data in table
$('#display').dataTable( {
    "data": History_listData,
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
                return Rreview
                }
        }
        
     ]
} )

var table = $('#display').DataTable();

$('#display tbody').on( 'click', 'tr',  (event) =>  {
    var data = table.row( event.currentTarget ).data()
    document.getElementById("ModalTitle").innerHTML = data.InpFname + "'s Request form";
    document.getElementById("H_fname").innerHTML = data.InpFname;
    document.getElementById("H_lname").innerHTML = data.InpLname;
    document.getElementById("H_phone").innerHTML = data.Inpphone;
    document.getElementById("H_email").innerHTML = data.InpEmail;
    document.getElementById("H_totalleave").innerHTML = data.InpTotalleave + " day(s)";
    document.getElementById("H_date").innerHTML = data.InpSubmitday;
    document.getElementById("H_reason").innerHTML = data.InpReason;
    document.getElementById("H_time").innerHTML = data.Inptime;
    document.getElementById("H_comment").innerHTML = data.Inpcomment;
    if (data.Inpattachment.value == null){
        document.getElementById("H_attachment").innerHTML = "None";
    } else {
        document.getElementById("H_attachment").innerHTML = data.Inpattachment;
    }
});

//----Assign the color of status
var Status_colume = document.getElementsByTagName('td');

for (var i = 0; i < Status_colume.length; i++) {
    if(Status_colume[i].innerHTML == "REJECT"){
        Status_colume[i].style.color = 'Red';
    } else if (Status_colume[i].innerHTML == "APPROVE"){
        Status_colume[i].style.color = 'Green';
    }
}