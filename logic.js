var y = 2024;
var countDownDate = new Date("Jan 1, " + y.toString() + " 00:00:00").getTime();
var x = setInterval(function A() {
  // Get today"s date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (days > 334)
    // january
    document.getElementById("message").innerHTML = "welcome to a new year";
  if (days > 305 && days < 334)
    //february
    document.getElementById("message").innerHTML =
      "enjoy a month filled with love";
  if (days > 182 && days < 305)
    // march-june
    document.getElementById("message").innerHTML =
      "getting closer to half year";
  if (days > 62 && days < 182)
    // july - october
    document.getElementById("message").innerHTML = "second half of the year";
  if (days > 31 && days < 62)
    // november
    document.getElementById("message").innerHTML = "november goes by fast";

  document.getElementById("days").innerHTML = days + "<br>days";
  document.getElementById("hours").innerHTML = hours + "<br>hrs";
  document.getElementById("minutes").innerHTML = minutes + "<br>mins";
  document.getElementById("seconds").innerHTML = seconds + "<br>secs";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);

    y += 1;
    console.log(y);
    countDownDate = new Date("Jan 1, " + y.toString() + " 00:00:00").getTime();
    console.log(countDownDate);
    x = setInterval(A(), 1000);
  }
}, 1000);
