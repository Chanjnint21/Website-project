$(document).ready(function () {
    document.getElementById("req_fname").innerHTML = localStorage.getItem("firstname");
    document.getElementById("req_lname").innerHTML = localStorage.getItem("lastname");
    document.getElementById("req_phone").innerHTML = localStorage.getItem("phone");
    document.getElementById("req_email").innerHTML = localStorage.getItem("email");
    document.getElementById("req_totalleave").innerHTML = localStorage.getItem("TotalLeave") + "days";
    document.getElementById("req_date").innerHTML = localStorage.getItem("From") + " to " + localStorage.getItem("To");
    document.getElementById("req_reason").innerHTML = localStorage.getItem("reason");
    document.getElementById("req_attachment").innerHTML = localStorage.getItem("attachment");

    // elem.classList.remove('show');
    //             // this force-restarts the CSS animation
    //             void elem.offsetWidth;
    //         elem.classList.add('show');
    var t = $('#display').DataTable();
    var firstname = localStorage.getItem("firstname");
    var lastname = localStorage.getItem("lastname");
    var title = localStorage.getItem("title");
    var subdate = localStorage.getItem("submitdate");
    var review = "<img src='https://icons.veryicon.com/png/o/education-technology/smart-campus-1/view-details-2.png' type='button' data-toggle='modal' data-target='#modal-reviewed'/>";
    var status = localStorage.getItem("status");
    // $('#btnn').on('click', function () {
    //     if (localStorage.getItem("firstname") === null){
    //         elem.classList.remove('show');
    //             // this force-restarts the CSS animation
    //             void elem.offsetWidth;
    //         elem.classList.add('show');
    //             // setTimeout(alert("no New Request !"), 5000);
    //     } else {
    //         elem.classList.remove('show');
    //             // this force-restarts the CSS animation
    //             void elem.offsetWidth;
    //         elem.classList.add('show');
    //         t.row.add([num1, firstname, lastname, title, subdate, reviewPEN, status]).draw(false);
    //     }
    // });
    var approve = 'APPROVE'; 
    var reject = 'REJECT';
    if (status == null){
        var num2 = 1;
        var num3 = 2;
        var num4 = 3;
        var num5 = 4;
        var num6 = 5;
        var num7 = 6;
        var num8 = 7;
        var num9 = 8;
        var num10 = 9;
    } else {
        var num1 = 1;
        var num2 = 2;
        var num3 = 3;
        var num4 = 4;
        var num5 = 5;
        var num6 = 6;
        var num7 = 7;
        var num8 = 8;
        var num9 = 9;
        var num10 = 10;
        t.row.add([num1, firstname, lastname, title, subdate, review, status]).draw(false);
    }

    // Automatically add a first row of data
    t.row.add([num2, 'Sokha', "chan", "Phcum Ben", "12/07/2022", review, approve]).draw(false);
    t.row.add([num3, 'MArk', "jackson", "title", "12/06/2022", review, approve]).draw(false);
    t.row.add([num4, 'Thida', "karl", "Phcum Ben", "12/07/2022", review, approve]).draw(false);
    t.row.add([num5, 'Daro', "krosa", "title", "12/05/2022", review, reject]).draw(false);
    t.row.add([num6, 'vireak', "chan", "Phcum Ben", "12/09/2022", review, reject]).draw(false);
    t.row.add([num7, 'Kosal', "vicheka", "title", "13/07/2022",review, reject]).draw(false);
    t.row.add([num8, 'Kjoool', "Rosa", "title", "24/05/2022", review, reject]).draw(false);
    t.row.add([num9, 'forlto', "chanao", "Phcum Ben", "31/09/2022", review, reject]).draw(false);
    t.row.add([num10, 'candaal', "ghiloo", "title", "12/10/2022", review, reject]).draw(false);
    
});