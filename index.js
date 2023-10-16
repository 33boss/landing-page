var esquerda = window.document.getElementById("esquerda")
var bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var direita = window.document.getElementById("direita")

function rolarpradireita(){
    bruna.style = "display:none"
    samantha.style = "display:flex"
    direita.style = "display:none"
    esquerda.style = "display:flex"
}

function rolarpraesquerda(){
    bruna.style = "display:flex"
    samantha.style = "display:none"
    direita.style = "display:flex"
    esquerda.style = "display:none"
}