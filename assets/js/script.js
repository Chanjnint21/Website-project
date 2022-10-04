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
    }
}