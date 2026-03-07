

function CategoryClick(value){
    var car1 = document.getElementById("fullstack1")
    var car2 = document.getElementById("fullstack2")
    var car3 = document.getElementById("frontend1")
    var car4 = document.getElementById("frontend2")
    var car5 = document.getElementById("frontend3")
    var car6 = document.getElementById("frontend4")
    var btn1 = document.getElementById("all")
    var btn2 = document.getElementById("fulstk")
    var btn3 = document.getElementById("frnEnd")
    switch(value.id){
        case "frnEnd":
            btn3.style.color = "white"
            btn3.style.backgroundColor = "orange"
            btn2.style.backgroundColor = "black"
            btn1.style.backgroundColor = "black"
            car1.style.display = "none"
            car2.style.display = "none"
            car3.style.display = "block"
            car4.style.display = "block"
            car5.style.display = "block"
            car6.style.display = "block"
            break;
        case "fulstk" : 
            btn2.style.color = "white"
            btn2.style.backgroundColor = "orange"
            btn3.style.backgroundColor = "black"
            btn1.style.backgroundColor = "black"
            car1.style.display = "block"
            car2.style.display = "block"
            car3.style.display = "none"
            car4.style.display = "none"
            car5.style.display = "none"
            car6.style.display = "none"
            break;
        case "all":
            btn1.style.color = "white"
            btn1.style.backgroundColor = "orange"
            btn2.style.backgroundColor = "black"
            btn3.style.backgroundColor = "black"
            car1.style.display = "block"
            car2.style.display = "block"
            car3.style.display = "block"
            car4.style.display = "block"
            car5.style.display = "block"
            break;
    }
}


       