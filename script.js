// docuement ready jquery
$(document).ready(function () {
  // added current time in jumbotron
  var currentDay = $("#currentDay").text(
    moment().format("MMMM Do YYYY, h:mm:ss a")
  );

  // save button to on click function
  $(".saveBtn").on("click", function () {
    // created variables for value and time
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // store to local storage when user puts the time and the description of their activities
    localStorage.setItem(time, value);
  });

  // created currenHour variable to used in the if statement
  var currentHour = moment().hours();

  // this code was borrow from a github user the link is below
  // https://github.com/nicolewallace09/work-day-scheduler/blob/master/assets/script.js
  // creating each hour variable to be able to used it with if statement
  var hour9 = 9;
  var hour10 = 10;
  var hour11 = 11;
  var hour12 = 12;
  var hour1 = 13;
  var hour2 = 14;
  var hour3 = 15;
  var hour4 = 16;
  var hour5 = 17;

  // I tried looping the hours but I kept getting undefined on my local storage and with this code it allows to use the if statement
  // Since I created a variable for each hour, I had to use the if statement and $(this) to be able to add a class
  // using the === makes the statement true
  // if statement for each hour and adding time description
  if (currentHour < hour9) {
    $(this).addClass("future");
  } else if (currentHour > hour9) {
    $(this).addClass("past");
  } else if (currentHour === hour9) {
    $(this).addClass("present");
  }

  if (currentHour < hour10) {
    $(this).addClass("future");
  } else if (currentHour > hour10) {
    $(this).addClass("past");
  } else if (currentHour === hour10) {
    $(this).addClass("present");
  }

  if (currentHour < hour11) {
    $(this).addClass("future");
  } else if (currentHour > hour11) {
    $(this).addClass("past");
  } else if (currentHour === hour11) {
    $(this).addClass("present");
  }

  if (currentHour < hour12) {
    $(this).addClass("future");
  } else if (currentHour > hour12) {
    $(this).addClass("past");
  } else if (currentHour === hour12) {
    $(this).addClass("present");
  }
  if (currentHour < hour1) {
    $(this).addClass("future");
  } else if (currentHour > hour1) {
    $(this).addClass("past");
  } else if (currentHour === hour1) {
    $(this).addClass("present");
  }

  if (currentHour < hour2) {
    $(this).addClass("future");
  } else if (currentHour > hour2) {
    $(this).addClass("past");
  } else if (currentHour === hour2) {
    $(this).addClass("present");
  }

  if (currentHour < hour3) {
    $(this).addClass("future");
  } else if (currentHour > hour3) {
    $(this).addClass("past");
  } else if (currentHour === hour3) {
    $(this).addClass("present");
  }

  if (currentHour < hour4) {
    $(this).addClass("future");
  } else if (currentHour > hour4) {
    $(this).addClass("past");
  } else if (currentHour === hour4) {
    $(this).addClass("present");
  }
  if (currentHour < hour5) {
    $(this).addClass("future");
  } else if (currentHour > hour5) {
    $(this).addClass("past");
  } else if (currentHour === hour5) {
    $(this).addClass("present");
  }
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-1 .description").val(localStorage.getItem("hour-1"));
  $("#hour-2 .description").val(localStorage.getItem("hour-2"));
  $("#hour-3 .description").val(localStorage.getItem("hour-3"));
  $("#hour-4 .description").val(localStorage.getItem("hour-4"));
  $("#hour-5 .description").val(localStorage.getItem("hour-5"));
});
