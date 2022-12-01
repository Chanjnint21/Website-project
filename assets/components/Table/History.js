
var t = $('#display').DataTable();

var firstname = localStorage.getItem("H-firstname");;
var lastname = localStorage.getItem("H-lastname");
var title = localStorage.getItem("H-title");
var subdate = localStorage.getItem("H-submitdate");
var H_status = localStorage.getItem("H-status");
if (H_status == "APPROVE"){
    var DoneReviewed = "<span data-toggle='modal' id='status' data-target='#comfirm-modal' style='color: green;'>" + localStorage.getItem("H-status") + "</span>";
} else {
    var DoneReviewed = "<span data-toggle='modal' id='status' data-target='#comfirm-modal' style='color: red;'>" + localStorage.getItem("H-status") + "</span>";
}

document.getElementById("ModalTitle").innerHTML = firstname +"'s form";
document.getElementById("req_fname").innerHTML = firstname;
document.getElementById("req_lname").innerHTML = lastname;
document.getElementById("req_phone").innerHTML = localStorage.getItem("H-phone");
document.getElementById("req_email").innerHTML = localStorage.getItem("H-email");
document.getElementById("req_totalleave").innerHTML = localStorage.getItem("H-TotalLeave") + "days";
document.getElementById("req_date").innerHTML = localStorage.getItem("H-From") + " to " + localStorage.getItem("H-To");
document.getElementById("req_reason").innerHTML = localStorage.getItem("H-reason");
document.getElementById("req_attachment").innerHTML = localStorage.getItem("H-attachment");


var review = "<button data-title='review'><img src='https://icons.veryicon.com/png/o/education-technology/smart-campus-1/view-details-2.png' type='button' data-toggle='modal' data-target='#modal-reviewed'/></button ><button data-title='delete'><span class='material-icons mx-2'  data-toggle='modal' data-target='#deletRow-modal'>delete</span></button >";
var approve = "<span data-toggle='modal' id='status' style='color: green;'>APPROVE</span>"; 
var reject = "<span data-toggle='modal' data-target='#comfirm-modal' style='color: red;'>REJECT</span>";
let num;

if (H_status !== null){
    num = 1;
    t.row.add([num, firstname, lastname, title, subdate,  DoneReviewed, review]).draw(false);
} else {
    num =0;
}

t.row.add([num + 1, 'Sokha', "chan", "Phcum Ben", "12/07/2022", approve, review]).draw(false);
t.row.add([num + 2, 'MArk', "jackson", "title", "12/06/2022", reject, review]).draw(false);
t.row.add([num + 3, 'Thida', "karl", "Phcum Ben", "12/07/2022", approve, review]).draw(false);
t.row.add([num + 4, 'Daro', "krosa", "title", "12/05/2022", reject, review]).draw(false);
t.row.add([num + 5, 'vireak', "chan", "Phcum Ben", "12/09/2022", reject, review]).draw(false);
t.row.add([num + 6, 'Kosal', "vicheka", "title", "13/07/2022",approve, review]).draw(false);
t.row.add([num + 7, 'Kjoool', "Rosa", "title", "24/05/2022", approve, review]).draw(false);
t.row.add([num + 8, 'forlto', "chanao", "Phcum Ben", "31/09/2022", approve, review]).draw(false);
t.row.add([num+9, 'candaal', "ghiloo", "title", "12/10/2022", reject, review]).draw(false);
//
t.row.add([num+10, 'Sokha', "chan", "Phcum Ben", "12/07/2022", reject, review]).draw(false);
t.row.add([num+11, 'MArk', "jackson", "title", "12/06/2022", approve, review]).draw(false);
t.row.add([num+12, 'Thida', "karl", "Phcum Ben", "12/07/2022", approve, review]).draw(false);
t.row.add([num+13, 'Daro', "krosa", "title", "12/05/2022", reject, review]).draw(false);
t.row.add([num+14, 'vireak', "chan", "Phcum Ben", "12/09/2022", reject, review]).draw(false);
t.row.add([num+15, 'Kosal', "vicheka", "title", "13/07/2022",reject, review]).draw(false);
t.row.add([num+16, 'Kjoool', "Rosa", "title", "24/05/2022", reject, review]).draw(false);
t.row.add([num+17, 'forlto', "chanao", "Phcum Ben", "31/09/2022", reject, review]).draw(false);
t.row.add([num+18, 'candaal', "ghiloo", "title", "12/10/2022", reject, review]).draw(false);

function DeleteRow(){
    // document.getElementsByTagName("tr")[1].remove();
    let keysToRemove = ["H-firstname", "H-lastname", "H-title", "H-phone", "H-email", "H-TotalLeave", "H-From", "H-to", "H-reason", "H-attachment", "H-submitdate", "H-status"];
    for (key of keysToRemove) {
        localStorage.removeItem(key);
        location.reload();
    }
}

function statuschange(){
    var elem = document.getElementById("status");
    if (elem.value=="Reject"){
        elem.value = "Approve";
        elem.style.color='green';
        document.getElementById("status").innerHTML= "APPROVE";
    } 
    else {
        elem.value = "Reject";
        elem.style.color='red';
        document.getElementById("status").innerHTML= "REJECT";
    }
}