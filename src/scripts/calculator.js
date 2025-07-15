 function addItem(add){
           document.getElementById("txtValue").value+=add
        }
        function clearClick(){
             document.getElementById("txtValue").value=""
        }
        function calculateClick(){
           document.getElementById("txtValue").value = eval(document.getElementById("txtValue").value)
        }
        function deleteClick() {
            document.getElementById("txtValue").value = document.getElementById("txtValue").value.slice(0, -1);
        }