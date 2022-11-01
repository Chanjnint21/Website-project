$(document).ready(function () {
    var t = $('#display').DataTable();
    var num1 = 1;
    var num2 = 1;
    var num3 = 2;
    var firstname = localStorage.getItem("firstname");
    var lastname = localStorage.getItem("lastname");
    var title = localStorage.getItem("title");
    var subdate = localStorage.getItem("submitdate");
    var reviewPEN = "<span type='button' class='material-icons' data-toggle='modal' data-target='#modal-pending'>_reviews</span>";
    var reviewAPP = "<span type='button' class='material-icons' data-toggle='modal' data-target='#modal-reviewed'>_reviews</span>";
    var reviewREJ = "<span type='button' class='material-icons' data-toggle='modal' data-target='#modal-reviewed'>_reviews</span>";
    var status = localStorage.getItem("status");

    $('#btnn').on('click', function () {
        if (localStorage.getItem("firstname") === null){
            elem.classList.remove('show');
                // this force-restarts the CSS animation
                void elem.offsetWidth;
            elem.classList.add('show');
                // setTimeout(alert("no New Request !"), 5000);
        } else {
            elem.classList.remove('show');
                // this force-restarts the CSS animation
                void elem.offsetWidth;
            elem.classList.add('show');
            t.row.add([num1, firstname, lastname, title, subdate, reviewPEN, status]).draw(false);
        }
    });

    // Automatically add a first row of data
    t.row.add(['2', 'Sokha', "chan", "Phcum Ben", "12/09/2022", reviewAPP, "PENDING"]).draw(false);
    t.row.add(['3', 'MArk', "jackson", "title", "12/09/2022", reviewAPP, "PENDING"]).draw(false);
    t.row.add(['4', 'Thida', "karl", "Phcum Ben", "12/09/2022", reviewAPP, "PENDING"]).draw(false);
    t.row.add(['5', 'Daro', "krosa", "title", "12/09/2022", reviewAPP, "PENDING"]).draw(false);
    t.row.add(['6', 'vireak', "chan", "Phcum Ben", "12/09/2022", reviewAPP, "PENDING"]).draw(false);
    t.row.add(['7', 'Kosal', "vicheka", "title", "12/09/2022", reviewAPP, "PENDING"]).draw(false);
});