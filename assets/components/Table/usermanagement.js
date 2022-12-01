//auto sort and pagination
var t = $('#UsM').DataTable();

const new_Fname = localStorage.getItem("new-Fname");
const new_Lname =localStorage.getItem("new-Lname");
const new_Role = localStorage.getItem("new-role");
const new_phone = localStorage.getItem("new-phone");
const new_email = localStorage.getItem("new-email");
const action = "<button data-toggle='modal' data-target='#edit-UsM'><span class='material-icons' title='Edit' data-toggle='tooltip'>edit</span></button> <button  data-toggle='modal' data-target='#RemoveUser-modal'><span class='material-icons text-danger' title='Delete' data-toggle='tooltip' >cancel</span></button>";
var newuser = localStorage.getItem("new-email");
let num;
if (newuser !== null){
    num = 1;
    t.row.add([num + 0, new_Fname, new_Lname, new_Role, new_phone, new_email, action]).draw(false);
} else {
    num = 0;
}

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
    var newFname = document.getElementById("new-Fname").value;
    var newLname =  document.getElementById("new-Lname").value;
    var newPhone = document.getElementById("new-phone").value;
    var newEmail = document.getElementById("new-email").value;
    var pass = document.getElementById("new-pass").value;
    var Cpass = document.getElementById("new-cfpass").value;
    if (newFname == "" || newLname == "" || newPhone == "" || newEmail == "" || pass == "" || Cpass == ""){
        document.getElementById("cf-password-validations").innerHTML= "Plz complete all the requirements";
    } else {
        CreatedNow();
    }
}
function CreatedNow(){
    var newFname = document.getElementById("new-Fname").value;
    var newLname =  document.getElementById("new-Lname").value;
    var newPhone = document.getElementById("new-phone").value;
    var newEmail = document.getElementById("new-email").value;
    var pass = document.getElementById("new-pass").value;
    var Cpass = document.getElementById("new-cfpass").value;
    var ele = document.getElementsByName('RadioOptions');
    if (pass == Cpass){
        localStorage.setItem("new-Fname", newFname);
        localStorage.setItem("new-Lname", newLname);
        localStorage.setItem("new-phone", newPhone);
        localStorage.setItem("new-email", newEmail);
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

function RemoveUser(){
    let keysToRemove = ["new-Fname", "new-Lname", "new-phone", "new-pass", "new-role", "new-email"];
    for (key of keysToRemove) {
        localStorage.removeItem(key);
        location.reload();
    }
}

function cancelAddeduser(){
    location.reload();
}

function SeePass(){
    var Eye = document.getElementById("eye");
    Eye.addEventListener('click', show_hide()) 
    function show_hide(){
        var password = document.getElementById("seeUsM-pass");
        if (password.type ==="password"){
            password.type ="text";
            document.getElementById("eye").innerHTML = "visibility";
        } else {
            password.type = "password";
            document.getElementById("eye").innerHTML = "visibility_off";
        }
    }
}