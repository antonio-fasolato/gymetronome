$().ready ->
    timers = []
    currentIndex = null

    pad = (n, width, z) ->
      z = z || '0'
      n = n + ''
      toReturn = ''
      if(n.length >= width)
        toReturn = n
      else
        toReturn = new Array(width - n.length + 1).join(z) + n
      return toReturn

    $("#btnAdd").click ->
      d = $("#timerBase").clone()
      
      x = timers.push(d)
      d.attr("data-array-index", x - 1)
      d.attr("data-initial-value", $("#tbTime").val())
      seconds = $("#tbTime").val()
      date = new Date(1970,0,1)
      date.setSeconds(seconds)
      d.find(".timer,.timer-orig").text(pad(date.getMinutes(), 2) + ":" + pad(date.getSeconds(), 2))
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

            x = d.find(".timer").text()
            x -= period / 1000
            d.find(".timer").text(x)
            if x <= 0
                d.effect "highlight", {color:"#F6FF00"}, 1000
                currentIndex++

    $("#btnStart").click ->
        startTimer()
