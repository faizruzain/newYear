const newYears = "1 Jan 2021";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000);
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60

  $("#days").html(days);
  $("#hours").html(hours);
  if (minutes < 10) {
    $("#minutes").html("0" + minutes);
  } else {
    $("#minutes").html(minutes);
  }
  if (seconds < 10) {
    $("#seconds").html("0" + seconds);
  } else {
    $("#seconds").html(seconds);
  }
}

// function formatTime(time) {
//   return time < 10 ? '0${time}' : time;
// }

countdown();
setInterval(countdown, 1000);
// alert("helo");
