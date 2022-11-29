//auto sort and pagination
var t = $('#UM').DataTable();

var action = "<span class='material-icons' title='Edit' data-toggle='tooltip'>edit</span><span class='material-icons text-danger' title='Delete' data-toggle='tooltip'>cancel</span>";
let num = 0;

//auto added data into table
t.row.add([num + 1, 'Sokha', "chan", "Admin", "Phone numbe", "Email", action]).draw(false);
t.row.add([num + 2, 'MArk', "jackson", "General User", "Phone number", "Email", action]).draw(false);
t.row.add([num + 3, 'Thida', "karl", "General User", "Phone numbe", "Email", action]).draw(false);
t.row.add([num + 4, 'Daro', "krosa", "General User", "Phone number", "Email", action]).draw(false);
t.row.add([num + 5, 'vireak', "chan", "General User", "Phone number", "Email", action]).draw(false);
t.row.add([num + 6, 'Kosal', "vicheka", "General User", "Phone number","Email", action]).draw(false);
t.row.add([num + 7, 'Kjoool', "Rosa", "General User", "Phone number", "Email", action]).draw(false);
t.row.add([num + 8, 'forlto', "chanao", "General User", "Phone number", "Email", action]).draw(false);
t.row.add([num+9, 'candaal', "ghiloo", "General User", "Phone number", "Email", action]).draw(false);
t.row.add([num+10, 'Sokha', "chan", "General User", "Phone numbe", "Email", action]).draw(false);
t.row.add([num+11, 'MArk', "jackson", "General User", "Phone number", "Email", action]).draw(false);
t.row.add([num+12, 'Thida', "karl", "General User", "Phone numbe", "Email", action]).draw(false);
t.row.add([num+13, 'Daro', "krosa", "General User", "Phone number", "Email", action]).draw(false);
t.row.add([num+14, 'vireak', "chan", "General User", "Phone number", "Email", action]).draw(false);
t.row.add([num+15, 'Kosal', "vicheka", "General User", "Phone number","Email", action]).draw(false);
t.row.add([num+16, 'Kjoool', "Rosa", "General User", "Phone number", "Email", action]).draw(false);
t.row.add([num+17, 'forlto', "chanao", "General User", "Phone number", "Email", action]).draw(false);
t.row.add([num+18, 'candaal', "ghiloo", "General User", "Phone number", "Email", action]).draw(false);



//create the user function
function createuser() {
    var pass = document.getElementById("new-pass").value;
    var Cpass = document.getElementById("new-cfpass").value;
    var ele = document.getElementsByName('RadioOptions');
    if (pass == Cpass){
        localStorage.setItem("new-Fname", document.getElementById("new-Fname").value);
        localStorage.setItem("new-Lname", document.getElementById("new-Lname").value);
        localStorage.setItem("nnew-phone", document.getElementById("new-phone").value);
        localStorage.setItem("new-email", document.getElementById("new-email").value);
        localStorage.setItem("new-pass", Cpass);
        //check which radio is check
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            localStorage.setItem("new-role", ele[i].value);
        }
        location.reload(true);
    } else{
        document.getElementById("cf-password-validations").innerHTML= "confirm password does not match";
    }
}
 
var New_Email = localStorage.getItem("new-email");
var New_pass = localStorage.get