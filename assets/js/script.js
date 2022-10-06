//----------------------------------------------------- hide/show side bar ---------------------------------------------

(function() {
    document.getElementById("sidebarCollapse").addEventListener('click', (e) => {
        document.getElementById("sidebar").classList.toggle("active");
        document.getElementById("body").classList.toggle("active");
    });
})();

//----------------------------------------------------- button change color ---------------------------------------------

function btn1(){
    var elem = document.getElementById("Apr-btn1");
    if (elem.value=="Reject"){
        elem.value = "Approve";
        elem.style.color='green';
    } 
    else {
        elem.value = "Reject";
        elem.style.color='red';
        document.getElementsByTagName("tr")[1].remove();
    }
}

function btn2(){
    var elem = document.getElementById("Apr-btn2");
    if (elem.value=="Reject"){
        elem.value = "Approve";
        elem.style.color='green';
    } 
    else {
        elem.value = "Reject";
        elem.style.color='red';
        document.getElementsByTagName("tr")[2].remove();
    }
}

function btn3(){
    var elem = document.getElementById("Apr-btn3");
    if (elem.value=="Reject"){
        elem.value = "Approve";
        elem.style.color='green';
    } 
    else {
        elem.value = "Reject";
        elem.style.color='red';
        document.getElementsByTagName("tr")[3].remove();
    }
}

var tbl = document.getElementById('x');
if(tbl.rows.length==0){
    document.getElementById("text").innerHTML = 'No Request';
}

document.getElementById('#myModal').on('shown.bs.modal', function () {
    document.getElementById('#myInput').trigger('focus')
  })

