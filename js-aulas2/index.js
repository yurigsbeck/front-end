//1
function verificaIdade(a) { 
    if (a < 18) {
        alert(`você é menor de 18 anos`)
    }
    if (a >= 18 && a <= 65) {
        alert(`você está entre 18 a 65 anos`)
    } 
    else if (a > 65) {
        alert(`você é maior de 65 anos`)
    return
    }
    else {
        alert(`desculpa não entendi o que você quis dizer`)
    }
}
a = Number(prompt(`insira sua idade`))
verificaIdade(a)

//2
function converteNota(nota) {
    let letras
    switch (nota) {
        case 1:
            letras = "F"
            break;
        case 2:
            letras = "E"
            break;
        case 3:
            letras = "D"
            break;
        case 4:
            letras = "C"
            break;
        case 5:
            letras = "B"
            break;
        case 6:
            letras = "A"
            break;
        default:
            break;
    }
    alert(`sua nota é ${letras}`)
}
nota = Number(prompt(`qual foi sua nota?`))
converteNota(nota)

//3
function tabuada(multi) {
   for (let i = 1; i <= 10; i++) {
    console.log(`${multi} x ${i} = ${multi*i}`)
   }
}
multi = Number(prompt(`qual seu numero escolhido?`))
tabuada(multi)

function contagemRegressiva () {
    while (i > 0) {
        console.log(i)
        i--;
    }
}
i = Number(prompt(`insira um numero`))
contagemRegressiva()

//4
let add = (a, b) => a+b
let sub = (a, b) => a-b
let mult = (a, b) => a*b
let divi = (a, b) => a/b

a = Number(prompt(`qual seu primeiro numero escolhido?`))
b = Number(prompt(`qual seu segundo numero escolhido?`))

let choice = prompt(`qual operação voce deseja \[1] adição \[2] subtração \[3] multiplicação \[4] divisão?`)

function calculadora () {
    switch (choice) {
        case "1"|| choice.toLowerCase.apply().includes(`adição`):
            alert(`a adição de ${a} e ${b} será ${add(a,b)}`)
            break;
        case "2"|| choice.toLowerCase.apply().includes(`subtração`):
            alert(`a subtração de ${a} e ${b} será ${sub(a,b)}`)
            break;
        case "3"|| choice.toLowerCase.apply().includes(`multiplicação`):
            alert(`a multiplicação de ${a} e ${b} será ${mult(a,b)}`)
            break;
        case "4"|| choice.toLowerCase.apply().includes(`divisão`):
            alert(`a divisão de ${a} e ${b} será ${divi(a,b)}`)
            break;   
    }
}
calculadora()