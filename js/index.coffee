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
        period = 1000
        timer = $.timer period, ->
            console.log "Tick - currentIndex [#{currentIndex}]"
            if currentIndex == null
                currentIndex = 0;
            if currentIndex == timers.length
                timer.stop()
                return
            d = timers[currentIndex]

            x = d.children(".timer").text()
            x -= period / 1000
            d.children(".timer").text(x)
            if x <= 0
                d.effect "highlight", {color:"#F6FF00"}, 1000
                currentIndex++

    $("#btnStart").click ->
        startTimer()
