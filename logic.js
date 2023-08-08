var y = 2024;
var countDownDate = new Date("Jan 1, " + y.toString() + " 00:00:00").getTime();
var x = setInterval(function A() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + "<br>days";
  document.getElementById("hours").innerHTML = hours + "<br>hrs";
  document.getElementById("minutes").innerHTML = minutes + "<br>mins";
  document.getElementById("seconds").innerHTML = seconds + "<br>secs";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);

    document.getElementById("days").innerHTML = 0;
    document.getElementById("hours").innerHTML = 0;
    document.getElementById("minutes").innerHTML = 0;
    document.getElementById("seconds").innerHTML = 0;
    let exp = document.getElementById("expired");
    exp.style.display = "block";
  }
}, 1000);
