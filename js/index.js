var app = {
    timers: [],
    
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        $("#btnAdd").click(this.btnAddClicked);
    },

    btnAddClicked: function () {
        var d = $("#timerBase").clone();
        var x = this.timers.push(d);
        d.attr("data-array-index", x - 1);
        d.children(".timer").text($("#tbTime").val());
        d.appendTo("#tblTimers");
        d.show(500);
        $("#tbTime").val("");
    }
};
