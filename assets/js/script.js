(function() {
    document.getElementById("sidebarCollapse").addEventListener('click', (e) => {
        document.getElementById("sidebar").classList.toggle("active");
        document.getElementById("body").classList.toggle("active");
    });
})();
//----------------------------------------------------- button in (details) request page ---------------------------------------------

    document.getElementById("Reject").addEventListener("click", Rbtn)
    function Rbtn(){
        var btn = document.getElementById("demo1");
        btn.value="Reject"
        btn.style.color="red";
        document.getElementById("demo1").innerHTML= "Reject";
    }
    document.getElementById("Approve").addEventListener("click", Abtn)
    function Abtn(){
        var btn = document.getElementById("demo1");
        btn.value="Approve"
        btn.style.color="green";
        document.getElementById("demo1").innerHTML= "Approve";
    }


// function btn1(){
//     var btn = document.getElementById("demo1");
//     btn.value="Approve"
//     btn.style.color="green";
//     document.getElementById("demo1").innerHTML= "Approve";
// }

function btn2(){
    var btn = document.getElementById("demo2");
    btn.value="Approve"
    btn.style.color="green";
    document.getElementById("demo2").innerHTML= "Approve";
    // }
}

function btn3(){
    var btn = document.getElementById("demo3");
    btn.value="Approve"
    btn.style.color="green";
    document.getElementById("demo3").innerHTML= "Approve";
    //     document.getElementsByTagName("tr")[3].remove();
}
//----------------------------------------------------- button in request page ---------------------------------------------
function status1(){
    var elem = document.getElementById("demo1");
    if (elem.value=="Reject"){
        elem.value = "Approve";
        elem.style.color='green';
        document.getElementById("demo1").innerHTML= "Approve";
    } 
    else {
        elem.value = "Reject";
        elem.style.color='red';
        document.getElementById("demo1").innerHTML= "Reject";
    }
}

function status2(){
    var elem = document.getElementById("demo2");
    if (elem.value=="Reject"){
        elem.value = "Approve";
        elem.style.color='green';
        document.getElementById("demo2").innerHTML= "Approve";
    } 
    else {
        elem.value = "Reject";
        elem.style.color='red';
        document.getElementById("demo2").innerHTML= "Reject";
    }
}

function status3(){
    var elem = document.getElementById("demo3");
    if (elem.value=="Reject"){
        elem.value = "Approve";
        elem.style.color='green';
        document.getElementById("demo3").innerHTML= "Approve";
    } 
    else {
        elem.value = "Reject";
        elem.style.color='red';
        document.getElementById("demo3").innerHTML= "Reject";
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
    document.getElementById("noOfDays").innerHTML = countdays + "days";
  }

//--------------------------------------------------- comfirm modal ---------------------------------------------
function del(){
    document.getElementsByTagName("tr")[3].remove();
}

//--------------------------------------------------- show/hide password ---------------------------------------------
