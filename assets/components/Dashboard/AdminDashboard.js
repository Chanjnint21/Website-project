// var Accept =  localStorage.getItem('fromButtonRedirect');
// if (Accept !== 'yes') {
//     window.location.href = "../login-page/LogIn.html";
// }
//Import the list data of Inbox page from local storage
var Reqest_listData = JSON.parse(localStorage.getItem("ToRequestbox"));
var History_listData = JSON.parse(localStorage.getItem("ToHistory"));
var User_listData = JSON.parse(localStorage.getItem("Total User"));

//display memeber and admin
var totaluser = User_listData.length;
document.getElementById("TotalMember").innerHTML= totaluser;
let totaladmin = 0;
const countadmin = User_listData.some(element => {
    if (element.InpRole === "Admin"){
        totaladmin++;
    }
});
document.getElementById("TotalAdmin").innerHTML= totaladmin;

//display total request and pending
var TotalRequestData = Reqest_listData.length;
console.log(TotalRequestData);
var TotalHistoryData;
if(History_listData == null){
    TotalHistoryData = 0;
} else{
    TotalHistoryData = History_listData.length;
}
console.log(TotalHistoryData);

let TotalData = TotalRequestData + TotalHistoryData;
// 
document.getElementById("AdminTotal").innerHTML= TotalData;
document.getElementById("AdminPending").innerHTML= TotalRequestData;

// Display Total approve pending and reject
let totalapprove = 0;
let totalreject = 0;

const isFound = History_listData.some(element => {
    if (element.Inpstatus === "APPROVE"){
        totalapprove++;
    } else if (element.Inpstatus === "REJECT"){
        totalreject++;
    }
});

document.getElementById("AdminApprove").innerHTML= totalapprove;
document.getElementById("AdminReject").innerHTML= totalreject;

$(window).unload(function() {
    localStorage.removeItem('fromButtonRedirect');
});