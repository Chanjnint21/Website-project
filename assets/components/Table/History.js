


// var firstname = localStorage.getItem("H-firstname");;
// var lastname = localStorage.getItem("H-lastname");
// var title = localStorage.getItem("H-title");
// var subdate = localStorage.getItem("H-submitdate");
// var H_status = localStorage.getItem("H-status");
// let DoneReviewed;
// if (H_status == "APPROVE"){
//     DoneReviewed = "<span  id='approve_status' data-toggle='modal' data-target='#comfirm-modal' style='color: green;' value='Approve'>APPROVE</span>";
// } else {
//     DoneReviewed = "<span  id='reject_status' data-toggle='modal' data-target='#comfirm-modal' style='color: red;' value='Reject'>REJECT</span>";
// }

// document.getElementById("ModalTitle").innerHTML = firstname +"'s form";
// document.getElementById("req_fname").innerHTML = firstname;
// document.getElementById("req_lname").innerHTML = lastname;
// document.getElementById("req_phone").innerHTML = localStorage.getItem("H-phone");
// document.getElementById("req_email").innerHTML = localStorage.getItem("H-email");
// document.getElementById("req_totalleave").innerHTML = localStorage.getItem("H-TotalLeave") + "days";
// document.getElementById("req_date").innerHTML = localStorage.getItem("H-From") + " to " + localStorage.getItem("H-To");
// document.getElementById("req_reason").innerHTML = localStorage.getItem("H-reason");
// document.getElementById("req_attachment").innerHTML = localStorage.getItem("H-attachment");

var table = $('#display').DataTable();
var review = "<button title='view detail' data-toggle='tooltip'><span class='material-icons' type='button' data-toggle='modal' data-target='#modal-reviewed'>visibility</span></button ><button title='delete' data-toggle='tooltip'><span class='material-icons mx-2 text-danger'  data-toggle='modal' data-target='#deletRow-modal'>cancel</span></button >";
// var approve = "<span style='color: green;'>APPROVE</span>"; 
// var reject = "<span style='color: red;'>REJECT</span>";
var History_listData = JSON.parse(localStorage.getItem("ToHistory"));

//display the data in table
for (var i = 0; i <=History_listData.length; i++ ){
    table.row.add([i+1 , History_listData[i].InpFname, History_listData[i].InpLname, History_listData[i].Inptitle, History_listData[i].InpSubmitday, History_listData[i].Inpstatus, review]).draw(false);
}
function DeleteRow(){
    // document.getElementsByTagName("tr")[1].remove();
    let keysToRemove = ["H-firstname", "H-lastname", "H-title", "H-phone", "H-email", "H-TotalLeave", "H-From", "H-to", "H-reason", "H-attachment", "H-submitdate", "H-status"];
    for (key of keysToRemove) {
        localStorage.removeItem(key);
        location.reload();
    }
}

function StatusChange(){
    let STaTus = document.getElementById("reject_status");
    if (STaTus.value =="Reject"){
        STaTus.innerHTML= "APPROVE";
    } 
    else {
        STaTus.innerHTML= "REJECT";
    }
}