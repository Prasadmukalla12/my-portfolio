 var tip=""
       var pattern=/ /
       function countryChange(){
        var poster=document.getElementById("poster");
        var country=document.getElementById("selectCountry").value;
        var mobile=document.getElementById("txtMobile");
        switch(country){
            case "India":
            pattern=/\+91\d{10}/
            poster.src="../../public/images/ind.jpg"
            tip="+91 and 10 digit number"
            break
            case "U.S":
            pattern=/\+\(1\)\(000\)\s000-0000/
            poster.src="../../public/images/us.png"
            tip="+(1)(000) 000-0000"
            break
            case "Russia":
            pattern=/\+\(44\)\s\(0000\)\(0000\)/
            poster.src="../../public/images/rus.jpg"
            tip="+(44) (0000)(0000)"
        }
        mobile.placeholder=tip
       }
       function verifyMobile(){
        var mobile=document.getElementById("txtMobile").value
        var suggest=document.getElementById("suggest");
        if(mobile.match(pattern)){
            document.write("<h2>Verification Success</h2>")
        }else{
            suggest.innerHTML=`${tip} Please enter format`.fontcolor('red')
        }
       }