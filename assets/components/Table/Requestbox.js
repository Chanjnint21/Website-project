document.getElementById("ModalTitle").innerHTML = localStorage.getItem("firstname")+"'s form";
    document.getElementById("req_fname").innerHTML = localStorage.getItem("firstname");
    document.getElementById("req_lname").innerHTML = localStorage.getItem("lastname");
    document.getElementById("req_phone").innerHTML = localStorage.getItem("phone");
    document.getElementById("req_email").innerHTML = localStorage.getItem("email");
    document.getElementById("req_totalleave").innerHTML = localStorage.getItem("TotalLeave") + "days";
    document.getElementById("req_date").innerHTML = localStorage.getItem("From") + " to " + localStorage.getItem("To");
    document.getElementById("req_reason").innerHTML = localStorage.getItem("reason");
    document.getElementById("req_attachment").innerHTML = localStorage.getItem("attachment");

    var t = $('#display').DataTable();
    var firstname = localStorage.getItem("firstname");
    var lastname = localStorage.getItem("lastname");
    var title = localStorage.getItem("title");
    var subdate = localStorage.getItem("submitdate");
    var review = "<button title='review' data-toggle='tooltip'><span class='material-icons' type='button' data-toggle='modal' data-target='#modal-pending'>rate_review</span></button ><button data-title='delete'>"; //<span class='material-icons'  data-toggle='modal' data-target='#deletRow-modal'>delete</span></button >
    var localstatus = localStorage.getItem("status");
    var req_status = "<button data-toggle='modal' data-target='#comfirm-modal' data-title='change status' ><span id='demo1' value=''>PENDING</span></button>";
    let num;
    if (localstatus !== null){
        num = 1;
        t.row.add([num, firstname, lastname, title, subdate, req_status, review]).draw(false);
    } else {
        num = 0;
    }

    // Automatically add a first row of data
    t.row.add([num + 1, 'Sokha', "chan", "Phcum Ben", "12/07/2022", req_status, review]).draw(false);
    t.row.add([num + 2, 'MArk', "jackson", "Water festival", "12/06/2022", req_status, review]).draw(false);
    t.row.add([num + 3, 'Thida', "karl", "Phcum Ben", "12/07/2022", req_status, review]).draw(false);
    t.row.add([num + 4, 'Daro', "krosa", "Khmer New yeat", "15/04/2022", req_status, review]).draw(false);
    t.row.add([num + 5, 'vireak', "chan", "Funeral", "10/03/2022", req_status, review]).draw(false);
    t.row.add([num + 6, 'Kosal', "vicheka", "title", "13/07/2021",req_status, review]).draw(false);
    t.row.add([num + 7, 'Kjoool', "Rosa", "title", "24/05/2021", req_status, review]).draw(false);
    t.row.add([num + 8, 'forlto', "chanao", "titlw", "31/1/2021", req_status, review]).draw(false);
    t.row.add([num + 9, 'candaal', "ghiloo", "title", "12/1/2021", req_status, review]).draw(false);
    
function Approve(){
    localStorage.removeItem("status");
    localStorage.setItem("H-status", "APPROVE");
    movetohistory()
}

function Reject(){
    localStorage.removeItem("status");
    localStorage.setItem("H-status", "REJECT");
    movetohistory()
}

function movetohistory() {
    localStorage.setItem("H-firstname", firstname);
    localStorage.setItem("H-lastname", lastname);
    localStorage.setItem("H-title", title);
    localStorage.setItem("H-submitdate", subdate);
    localStorage.setItem("H-reason", localStorage.getItem("reason"));
    localStorage.setItem("H-email", localStorage.getItem("email"));
    localStorage.setItem("H-phone", localStorage.getItem("reason"));
    localStorage.setItem("H-From", localStorage.getItem("From"));
    localStorage.setItem("H-to", localStorage.getItem("To"));
    localStorage.setItem("H-to", localStorage.getItem("TotalLeave"));
    localStorage.setItem("H-attachment", localStorage.getItem("attachment"));

    let keysToRemove = ["firstname", "lastname", "title", "phone", "email", "TotalLeave", "From", "To", "reason", "attachment", "submitdate", "status"];
    for (key of keysToRemove) {
        localStorage.removeItem(key);
        location.reload();
    }
}
