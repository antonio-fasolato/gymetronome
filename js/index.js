(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.timers = [];

  root.currentIndex = null;

  root.app = {
    initialize: function() {
      return this.bindEvents();
    },
    bindEvents: function() {
      $("#btnAdd").click(this.btnAddClicked);
      $("#btnClear").click(this.btnClearClicked);
      return $("#btnStart").click(this.btnStartClicked);
    },
    btnAddClicked: function() {
      var d, x;
      d = $("#timerBase").clone();
      x = timers.push(d);
      d.attr("data-array-index", x - 1);
      d.attr("data-initial-value", $("#tbTime").val());
      d.children(".timer").text($("#tbTime").val());
      d.appendTo("#tblTimers");
      d.show(500);
      return $("#tbTime").val("");
    },
    btnClearClicked: function() {
      var t, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = timers.length; _i < _len; _i++) {
        t = timers[_i];
        _results.push(t !== null ? t.hide(500) : void 0);
      }
      return _results;
    },
    btnStartClicked: function() {
      var d;
      if (root.currentIndex === null) {
        root.currentIndex = 0;
        d = root.timers[root.currentIndex];
        return alert(d.children(".timer").text());
      }
    }
  };

}).call(this);
