var responseDate = moment().format("MMMM Do YYYY, h:mm:ss a");
var dayPlanner = $("#planner");
var timeHour = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

$(document).ready(function () {
  $("#todaysDate").append(responseDate);

  $(".saveBtn").click(function () {
    $(this).timeHour().attr("id");
    $(this).dayPlanner("planner").val();
    localStorage.setItem("hour", "value");
    console.log(timeHour, dayPlanner);
  });

  var currentTime = moment().hours();
  for (i = 0; i < timeHour.length; i++) {
    if (timeHour < currentTime) {
      greeting = "Good day";
    }
  }
});
