//Make the webinar date always show the 15th of next month

var d = new Date();
var currentDay = d.getDate();
var currentMonth = d.getMonth();

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var n = month[setMonth()];
var year = setYear();
var date = document.getElementById('webinar-date');

function setYear() {
  if(currentMonth != 11) {
    year = d.getFullYear();
  }
  else {
    year = d.getFullYear() + 1;
  }
  return year;
}

function setMonth() {
  if (currentMonth != 11){
    month = currentMonth + 1;
  }
  else {
    month = 1;
  }
  return month;
}

function changeDate(){
  date.innerText = n + ' 15 ' + year;
}

changeDate();

//Countdown Clock

var webinarDate = new Date(n + "15, 2018 13:00:00").getTime();

var runClock = setInterval(function() {

    // Today's date and time
    var now = new Date().getTime();

    // Distance between now and the webinar date
    var distance = webinarDate - now;

    // Days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("clock").innerHTML = days + " Days || " + hours + " Hrs || "
    + minutes + " Min || " + seconds + " Sec ";
}, 1000);
