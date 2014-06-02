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
