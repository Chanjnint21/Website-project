(function () {
  var Pcmenu_icon = document.getElementById("sidebarCollapse");
  var Mbmenu_icon = document.getElementById("MenusidebarCollapse");

  Pcmenu_icon.addEventListener("click", (x) => {
    sidebartoggle();
  });
  Mbmenu_icon.addEventListener("click", (x) => {
    sidebartoggle();
  });
})();
function sidebartoggle() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    document.getElementById("sidebarCollapse").innerHTML = "menu_open";
    document.getElementById("MenusidebarCollapse").innerHTML = "menu_open";
  } else {
    document.getElementById("sidebarCollapse").innerHTML = "menu";
    document.getElementById("MenusidebarCollapse").innerHTML = "menu";
  }
  document.getElementById("section").classList.toggle("active");
  document.getElementById("afterCollape").classList.toggle("after-collape");
  document.getElementById("beforeCollape").classList.toggle("before-collape");
  document.getElementById("dashboardText").classList.toggle("after-collape");
  document.getElementById("permissionText").classList.toggle("after-collape");
  document.getElementById("inboxText").classList.toggle("after-collape");
  document.getElementById("logoutText").classList.toggle("after-collape");
  document.getElementById("logout").classList.toggle("after-collape");
  document.getElementById("UMtext").classList.toggle("after-collape");
  document.getElementById("sidebar-details").classList.toggle("after-collape");
}

//----------------------------------------------------- date count ---------------------------------------------

function countdays() {
  var dateend = new Date(document.getElementById("leave_date").value);
  var datestart = new Date(document.getElementById("back_date").value);
  var counttime = datestart.getTime() - dateend.getTime();
  var countdays = counttime / (1000 * 3600 * 24);
  document
    .getElementById("noOfDays")
    .setAttribute("value", isNaN(countdays) ? "" : countdays);
  document.getElementById("noOfDays").innerHTML = countdays + "days";
}
//------------------------------------------------------- Logout ---------------------------------------------------

function LogOut() {
  localStorage.removeItem("Login User");
  var wrappe = document.getElementById("wrapper");
  var loader = document.getElementById("loading");
  wrappe.style.display = "none";
  loader.style.display = "block";
  timeou = setTimeout(LogOutnow, 2000);
  // if(timeou == 3){
  //         window.location.href = '../login-page/LogIn.html';
  // }
}
function LogOutnow() {
  window.location.href = "../login-page/LogIn.html";
  localStorage.removeItem("fromButtonRedirect");
}
function pageload() {
  var Accept = localStorage.getItem("fromButtonRedirect");
  if (Accept !== "yes") {
    window.location.href = "../login-page/LogIn.html";
  }
}
function loadvalue() {
  var Accept = localStorage.getItem("fromButtonRedirect");
  if (Accept !== "yes") {
    window.location.href = "../login-page/LogIn.html";
  }
  var myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("elem").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

var logginuser = JSON.parse(localStorage.getItem("Login User"));
document.getElementById("UserPageName").innerHTML =
  logginuser.Lname + " " + logginuser.Fname;
