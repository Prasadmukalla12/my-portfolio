var h=0
       var m=0
       var s=0
       var ms=0
       function timer(){
        ms++
        if(ms===99){
            s++
            ms=0
        }
        if(s===59){
            m++
            s=0
        }
        if(m===59){
            h++
            m=0
        }
        document.getElementById("hours").innerHTML=h+"hrs"
        document.getElementById("min").innerHTML=m+"m"
        document.getElementById("sec").innerHTML=s+"s"
        document.getElementById("millisec").innerHTML=ms+"ms"
       }
       var t1
       function start(){
        t1=setInterval(timer,10)
       }
       function stop(){
        clearInterval(t1)
        h=0
        m=0
        s=0
        ms=0
       document.getElementById("hours").innerHTML=h+"hrs"
        document.getElementById("min").innerHTML=m+"m"
        document.getElementById("sec").innerHTML=s+"s"
        document.getElementById("millisec").innerHTML=ms+"ms"
       }