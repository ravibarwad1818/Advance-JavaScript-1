function clock(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = addZero(h);
    m = addZero(m);
    s = addZero(s);
    document.getElementById("clockbox").innerHTML = h + ' : ' + m + ' : ' + s + '';
    setTimeout(clock,1000);

    var months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curDay+" / "+curMonth+" / "+curYear;
    document.getElementById("date").innerHTML = date;
  }

 display();
 function stopTimer(){
  if (timer !== -1){
    clearInterval(timer);
    timer=-1;
  }
 }

 function startTimer(){
  if (timer === -1){
    timer=setInterval(display,1000);
  }
 }

  function addZero(x){
    if (x < 10) {
      x = "0" + x;
    }
    return x;
  }