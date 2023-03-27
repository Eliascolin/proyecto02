function hora(){
let img = window.document.querySelector(".imagem")
let mensagem = window.document.querySelector(".mensagem")
let hora = new Date
let horaNumero = hora.getHours()

if ( horaNumero >= 0 && horaNumero < 12){
mensagem.innerHTML = `Bom dia agora São  ${hora}`
img.style.backgroundImage="url(/img/amanhecer.jpg)"
}

}
let img = window.document.querySelector(".imagem").style.backgroundImage

img.style.backgroundImage="url(/img/atardecer.jpg)"