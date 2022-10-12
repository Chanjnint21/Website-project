//----------------------------------------------------- hide/show side bar ---------------------------------------------

(function() {
    document.getElementById("sidebarCollapse").addEventListener('click', (e) => {
        document.getElementById("sidebar").classList.toggle("active");
        document.getElementById("body").classList.toggle("active");
    });
})();

//----------------------------------------------------- button in request page ---------------------------------------------

function btn1(){
    document.getElementsByTagName("tr")[1].remove();
}

function btn2(){
    var elem = document.getElementById("Apr-btn2");
    document.getElementsByTagName("tr")[2].remove();
    // if (elem.value=="Reject"){
    //     elem.value = "Approve";
    //     elem.style.color='green';
    // } 
    // else {
    //     elem.value = "Reject";
    //     elem.style.color='red';
    //     document.getElementsByTagName("tr")[2].remove();
    // }
}

function btn3(){
    var btn = document.getElementById("demo");
    btn.value="Approve"
    btn.style.color="green";
    document.getElementById("demo").innerHTML= "Approve";
    // if (elem.value=="Reject"){
    //     elem.value = "Approve";
    //     elem.style.color='green';
    // } 
    // else {
    //     elem.value = "Reject";
    //     elem.style.color='red';
    //     document.getElementsByTagName("tr")[3].remove();
    // }
}
//----------------------------------------------------- button in request page ---------------------------------------------
function status1(){
    var elem = document.getElementById("stat-btn1");
    if (elem.value=="Reject"){
        elem.value = "Approve";
        elem.style.color='green';
    } 
    else {
        elem.value = "Reject";
        elem.style.color='red';
    }
}



var tbl = document.getElementById('x');
if(tbl.rows.length==0){
    document.getElementById("text").innerHTML = 'No Request';
}


//----------------------------------------------------- date count ---------------------------------------------

function countdays () {
    var dateend = new Date (document.getElementById("leave_date").value);
    var datestart = new Date (document.getElementById("back_date").value);
    var counttime =  datestart.getTime()- dateend.getTime();
    var countdays = counttime / (1000 * 3600 * 24);
    document.getElementById("noOfDays").setAttribute("value", isNaN(countdays) ? '' : countdays);
    document.getElementById("noOfDays").innerHTML = 'Leave in total of : ' + countdays + "days";
  }