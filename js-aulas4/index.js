let copy = document.getElementById('valorCopy')
let add = document.getElementById('adicionar')
let rem = document.getElementById('remover')
let contexto = document.getElementById('texto')

add.addEventListener('click', function () {
    if (copy.value.trim() !== ' ') {
        let listItem = document.createElement('li')
        listItem.textContent = copy.value;
        contexto.appendChild(listItem)
        copy.value = '';
    } else {
        alert('por favor, insira algo')
    }
})

rem.addEventListener('click', function () {
    if (contexto.lastChild) {
        contexto.removeChild(contexto.lastChild)
    }
})
let text = document.getElementById('artigo')
let ocultar = document.getElementById('ocultar')
let mostrar = document.getElementById('mostrar')

ocultar.addEventListener('click', () => text.style.display = 'none')

mostrar.addEventListener('click', () => text.style.display = 'block')

let paragrafo = document.getElementById('contador')
let inc = document.getElementById('incrementar')
let dec = document.getElementById('decrementar')
let numero = 0

function atualizar() {
    paragrafo.innerHTML = numero
}

inc.addEventListener('click', () => {
    numero++;
    atualizar()
})

dec.addEventListener('click', () => {
    numero--;
    atualizar()
})
atualizar()