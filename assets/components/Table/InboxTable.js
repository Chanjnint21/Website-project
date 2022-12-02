    document.getElementById("req_fname").value = localStorage.getItem("firstname");
    document.getElementById("ModalTitle").innerHTML = localStorage.getItem("firstname") + "'s form";
    document.getElementById("req_lname").value = localStorage.getItem("lastname");
    document.getElementById("req_phone").value = localStorage.getItem("phone");
    document.getElementById("req_email").value = localStorage.getItem("email");
    document.getElementById("req_totalleave").value = localStorage.getItem("TotalLeave") + "days";
    document.getElementById("req_date").value = localStorage.getItem("From") + " to " + localStorage.getItem("To");
    document.getElementById("req_reason").value = localStorage.getItem("reason");
    document.getElementById("req_attachment").value = localStorage.getItem("attachment");


    var t = $('#display').DataTable();
    var listData = localStorage.getItem("DataList");
    // console.log('datalist',listData)
    
    var firstname = localStorage.getItem("firstname");
    var lastname = localStorage.getItem("lastname");
    var title = localStorage.getItem("title");
    var subdate = localStorage.getItem("submitdate");
    var pending_review = "<button title='view detail' data-toggle='tooltip'><span class='material-icons' data-toggle='modal' data-target='#modal-pending'>edit</span></button > <button type='button' title='edit' data-toggle='tooltip'><span class='material-icons text-danger' data-toggle='modal' data-target='#comfirm-modal'>cancel</span></button>";
    var Already_review = "<button title='view detail' data-toggle='tooltip'><span class='material-icons' type='button' data-toggle='modal' data-target='#modal-reviewed'>visibility</span></button >";
    var reviw_status = localStorage.getItem("status");
    var approve = "<span style='color: green;'>APPROVE</span>"; 
    var reject = "<span style='color: red;'>REJECT</span>";
    let num;
    if (reviw_status == null){
        num = 0;
    } else {
        num = 1;
        // t.row.add([num , listData[0].firstname, listData[0].lastname, title, subdate, reviw_status, pending_review]).draw(false);
        // t.row.add([num+5 , listData[1].firstname, listData[1].lastname, title, subdate, reviw_status, pending_review]).draw(false);
    }
    t.row.add([num + 1, 'Chanjnint', "Lim", "Phcum Ben", "10/07/2022", approve, Already_review]).draw(false);
    t.row.add([num + 2, 'Chanjnint', "Lim", "Home sick", "10/07/2022", reject, Already_review]).draw(false);
    t.row.add([num + 3, 'Chanjnint', "Lim", "Khmer New Year", "4/12/2022", approve, Already_review]).draw(false);

function deleteRequest(){
    let keysToRemove = ["firstname", "lastname", "title", "phone", "email", "TotalLeave", "From", "To", "reason", "attachment", "submitdate", "status"];
    for (key of keysToRemove) {
        localStorage.removeItem(key);
        location.reload();
    }
}