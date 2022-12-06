//Import the list data of Inbox page from local storage
var listData = JSON.parse(localStorage.getItem("ToInbox"));


// Total Request display value
let TotalData = listData.length;
document.getElementById("UsertotalRequest").innerHTML= TotalData;

// Display Total approve pending and reject
let totalpending = 0;
let totalapprove = 0;
let totalreject = 0;

const isFound = listData.some(element => {
    if (element.Inpstatus === "PENDING") {
        totalpending++;
    } else if (element.Inpstatus === "APPROVE"){
        totalapprove++;
    } else if (element.Inpstatus === "REJECT"){
        totalreject++;
    }
});
document.getElementById("UserPending").innerHTML= totalpending;
document.getElementById("UserApprove").innerHTML= totalapprove;
document.getElementById("UserReject").innerHTML= totalreject;