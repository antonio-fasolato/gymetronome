(function() {
  $().ready(function() {
    var currentIndex, pad, startTimer, timers;
    timers = [];
    currentIndex = null;
    pad = function(n, width, z) {
      var toReturn;
      z = z || '0';
      n = n + '';
      toReturn = '';
      if (n.length >= width) {
        toReturn = n;
      } else {
        toReturn = new Array(width - n.length + 1).join(z) + n;
      }
      return toReturn;
    };
    $("#btnAdd").click(function() {
      var d, date, seconds, x;
      d = $("#timerBase").clone();
      x = timers.push(d);
      d.attr("data-array-index", x - 1);
      d.attr("data-initial-value", $("#tbTime").val());
      seconds = $("#tbTime").val();
      date = new Date(1970, 0, 1);
      date.setSeconds(seconds);
      d.find(".timer").text(pad(date.getMinutes(), 2) + ":" + pad(date.getSeconds(), 2));
      d.appendTo("#tblTimers");
      d.show(500);
      return $("#tbTime").val("");
    });
    $("#btnClear").click(function() {
      var t, _i, _len;
      for (_i = 0, _len = timers.length; _i < _len; _i++) {
        t = timers[_i];
        if (t !== null) {
          t.hide(500);
        }
      }
      return timers = [];
    });
    startTimer = function() {
      var period, timer;
      period = 1000;
      return timer = $.timer(period, function() {
        var d, x;
        console.log("Tick - currentIndex [" + currentIndex + "]");
        if (currentIndex === null) {
          currentIndex = 0;
        }
        if (currentIndex === timers.length) {
          timer.stop();
          return;
        }
        d = timers[currentIndex];
        x = d.children(".timer").text();
        x -= period / 1000;
        d.children(".timer").text(x);
        if (x <= 0) {
          d.effect("highlight", {
            color: "#F6FF00"
          }, 1000);
          return currentIndex++;
        }
      });
    };
    return $("#btnStart").click(function() {
      return startTimer();
    });
  });

}).call(this);
