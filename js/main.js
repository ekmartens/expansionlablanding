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
  date.innerText = n + ' ' + currentDay + ' ' + year;
}

changeDate();
