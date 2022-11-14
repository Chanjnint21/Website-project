$(document).ready(function () {
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
    var review = "<img src='https://icons.veryicon.com/png/o/education-technology/smart-campus-1/view-details-2.png' type='button' data-toggle='modal' data-target='#modal-reviewed'/>";
    var localstatus = localStorage.getItem("status");
    var status = "<button data-toggle='modal' data-target='#comfirm-modal' data-title='change status' ><span id='demo1' value=''>PENDING</span></button>";
    var approve = "<span style='color: green;'>APPROVE</span>"; 
    var reject = "<span style='color: red;'>REJECT</span>";
    var checkbox= "<input  type='checkbox' name= 'checkedbox' id='Check' onclick='showremovebtn()' class='select'/>";
    
    if (localstatus !== null){
        t.row.add([checkbox, firstname, lastname, title, subdate, review, status]).draw(false);
    } 
    // Automatically add a first row of data

    t.row.add([checkbox, 'Sokha', "chan", "Phcum Ben", "12/07/2022", review, approve]).draw(false);
    t.row.add([checkbox, 'MArk', "jackson", "title", "12/06/2022", review, approve]).draw(false);
    t.row.add([checkbox, 'Thida', "karl", "Phcum Ben", "12/07/2022", review, approve]).draw(false);
    t.row.add([checkbox, 'Daro', "krosa", "title", "12/05/2022", review, reject]).draw(false);
    t.row.add([checkbox, 'vireak', "chan", "Phcum Ben", "12/09/2022", review, reject]).draw(false);
    t.row.add([checkbox, 'Kosal', "vicheka", "title", "13/07/2022",review, reject]).draw(false);
    t.row.add([checkbox, 'Kjoool', "Rosa", "title", "24/05/2022", review, reject]).draw(false);
    //
    t.row.add([checkbox, 'Sokha', "chan", "Phcum Ben", "12/07/2022", review, approve]).draw(false);
    t.row.add([checkbox, 'MArk', "jackson", "title", "12/06/2022", review, approve]).draw(false);
    t.row.add([checkbox, 'Thida', "karl", "Phcum Ben", "12/07/2022", review, approve]).draw(false);
    t.row.add([checkbox, 'Daro', "krosa", "title", "12/05/2022", review, reject]).draw(false);
    t.row.add([checkbox, 'vireak', "chan", "Phcum Ben", "12/09/2022", review, reject]).draw(false);
    t.row.add([checkbox, 'Kosal', "vicheka", "title", "13/07/2022",review, reject]).draw(false);
    t.row.add([checkbox, 'Kjoool', "Rosa", "title", "24/05/2022", review, reject]).draw(false);
    t.row.add([checkbox, 'Sokha', "chan", "Phcum Ben", "12/07/2022", review, approve]).draw(false);
    t.row.add([checkbox, 'MArk', "jackson", "title", "12/06/2022", review, approve]).draw(false);
    t.row.add([checkbox, 'Thida', "karl", "Phcum Ben", "12/07/2022", review, approve]).draw(false);
    t.row.add([checkbox, 'Daro', "krosa", "title", "12/05/2022", review, reject]).draw(false);
    t.row.add([checkbox, 'vireak', "chan", "Phcum Ben", "12/09/2022", review, reject]).draw(false);
    t.row.add([checkbox, 'Kosal', "vicheka", "title", "13/07/2022",review, reject]).draw(false);
    t.row.add([checkbox, 'Kjoool', "Rosa", "title", "24/05/2022", review, reject]).draw(false);
    // t.row.add([checkbox, 'forlto', "chanao", "Phcum Ben", "31/09/2022", review, reject]).draw(false);
    // t.row.add([checkbox, 'candaal', "ghiloo", "title", "12/10/2022", review, reject]).draw(false);
    

    document.getElementById("Reject").addEventListener("click", Rbtn)
    function Rbtn(){
        var btn = document.getElementById("demo1");
        btn.value="REJECT"
        btn.style.color="red";
        document.getElementById("demo1").innerHTML= "REJECT";
    }
    document.getElementById("Approve").addEventListener("click", Abtn)
    function Abtn(){
        var btn = document.getElementById("demo1");
        btn.value="APPROVE"
        btn.style.color="green";
        document.getElementById("demo1").innerHTML= "APPROVE";
    }
});

function status1(){
    var elem = document.getElementById("demo1");
    if (elem.value=="Reject"){
        elem.value = "Approve";
        elem.style.color='green';
        document.getElementById("demo1").innerHTML= "Approve";
    } 
    else {
        elem.value = "Reject";
        elem.style.color='red';
        document.getElementById("demo1").innerHTML= "Reject";
    }
}


function DeleteRow() {
    document.querySelectorAll('#display .select:checked').forEach(e => {
      e.parentNode.parentNode.remove();
    });
}

// document.getElementById('all').addEventListener('click', allrow)
// function allrow(){
//     var selectall = $('table').find('input');
//     selectall.prop('checked', 'checked');
// }

function checkUncheck(checkBox) {
    var get = document.getElementsByName('checkedbox');
    for(var i=0; i<get.length; i++) {
        get[i].checked = checkBox.checked;
    }
}

function showremovebtn(){
    // let checkBox = document.getElementsByClassName("select");
    // let checkBoxx = document.getElementsByName('checkedbox');
    let checkBox = document.getElementById('Check');
    var BtnRemove = document.getElementById("removeBtn");
        if (checkBox.checked == true){
            BtnRemove.style.display = "block";
        } else {
            BtnRemove.style.display = "none";
        }
}