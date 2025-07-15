 function RangeAmount(){
            document.getElementById("Amount").value=document.getElementById("RangeAmount").value;
        }
        function InputAmount(){
            document.getElementById("RangeAmount").value=document.getElementById("Amount").value;
        }
        function RangeYear(){
            document.getElementById("Year").value=document.getElementById("RangeYear").value;
        }
        function InputYear(){
            document.getElementById("RangeYear").value=document.getElementById("Year").value;
        }
        function RangeRate(){
            document.getElementById("Rate").value=document.getElementById("RangeRate").value;
        }
        function InputRate(){
            document.getElementById("RangeRate").value=document.getElementById("Rate").value;
        }
        function Caluculate(){
            var A=parseInt(document.getElementById("Amount").value);
            var M=parseInt(document.getElementById("Year").value)*12;
            var I=parseFloat(document.getElementById("Rate").value)/12/100;
            var EMI=A*I*(Math.pow(1+I,M))/(Math.pow(1+I,M)-1);
            document.getElementById("result").innerHTML=`Your monthly EMI will be :<span class="fw-bold fs-4 text-primary">${Math.round(EMI).toLocaleString("en-in", {style:"currency",currency:"INR",minimumFractionDigits:0})}</span>per month`
        }