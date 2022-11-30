    document.getElementById("req_fname").innerHTML = localStorage.getItem("firstname");
    document.getElementById("ModalTitle").innerHTML = localStorage.getItem("firstname") + "'s form";
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
    var pending_review = "<button title='view detail' data-toggle='tooltip'><img src='https://icons.veryicon.com/png/o/education-technology/smart-campus-1/view-details-2.png' type='button' data-toggle='modal' data-target='#modal-pending'/></button >";
    var Already_review = "<button title='view detail' data-toggle='tooltip'><img src='https://icons.veryicon.com/png/o/education-technology/smart-campus-1/view-details-2.png' type='button' data-toggle='modal' data-target='#modal-reviewed'/></button >";
    var reviw_status = localStorage.getItem("status");
    var approve = "<span style='color: green;'>APPROVE</span>"; 
    var reject = "<span style='color: red;'>REJECT</span>";
    if (reviw_status == null){
        for (let i=1; i<11 ; i++){
            t.row.add([i, 'Sokha', "chan", "Phcum Ben", "12/07/2022", approve, Already_review]).draw(false);
        }
        for (let j=11; j<21 ; j++){
            t.row.add([j, 'Sokha', "chan", "Phcum Ben", "12/07/2022", reject, Already_review]).draw(false);
        }
    } else {
        var num1 = 1;
        t.row.add([num1, firstname, lastname, title, subdate, reviw_status, pending_review]).draw(false);
        for (var i=2; i<12 ; i++){
            t.row.add([i, 'Sokha', "chan", "Phcum Ben", "12/07/2022", approve, Already_review]).draw(false);
        }
        for (let j=11; j<21 ; j++){
            t.row.add([j, 'Sokha', "chan", "Phcum Ben", "12/07/2022", reject, Already_review]).draw(false);
        }
    }
    