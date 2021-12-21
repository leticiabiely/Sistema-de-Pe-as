// Váriaveis, são um espaço na memória para guardar algum valor
let pesoPeca = 150 

//pesoPeca - Camel Case 
//peso_peca - Snake Case
//PesoPeca - Pascal Case
// if - se


if(pesoPeca > 100) {
    console.log("Peso maior que 100g, logo, podemos cadastrar a peça!!")
} else {
    console.log("Peso insuficiente, não é possivel cadastrar.")
}

let numeroPecas = 8

if(numeroPecas < 10) {
    console.log ("Ainda há espaço na caixa, podemos cadastrar a peça.")
} else {
    console.log ("Não há espaço disponível na caixa.")
}

let nomePeca = "Disco de Freio"

// ASCII TABLE pesquisar

console.log(" O comprimento do nome da peça é:", nomePeca.length)

// length pesquisar

if(nomePeca.length < 3) {
    console.log ("Nome de peça muito curto, não é possível cadastrar.")
} else{
    console.log("Nome da peça adequado,podemos cadastrar.")
}