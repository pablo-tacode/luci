 const bttnChange = document.getElementById("bttn-change");
 const backgroundImg = document.getElementById("background-img");


const checkBackground = 
function () {
    if(backgroundImg.classList.contains("dark1")){
        backgroundImg.classList.remove("dark1")
        backgroundImg.classList.add("dark2")
    }else if(backgroundImg.classList.contains("dark2")){
        backgroundImg.classList.remove("dark2")
        backgroundImg.classList.add("dark3")
    }else if(backgroundImg.classList.contains("dark3")){
        backgroundImg.classList.remove("dark3")
        backgroundImg.classList.add("dark4")
    }else{
        backgroundImg.classList.remove("dark4")
        backgroundImg.classList.add("dark1")
    }
}

bttnChange.addEventListener("click", checkBackground)

