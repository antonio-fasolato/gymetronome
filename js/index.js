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
      return $("#btnClear").click(this.btnClearClicked);
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
    }
  };

  /*
  var timers = [];
  var currentIndex = null;
  
  var app = {
      // Application Constructor
      initialize: function() {
          this.bindEvents();
      },
  
      bindEvents: function() {
      
          $("#btnAdd").click(this.btnAddClicked);
          $("#btnClear").click(this.btnClearClicked);
          $("#btnStart").click(this.btnStartClicked);
      },
  
      btnAddClicked: function () {
          var d = $("#timerBase").clone();
          
          var x = timers.push(d);
          d.attr("data-array-index", x - 1);
          d.attr("data-initial-value", $("#tbTime").val());
          d.children(".timer").text($("#tbTime").val());
          d.appendTo("#tblTimers");
          d.show(500);
          $("#tbTime").val("");
      },
      
      btnClearClicked: function() {
        $.each(timers, function(index, value) {
          if(value !== null) {
              value.hide(500, function() {
                  value.remove();
              });
              timers[index] = null;
          }
        });
      },
      
      btnStartClicked: function() {
          if(currentIndex === null) {
              currentIndex = 0;
              this.startTimer();
          }
      },
  };
  */


}).call(this);
