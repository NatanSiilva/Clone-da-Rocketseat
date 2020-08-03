let modal = document.querySelector(".modal")
let cardsCursos = document.querySelectorAll(".card")

for (let card of cardsCursos) {
    card.addEventListener("click", function(){
        let iframeId = card.getAttribute("id")
        modal.classList.add("active")
        modal.querySelector("iframe").src = `https://rocketseat.com.br/${iframeId}`
        
    }) 
}


document.querySelector(".fechar-modal").addEventListener("click", function() {
    modal.classList.remove("active")
    
})




 