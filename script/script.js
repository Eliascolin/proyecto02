function horas(){
let img = window.document.querySelector(".imagem")
let mensagem = window.document.querySelector(".mensagem")
let hora = new Date
let horaNumero =  hora.getHours()
let munutos = hora.getMinutes()




if ( horaNumero >= 0 && horaNumero < 12){
mensagem.innerHTML = `Bom dia agora São  ${horaNumero}:${munutos}`
img.style.backgroundImage="url(/img/amanhecer.jpg)"
document.body.style.background = '#f5dd83'
} 
else if (horaNumero >= 12 && horaNumero < 18){
    mensagem.innerHTML = `Boa tarde  agora São ${horaNumero}:${munutos}`
    img.src= './img/atardecer.jpg'
    document.body.style.background = '#7b7e85'
}
else{mensagem.innerHTML = `Boa noite agora São  ${horaNumero}:${munutos}`
img.src= './img/noite.jpg'
document.body.style.background = '#223a56'}
}


let nome = window.prompt("qual é teu nome")

let inicio = window.alert(`Bem-Vindo ${nome} neste trabalho podes ver como aplico os conhecimentos de javascript.  alem de aprecentar a hora do dia, a imagem mudara de acordo com a hora do dia e a cor do body `)

let bem = window.document.querySelector(".header_nome")

bem.innerHTML = ` Bem-vindo ${nome}`


