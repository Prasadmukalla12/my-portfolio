function bookclick(){
            document.getElementById("main-button").style.display="none";
            document.getElementById("summary").style.display="block";


           var prasad=document.getElementById("all-movies").value;
            if(prasad=="Subham"){
                document.getElementById("img-poster").src="../../public/images/subham.jpg";
            }
            else{
                document.getElementById("img-poster").src="../../public/images/single.jpg";
            }
            document.getElementById("moviename").textContent=document.getElementById("all-movies").value
            document.getElementById("moviedate").textContent=document.getElementById("all-dates").value;
            document.getElementById("movietime").textContent=document.getElementById("all-times").value;
            document.getElementById("movietheatre").textContent=document.getElementById("all-places").value;
         }
         function editing(){
            document.getElementById("prasad").textContent="Modify ticket";
            document.getElementById("btnbook").textContent="Ok";
            document.getElementById("btnbook").className="btn btn-success"
         }