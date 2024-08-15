// document.getElementById('botão').addEventListener('click', function mudança() {
//     document.getElementById('campoTexto').value.trim(),
//     document.getElementById('campoTexto').textContent.getElementById('comentario')
// })

function mudança() {
    let texto = document.getElementById('campoTexto').value
    let paragrafo = document.getElementById('comentario')

    if (texto === "") {
        paragrafo.textContent = "Por favor, insira um texto."
    } else {
        paragrafo.textContent = texto
    }
}

let titulo = document.getElementById('titulo')
let blue = document.getElementById('corBlue')
let red = document.getElementById('corRed')

blue.addEventListener('click', () => titulo.style.color = "blue")
red.addEventListener('click', () => titulo.style.color = "red")

let conter = document.getElementById('conteiner')

conter.style.width = 100
conter.style.height = 100

conter.addEventListener('mouseover', () => conter.style.backgroundColor = "rgb(49, 49, 49)")
conter.addEventListener('mouseout',() => conter.style.backgroundColor = "gray" )
