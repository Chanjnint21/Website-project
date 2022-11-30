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
    var review = "<button data-title='review'><img src='https://icons.veryicon.com/png/o/education-technology/smart-campus-1/view-details-2.png' type='button' data-toggle='modal' data-target='#modal-pending'/></button ><button data-title='delete'>"; //<span class='material-icons'  data-toggle='modal' data-target='#deletRow-modal'>delete</span></button >
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
    t.row.add([num + 2, 'MArk', "jackson", "title", "12/06/2022", req_status, review]).draw(false);
    t.row.add([num + 3, 'Thida', "karl", "Phcum Ben", "12/07/2022", req_status, review]).draw(false);
    t.row.add([num + 4, 'Daro', "krosa", "title", "12/05/2022", req_status, review]).draw(false);
    t.row.add([num + 5, 'vireak', "chan", "Phcum Ben", "12/09/2022", req_status, review]).draw(false);
    t.row.add([num + 6, 'Kosal', "vicheka", "title", "13/07/2022",req_status, review]).draw(false);
    t.row.add([num + 7, 'Kjoool', "Rosa", "title", "24/05/2022", req_status, review]).draw(false);
    t.row.add([num + 8, 'forlto', "chanao", "Phcum Ben", "31/09/2022", req_status, review]).draw(false);
    t.row.add([num + 9, 'candaal', "ghiloo", "title", "12/10/2022", req_status, review]).draw(false);
    

    // document.getElementById("Reject").addEventListener("click", Rbtn)
    // function Rbtn(){
    //     var btn = document.getElementById("demo1");
    //     btn.value="REJECT"
    //     btn.style.color="red";
    //     document.getElementById("demo1").innerHTML= "REJECT";
    // }
    // document.getElementById("Approve").addEventListener("click", Abtn)
    // function Abtn(){
    //     var btn = document.getElementById("demo1");
    //     btn.value="APPROVE"
    //     btn.style.color="green";
    //     document.getElementById("demo1").innerHTML= "APPROVE";
    // }

// function status1(){
//     var elem = document.getElementById("demo1");
//     if (elem.value=="Reject"){
//         elem.value = "Approve";
//         elem.style.color='green';
//         document.getElementById("demo1").innerHTML= "APPROVE";
//     } 
//     else {
//         elem.value = "Reject";
//         elem.style.color='red';
//         document.getElementById("demo1").innerHTML= "REJECT";
//     }
// }

function movetohistory() {

    // document.getElementsByTagName("tr")[1].remove();

}
