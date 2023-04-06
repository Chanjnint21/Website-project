var RReview =
  "<button title='review' +data+ data-toggle='tooltip'><span class='material-icons' type='button' data-toggle='modal' data-target='#modal-pending'>rate_review</span></button ><button data-title='delete'>"; //<span class='material-icons'  data-toggle='modal' data-target='#deletRow-modal'>delete</span></button >

//import the data from local storage
var Request_listData = JSON.parse(localStorage.getItem("ToRequestbox"));

let num = 1;
//display the data in table
$("#display").dataTable({
  data: Request_listData,
  autoWidth: false,
  columns: [
    {
      data: "id",
      render: function () {
        return num++;
      },
    },
    { data: "InpFname" },
    { data: "InpLname" },
    { data: "Inptitle" },
    { data: "InpSubmitday" },
    { data: "Inpstatus" },
    {
      data: "id",
      render: function (data, type, row, meta) {
        return RReview;
      },
    },
  ],
});
var table = $("#display").DataTable();

$("#display tbody").on("click", "tr", (event) => {
  var data = table.row(event.currentTarget).data();
  document.getElementById("ModalTitle").innerHTML =
    data.InpFname + "'s Request form";
  document.getElementById("req_fname").innerHTML = data.InpFname;
  document.getElementById("req_lname").innerHTML = data.InpLname;
  document.getElementById("req_phone").innerHTML = data.Inpphone;
  document.getElementById("req_email").innerHTML = data.InpEmail;
  document.getElementById("req_totalleave").innerHTML =
    data.InpTotalleave + " day(s)";
  document.getElementById("req_date").innerHTML = data.InpSubmitday;
  document.getElementById("req_reason").innerHTML = data.InpReason;
  document.getElementById("req_time").innerHTML = data.Inptime;
  if (data.Inpattachment.value == null) {
    document.getElementById("req_attachment").innerHTML = "None";
  } else {
    document.getElementById("req_attachment").innerHTML = data.Inpattachment;
  }
});

//------------------------click Approve request and send to history and Inbox--------------------------
document.getElementById("rejectBtn").addEventListener("click", (e) => {
  e.preventDefault();

  Email.send({
    SecureToken: "fdcf0bfa-c989-4172-b8cb-526987b4574f",
    To: "limchanjnint@gmail.com",
    From: "limchanjnint@gmail.com",
    Subject: "Your form have been Rejected !",
    Body: "Your request form have been rejected by admin user.",
  }).then((message) => console.log(message));

  var existingEntries = JSON.parse(localStorage.getItem("ToHistory"));
  if (existingEntries == null) existingEntries = [];

  var Request_listData = JSON.parse(localStorage.getItem("ToRequestbox"));
  var UserFname = document.getElementById("req_fname").innerHTML;
  var Usertime = document.getElementById("req_time").innerHTML;
  var Userdate = document.getElementById("req_date").innerHTML;
  var historystatus = "REJECT";
  var comment = document.getElementById("comment-text").innerHTML;
  for (var i = 0; i <= Request_listData.length; i++) {
    if (
      Request_listData[i].InpFname == UserFname &&
      Request_listData[i].Inptime == Usertime &&
      Request_listData[i].InpSubmitday == Userdate
    ) {
      const entry = {
        InpFname: Request_listData[i].InpFname,
        InpLname: Request_listData[i].InpLname,
        Inpphone: Request_listData[i].Inpphone,
        InpEmail: Request_listData[i].InpEmail,
        InpLeaveDate: Request_listData[i].InpLeaveDate,
        InpTotalleave: Request_listData[i].InpTotalleave,
        Inptitle: Request_listData[i].Inptitle,
        InpReason: Request_listData[i].InpReason,
        Inpattachment: Request_listData[i].Inpattachment,
        Inpstatus: historystatus,
        InpSubmitday: Request_listData[i].InpSubmitday,
        Inpcomment: comment,
      };
      existingEntries.unshift(entry);
      localStorage.setItem("ToHistory", JSON.stringify(existingEntries));
      Request_listData.splice(i, 1);
      localStorage.setItem("ToRequestbox", JSON.stringify(Request_listData));
      SendReviewToInboxReject();
    }
  }
});

function SendReviewToInboxReject() {
  var Inbox_listData = JSON.parse(localStorage.getItem("ToInbox"));
  var Usertime = document.getElementById("req_time").innerHTML;
  var Inboxstatus = "REJECT";
  var comment = document.getElementById("comment-text").innerHTML;
  var after_review =
    "<button title='view detail' data-toggle='tooltip'><span class='material-icons' data-toggle='modal' data-target='#modal-reviewed'>visibility</span></button >";
  for (var i = 0; i <= Inbox_listData.length; i++) {
    if (Inbox_listData[i].Inptime == Usertime) {
      const entry = {
        InpFname: Inbox_listData[i].InpFname,
        InpLname: Inbox_listData[i].InpLname,
        Inpphone: Inbox_listData[i].Inpphone,
        InpEmail: Inbox_listData[i].InpEmail,
        InpLeaveDate: Inbox_listData[i].InpLeaveDate,
        InpTotalleave: Inbox_listData[i].InpTotalleave,
        Inptitle: Inbox_listData[i].Inptitle,
        InpReason: Inbox_listData[i].InpReason,
        Inpattachment: Inbox_listData[i].Inpattachment,
        Inpstatus: Inboxstatus,
        InpSubmitday: Inbox_listData[i].InpSubmitday,
        pendingmodal: after_review,
        Inpcomment: comment,
      };
      Inbox_listData.push(entry);
      localStorage.setItem("ToInbox", JSON.stringify(Inbox_listData));
      Inbox_listData.splice(i, 1);
      localStorage.setItem("ToInbox", JSON.stringify(Inbox_listData));
      location.reload();
    }
  }
}

//------------------------ click Reject request and send to history and Inbox--------------------------
document.getElementById("approveBtn").addEventListener("click", (e) => {
  e.preventDefault();
  Email.send({
    SecureToken: "fdcf0bfa-c989-4172-b8cb-526987b4574f",
    To: "limchanjnint@gmail.com",
    From: "limchanjnint@gmail.com",
    Subject: "Your form have been Approved !",
    Body: "Your request form have been approved by thr admin user.",
  }).then((message) => console.log(message));
  var existingEntries = JSON.parse(localStorage.getItem("ToHistory"));
  if (existingEntries == null) existingEntries = [];

  var Request_listData = JSON.parse(localStorage.getItem("ToRequestbox"));
  var UserFname = document.getElementById("req_fname").innerHTML;
  var Usertime = document.getElementById("req_time").innerHTML;
  var Userdate = document.getElementById("req_date").innerHTML;
  var historystatus = "APPROVE";
  var comment = document.getElementById("comment-text").innerHTML;
  for (var i = 0; i <= Request_listData.length; i++) {
    if (
      Request_listData[i].InpFname == UserFname &&
      Request_listData[i].Inptime == Usertime &&
      Request_listData[i].InpSubmitday == Userdate
    ) {
      const entry = {
        InpFname: Request_listData[i].InpFname,
        InpLname: Request_listData[i].InpLname,
        Inpphone: Request_listData[i].Inpphone,
        InpEmail: Request_listData[i].InpEmail,
        InpLeaveDate: Request_listData[i].InpLeaveDate,
        InpTotalleave: Request_listData[i].InpTotalleave,
        Inptitle: Request_listData[i].Inptitle,
        InpReason: Request_listData[i].InpReason,
        Inpattachment: Request_listData[i].Inpattachment,
        Inpstatus: historystatus,
        InpSubmitday: Request_listData[i].InpSubmitday,
        Inpcomment: comment,
      };
      existingEntries.unshift(entry);
      localStorage.setItem("ToHistory", JSON.stringify(existingEntries));
      Request_listData.splice(i, 1);
      localStorage.setItem("ToRequestbox", JSON.stringify(Request_listData));
      SendReviewToInbox();
    }
  }
});

function SendReviewToInbox() {
  var Inbox_listData = JSON.parse(localStorage.getItem("ToInbox"));
  var Usertime = document.getElementById("req_time").innerHTML;
  var Inboxstatus = "APPROVE";
  var comment = document.getElementById("comment-text").innerHTML;
  var after_review =
    "<button title='view detail' data-toggle='tooltip'><span class='material-icons' data-toggle='modal' data-target='#modal-reviewed'>visibility</span></button >";
  for (var i = 0; i <= Inbox_listData.length; i++) {
    if (Inbox_listData[i].Inptime == Usertime) {
      const entry = {
        InpFname: Inbox_listData[i].InpFname,
        InpLname: Inbox_listData[i].InpLname,
        Inpphone: Inbox_listData[i].Inpphone,
        InpEmail: Inbox_listData[i].InpEmail,
        InpLeaveDate: Inbox_listData[i].InpLeaveDate,
        InpTotalleave: Inbox_listData[i].InpTotalleave,
        Inptitle: Inbox_listData[i].Inptitle,
        InpReason: Inbox_listData[i].InpReason,
        Inpattachment: Inbox_listData[i].Inpattachment,
        Inpstatus: Inboxstatus,
        InpSubmitday: Inbox_listData[i].InpSubmitday,
        pendingmodal: after_review,
        Inpcomment: comment,
      };
      Inbox_listData.push(entry);
      localStorage.setItem("ToInbox", JSON.stringify(Inbox_listData));
      Inbox_listData.splice(i, 1);
      localStorage.setItem("ToInbox", JSON.stringify(Inbox_listData));
      location.reload();
    }
  }
}

const data = {
  //labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Weekly Sales",
      data: [
        {
          x: ["2023-03-02", "2023-03-08"],
          y: "Employee a",
          name: "backend",
        },
        {
          x: ["2023-03-02", "2023-03-10"],
          y: "Employee b",
          name: "Frontend",
        },
        {
          x: ["2023-03-08", "2023-03-12"],
          y: "Employee c",
          name: "Devop",
        },
        {
          x: ["2023-03-23", "2023-03-25"],
          y: "Employee d",
          name: "Frontend",
        },
      ],
      backgroundColor: [
        "rgba(255, 26, 104, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(0, 0, 0, 0.2)",
      ],
      borderColor: [
        "rgba(255, 26, 104, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(0, 0, 0, 1)",
      ],
      borderWidth: 1,
      borderSkipped: false,
      borderRadius: 10,
      barPercentage: 0.5,
    },
  ],
};
// todayline plgin block
const todayLine = {
  id: "todayLine",
  afterDatasetsDraw(chart, args, pluginOptions) {
    const {
      ctx,
      data,
      chartArea: { top, bottom, left, right },
      scales: { x, y },
    } = chart;
    ctx.save();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgba(255, 26, 104, 1)";
    ctx.setLineDash([6, 6]);
    ctx.moveTo(x.getPixelForValue(new Date()), top);
    ctx.lineTo(x.getPixelForValue(new Date()), bottom);
    ctx.stroke();

    ctx.setLineDash([]);
  },
};

const assignedTasks = {
  id: "assignedTasks",
  afterDatasetsDraw(chart, args, pluginOptions) {
    const {
      ctx,
      data,
      chartArea: { top, bottom, left, right },
      scales: { x, y },
    } = chart;

    ctx.font = "bolder 12px sans-serif";
    ctx.fillStyle = "black";
    ctx.textBaseline = "middle";

    data.datasets[0].data.forEach((datapoint, index) => {
      ctx.fillText(datapoint.name, 10, y.getPixelForValue(index));
    });
  },
};

// config
const config = {
  type: "bar",
  data,
  options: {
    layout: {
      padding: {
        left: 100,
      },
    },
    indexAxis: "y",
    scales: {
      x: {
        position: "top",
        type: "time",
        time: {
          unit: "day",
        },
        min: "2023-03-01",
        max: "2023-05-01",
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
  plugins: [todayLine, assignedTasks],
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);

// Instantly assign Chart.js version
const chartVersion = document.getElementById("chartVersion");
chartVersion.innerText = Chart.version;
