var table = $('#display').DataTable();
var review = "<button title='view detail' data-toggle='tooltip'><span class='material-icons' type='button' data-toggle='modal' data-target='#modal-reviewed'>visibility</span></button ><button title='delete' data-toggle='tooltip'><span class='material-icons mx-2 text-danger'  data-toggle='modal' data-target='#deletRow-modal'>cancel</span></button >";
var History_listData = JSON.parse(localStorage.getItem("ToHistory"));

// display the data in table
for (var i = 0; i <=History_listData.length; i++ ){
    table.row.add([i+1 , History_listData[i].InpFname, History_listData[i].InpLname, History_listData[i].Inptitle, History_listData[i].InpSubmitday, History_listData[i].Inpstatus, review]).draw(false);
}

// function DeleteRow(){
//     // document.getElementsByTagName("tr")[1].remove();
//     let keysToRemove = ["H-firstname", "H-lastname", "H-title", "H-phone", "H-email", "H-TotalLeave", "H-From", "H-to", "H-reason", "H-attachment", "H-submitdate", "H-status"];
//     for (key of keysToRemove) {
//         localStorage.removeItem(key);
//         location.reload();
//     }
// }

function StatusChange(){
    let STaTus = document.getElementById("reject_status");
    if (STaTus.value =="Reject"){
        STaTus.innerHTML= "APPROVE";
    } 
    else {
        STaTus.innerHTML= "REJECT";
    }
}