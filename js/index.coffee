$().ready ->
    timers = []
    currentIndex = null

    $("#btnAdd").click ->
      d = $("#timerBase").clone()
      
      x = timers.push(d)
      d.attr("data-array-index", x - 1)
      d.attr("data-initial-value", $("#tbTime").val())
      d.children(".timer").text($("#tbTime").val())
      d.appendTo("#tblTimers")
      d.show(500)
      $("#tbTime").val("")

    $("#btnClear").click ->
        (t.hide 500 if t != null) for t in timers
        timers = []

    startTimer = ->
        if currentIndex == null
            currentIndex = 0;
        if currentIndex == timers.length
            return
        d = timers[currentIndex]
        period = 1000
        timer = $.timer period, ->
            x = d.children(".timer").text()
            x -= period / 1000
            d.children(".timer").text(x)
            if x <= 0
                d.effect "highlight", {color:"#F6FF00"}, 1000
                timer.stop()
                currentIndex++
                startTimer()
            else
                #fine
                currentIndex = null

    $("#btnStart").click ->
        startTimer()
