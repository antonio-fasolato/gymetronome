root = exports ? this

root.timers = []
root.currentIndex = null

root.app =
    initialize : ->
        this.bindEvents();

    bindEvents : ->
        $("#btnAdd").click(this.btnAddClicked)
        $("#btnClear").click(this.btnClearClicked)
        $("#btnStart").click(this.btnStartClicked)

    btnAddClicked: ->
          d = $("#timerBase").clone()
          
          x = timers.push(d)
          d.attr("data-array-index", x - 1)
          d.attr("data-initial-value", $("#tbTime").val())
          d.children(".timer").text($("#tbTime").val())
          d.appendTo("#tblTimers")
          d.show(500)
          $("#tbTime").val("")

    btnClearClicked: ->
        (t.hide 500 if t != null) for t in timers

    btnStartClicked: ->
        if root.currentIndex == null
            root.currentIndex = 0;
            d = root.timers[root.currentIndex]
            alert d.children(".timer").text()
