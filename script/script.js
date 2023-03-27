function horas(){
let img = window.document.querySelector(".imagem")
let mensagem = window.document.querySelector(".mensagem")
let hora = new Date
let horaNumero =  hora.getHours()

if ( horaNumero >= 0 && horaNumero < 12){
mensagem.innerHTML = `Bom dia agora São  ${horaNumero}  horas`
img.style.backgroundImage="url(/img/amanhecer.jpg)"
document.body.style.background = '#f5dd83'
} 
else if (horaNumero >= 12 && horaNumero < 18){
    mensagem.innerHTML = `Boa tarde  agora São ${horaNumero} horas`
    img.src= './img/atardecer.jpg'
    document.body.style.background = '#7b7e85'
}
else{mensagem.innerHTML = `Boa noite agora São  ${horaNumero} horas`
img.src= './img/noite.jpg'
document.body.style.background = '#223a56'}
}





