//--------------------------------------------------- store form input into local storage ---------------------------------------------

// get title from localstrorage to display in form
const Titles = JSON.parse(localStorage.getItem("Titles"));
const title = document.querySelector("#Formtitle");
for (let i = 0; i < Titles.length; i++) {
  const newOpt = document.createElement("option");
  newOpt.innerText = Titles[i].title;
  newOpt.value = Titles[i].title;
  title.appendChild(newOpt);
}

document.getElementById("paperform").addEventListener("submit", (e) => {
  e.preventDefault();

  var InboxEntries = JSON.parse(localStorage.getItem("ToInbox"));
  if (InboxEntries == null) InboxEntries = [];
  var RequestEntries = JSON.parse(localStorage.getItem("ToRequestbox"));
  if (RequestEntries == null) RequestEntries = [];

  var inputFname = document.getElementById("firstname").value;
  var inputLname = document.getElementById("lastname").value;
  var inputPhone = document.getElementById("phone").value;
  var inputEmail = document.getElementById("email").value;
  var inputLeaveDate =
    document.getElementById("leave_date").value +
    " to " +
    document.getElementById("back_date").value;
  var inputTotalleave = document.getElementById("noOfDays").value;
  const OPtvalue = document.getElementById("Formtitle").value;
  // var OPtvalue = opt.value;
  // var OPtvalue = e.options[e.selectedIndex].text;
  // var inputtitle = document.getElementById("title").value;
  var inputReason = document.getElementById("reason").value;
  var inputattachment = document.getElementById("attachment").value;
  var pending_review =
    "<button title='view detail' data-toggle='tooltip'><span class='material-icons' data-toggle='modal' data-target='#modal-pending'>edit</span></button >";
  var status = "PENDING";

  if (
    inputFname == "" ||
    inputLname == "" ||
    inputPhone == "" ||
    inputEmail == ""
  ) {
    alert("Please complete all the requirement");
  } else if (inputReason == "" || inputLeaveDate == "") {
    alert("Please complete all the requirement");
  } else {
    // send email to the Admin
    Email.send({
      SecureToken: "fdcf0bfa-c989-4172-b8cb-526987b4574f",
      To: "limchanjnint@gmail.com",
      From: "limchanjnint@gmail.com",
      Subject: "New Pedning Form Submitted ",
      Body: `The new Pending Form is Requested by ${inputFname} ${inputLname}.`,
    }).then((message) => console.log(message));

    // Get the date of submit form event
    const event = new Date();
    const years = { year: "numeric" };
    const months = { month: "numeric" };
    const days = { day: "numeric" };

    const year = event.toLocaleDateString("en-Us", years);
    const month = event.toLocaleDateString("en-Us", months);
    const day = event.toLocaleDateString("en-Us", days);

    const submitDate = day + "/" + month + "/" + year;
    var current_time =
      event.getHours() + ":" + event.getMinutes() + ":" + event.getSeconds();

    const entry = {
      InpFname: inputFname,
      InpLname: inputLname,
      Inpphone: inputPhone,
      InpEmail: inputEmail,
      InpLeaveDate: inputLeaveDate,
      InpTotalleave: inputTotalleave,
      Inptitle: OPtvalue,
      InpReason: inputReason,
      Inpattachment: inputattachment,
      Inpstatus: status,
      InpSubmitday: submitDate,
      Inptime: current_time,
      pendingmodal: pending_review,
    };

    // Save allEntries back to local storage
    InboxEntries.unshift(entry);
    RequestEntries.unshift(entry);
    localStorage.setItem("ToInbox", JSON.stringify(InboxEntries));
    localStorage.setItem("ToRequestbox", JSON.stringify(RequestEntries));
    //window.location.href = "Inbox.html";
    location.reload();
  }
});
