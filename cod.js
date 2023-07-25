const setaEsquerda = document.getElementById("setaEsquerda")
const setaDireita = document.getElementById("setaDireita")
const slide = [...document.getElementsByClassName("slide")]

let currentIndex = 0

function slideDireita(){
    if(slide[2].style.display == "block"){

    }else{
        slide[currentIndex].style.display = "none"
        currentIndex = currentIndex + 1 
        slide[currentIndex].style.display = "block"
    }
}

function slideEsquerda(){
    var style = window.getComputedStyle(slide[0]);
    if(style.display === "block"){
        
    }else{
        slide[currentIndex].style.display = "none"
        currentIndex = currentIndex - 1
        slide[currentIndex].style.display = "block"
    }
}

const linkMenu = document.querySelectorAll(".linksNav") 

linkMenu.forEach(link =>{
    link.addEventListener("click", (event) =>{
        event.preventDefault();

        const targetId = link.getAttribute("href")
        const targetElement = document.querySelector(targetId)

        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    })
})

const linkIndex = document.querySelector(".linkIndex");

linkIndex.addEventListener("click", (event) => {
    event.preventDefault();

    document.body.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});


