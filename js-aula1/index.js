//1
alert (`Bem vindo ao Brasil Js`)

//2.1
const nome = `yuri`
let idade = 18
let city = "São Leopoldo"

//2.2
const me = {}
me.nome
me.idade
me.city
// me.push(tal e tal) = tbm serviria para utilizar os dados d outra variavel
alert (`meu nome é ${nome}, tenho ${idade} anos e moro em ${city}`)

//3.1
function mat(a, b) {
    let soma = a+b
    return soma
}
a = Number(prompt(`insira o primeiro um numero`))
b = Number(prompt(`insira o segundo um numero`))

//3.2
function high(a, b) {
    let high = a > b
    return high
}
alert ( `o valor de ${a} é maior que o valor de ${b}: ${high(a, b)}`)

//3.3
function isBetw(a, b) {
    let bet = a+b
    let is = bet >= 10 && bet <= 20
    return is
}
alert (`a soma de ${a} e ${b} está entre 10 e 20: ${isBetw(a, b)}`)