let myInterval;
let time = 0;
let count = 3;
let countdown;
let timer = 11;

const clear = "";
function tick() {
  let handleTick = () => {
  ticks+= 3,5,7;
  
var ticks = Math.floor(1 + Math.random() * 900);
    // connect this to a pause button instead of condition
    if (ticks !== -1 ) {
      document.getElementById("rand").value = ticks;
      document.getElementById("start").disabled = true;
      document.getElementById("verify").disabled = true;
    } else {
      ticks = 0;
    };
}
   myInterval = setInterval(handleTick, 1);
}
function stopInterval() {
  var data = document.getElementById("rand").value;
  if ( clear !== data) {
    confirm("Your code is" + " " +data);
    clearInterval(myInterval);
    document.getElementById("rand").value = clear;
    document.getElementById("check").value = data;
    document.getElementById("verify").disabled = false;
    document.getElementById("btn").disabled = false;
  } else if (data == clear) {
    alert("No code generated!");
  clearInterval(myInterval);
  } else if (myInterval = "") {
  document.getElementById("rand").value = "";
  }
}
  function verify() {
    var code = document.getElementById("verify").value;
    var data = document.getElementById("check").value;
    var error = "";
    var counter = count - time;
   if (data == code & code !== error) {
     confirm("Code is valid, you may proceed.");
    document.getElementById("check").value = "";
    document.getElementById("verify").value = "";
    time = 0;
    document.getElementById("start").disabled = false
   } else if (code !== data | code == error , time < 3) {
     alert("Invalid code, Try again." + " " +counter +" " + "attempt(s) remaining.");
     document.getElementById("verify").value = "";
     time++;
     document.getElementById("check").value = "";
     document.getElementById("rand").value = "";
     document.getElementById("start").disabled = false;
     clearInterval(myInterval);
   } else if (time >= 3) {
     alert("Verification attempts exceeded.");
     document.getElementById("verify").value = "";
     document.getElementById("verify").disabled = true;
     document.getElementById("start").disabled = true;
     document.getElementById("stop").disabled = true;
     document.getElementById("btn").disabled = true;
     document.getElementById("check").value = "";
     document.getElementById("rand").value = "";
     const limit = timeCount();
     countdown = setInterval(limit,2000);
   }
   }
function timeCount() {
  return value = () => {
    timer-= 1;
document.getElementById("time").innerHTML = "Try again in:" + " " +timer + " "+"sec";
document.getElementById("start").disabled = true;
if (myInterval < 10) {
clearInterval(myInterval);
document.getElementById("rand").value = "";
} else {
 document.getElementById("rand").value = "";
}
if (timer == 0) {
  clearInterval(countdown);
  document.getElementById("time").innerText = "";
  document.getElementById("btn").disabled = false;
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = false;
  time = 0;
  timer = 11;
}
}
}
