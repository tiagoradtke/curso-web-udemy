//Amazenando uma funcão em uma variavel
const imprimirSoma = function(a , b){
    console.log(a + b)
}

imprimirSoma(2,3)

//Armazenando uma funcao arro em uma variavel
const soma = (a , b) => {
    return a + b
}

console.log(soma(6,3))

//return implícito, forma reduzida de criação de funções
const subtracao = (a , b) => a - b

console.log(subtracao(43, 54))


const subtracaoUmNumero = a => a - 2


console.log(subtracaoUmNumero(34))

const imprimir = a => console.log(`Imprimir: ${a}`)

imprimir(2)