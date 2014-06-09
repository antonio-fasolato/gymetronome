(function() {
  $().ready(function() {
    var currentIndex, startTimer, timers;
    timers = [];
    currentIndex = null;
    $("#btnAdd").click(function() {
      var d, x;
      d = $("#timerBase").clone();
      x = timers.push(d);
      d.attr("data-array-index", x - 1);
      d.attr("data-initial-value", $("#tbTime").val());
      d.children(".timer").text($("#tbTime").val());
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
      var d, period, timer;
      if (currentIndex === null) {
        currentIndex = 0;
      }
      if (currentIndex === timers.length) {
        return;
      }
      d = timers[currentIndex];
      period = 1000;
      return timer = $.timer(period, function() {
        var x;
        x = d.children(".timer").text();
        x -= period / 1000;
        d.children(".timer").text(x);
        if (x <= 0) {
          d.effect("highlight", {
            color: "#F6FF00"
          }, 1000);
          timer.stop();
          currentIndex++;
          return startTimer();
        } else {
          return currentIndex = null;
        }
      });
    };
    return $("#btnStart").click(function() {
      return startTimer();
    });
  });

}).call(this);
