function Project1Click(){
    window.open("https://github.com/Prasadmukalla12/video-tutorial-typeScript")
}
function Project2Click(){
    window.open("https://github.com/Prasadmukalla12/To-Do-Application-ts")
}
function Project3Click(){
    window.open("https://github.com/Prasadmukalla12/Fakestore-api")
}
function Project4Click(){
    window.open("https://github.com/Prasadmukalla12/weather-app")
}
function Project5Click(){
    window.open("https://github.com/Prasadmukalla12/Calculator")
}

function CategoryClick(value){
    var car1 = document.getElementById("fullstack1")
    var car2 = document.getElementById("fullstack1")
    var car3 = document.getElementById("frontend1")
    var car4 = document.getElementById("frontend2")
    var car5 = document.getElementById("frontend3")
    switch(value.id){
        case "frnEnd":
            car1.style.display = "none"
            car2.style.display = "none"
            car3.style.display = "block"
            car4.style.display = "block"
            car5.style.display = "block"
            break;
        case "fulstk" : 
            car1.style.display = "block"
            car2.style.display = "block"
            car3.style.display = "none"
            car4.style.display = "none"
            car5.style.display = "none"
            break;
        case "all":
            car1.style.display = "block"
            car2.style.display = "block"
            car3.style.display = "block"
            car4.style.display = "block"
            car5.style.display = "block"
            break;
    }
}


       