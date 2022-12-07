//auto sort and pagination
// var table = $('#UsM').DataTable();
var action = "<button data-toggle='modal' +data+ data-target='#edit-UsM'><span class='material-icons' title='Edit' data-toggle='tooltip'>edit</span></button> <button  data-toggle='modal' data-target='#RemoveUser-modal'><span class='material-icons text-danger' title='Delete' data-toggle='tooltip' >cancel</span></button>";

var UserList = JSON.parse(localStorage.getItem("Total User"));
// console.log(UserList);
// for (var i = 0; i <=UserList.length; i++ ){
//     table.row.add([i+1 , UserList[i].InpFname, UserList[i].InpLname, UserList[i].InpRole, UserList[i].Inpphone, UserList[i].InpEmail, action ]).draw(false);
// }
let num = 1;
$('#UsM').dataTable( {
    "data": UserList,
    "autoWidth": false,
    "columns": [
        {"data": "id",
            "render": function(){
                return num++;
            }
        },
        {"data": "InpFname"},        
        {'data': 'InpLname'},
        {'data': 'InpRole'},
        {'data': 'Inpphone'},
        {'data': 'InpEmail'},
        {"data": "id",
            "render": function ( data, type, row, meta ) { 
                return action
                }
        }
     ]
} )
var table = $('#UsM').DataTable();

$('#UsM').on( 'click', 'tr',  (event) =>  {
    var data = table.row( event.currentTarget ).data()
    document.getElementById("ModalTitle").innerHTML = data.InpFname + "'s Request form";
    document.getElementById("EditFname").value = data.InpFname;
    document.getElementById("EditLname").value = data.InpLname;
    document.getElementById("Editphone").value = data.Inpphone;
    document.getElementById("Editemail").value = data.InpEmail;
    document.getElementById("Editpass").value = data.InpPassword;
});

//create the user function
function createuser() {
    //open the array of total user that have been store in local storage
    var TotalUser = JSON.parse(localStorage.getItem("Total User"));
        if(TotalUser == null) TotalUser = [];
    
    //get value from modal input
    var newFname = document.getElementById("new-Fname").value;
    var newLname =  document.getElementById("new-Lname").value;
    var newPhone = document.getElementById("new-phone").value;
    var newEmail = document.getElementById("new-email").value;
    var pass = document.getElementById("new-pass").value;
    var Cpass = document.getElementById("new-cfpass").value;
    var ele = document.getElementsByName('RadioOptions');

    // get the value from radio check admin or user
    let Role;
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            Role = ele[i].value;
        }
    };

    if (newFname == "" || newLname == "" || newPhone == "" || newEmail == "" || pass == "" || Cpass == ""){
        document.getElementById("cf-password-validations").innerHTML= "Please complete all the requirements";
    } else if(Cpass !== pass){
        document.getElementById("cf-password-validations").innerHTML= "confirm password does not match";
    } else {
        const NewUser = {
            "InpFname": newFname,
            "InpLname": newLname,
            "Inpphone": newPhone,
            "InpEmail": newEmail,
            "InpPassword": Cpass,
            "InpRole": Role,
        }
        localStorage.setItem("Recent adde User", JSON.stringify(NewUser));
        
        // Save allEntries back to local storage
        TotalUser.unshift(NewUser);
        localStorage.setItem("Total User", JSON.stringify(TotalUser));
        // document.getElementById("submit_form").addEventListener("click", function() {
        //     createuser();
        // }, false);
        location.reload();
    }
}

function RemoveUser(){
    $('#UsM').on( 'click', 'tr',  (event) =>  {
        var data = table.row( event.currentTarget ).data()
        let keysToRemove = [data.InpFname, data.InpLname, data.Inpphone, data.InpEmail, data.InpPassword, data.InpRole];
            for (key of keysToRemove) {
                localStorage.removeItem(key);
                location.reload();
            }
    });
    
}

function cancelAddeduser(){
    location.reload();
}

function SeePass(){
    var Eye = document.getElementById("eye");
    Eye.addEventListener('click', show_hide()) 
    function show_hide(){
        var password = document.getElementById("Editpass");
        if (password.type ==="password"){
            password.type ="text";
            document.getElementById("eye").innerHTML = "visibility";
        } else {
            password.type = "password";
            document.getElementById("eye").innerHTML = "visibility_off";
        }
    }
}