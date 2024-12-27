let setaDireita = document.getElementById("seta-direita")
let leonardo = document.getElementById("leonardo")
let samanta = document.getElementById("samanta")
let bruna  = document.getElementById("bruna")
let setaEsquerda = document.getElementById("seta-esquerda")

function RolarParaDireita(){
  leonardo.style= "display:none"
  bruna.style= "display:flex"
  setaDireita.style = "display:none"
  setaEsquerda.style ="display:flex; margin-top:55px" 

}

function RolarParaEquerda(){
  leonardo.style= "display:flex"
  bruna.style= "display:none"
  setaDireita.style = "display:flex"
  setaEsquerda.style ="display:none" 
 
}