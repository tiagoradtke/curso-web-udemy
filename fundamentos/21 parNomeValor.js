// par nome/valor
const saudacao = 'opa rapah.. vai te tomate no cu' // contexto léxico 1


//Contextos diferentes podem ter nome de variaveis iguais, ja retrocede os contextos procurando a variavel que foi chamada em certo contexto
function exec(){
    const saudacao = 'falaaaaa rapah, vai te tomate no cu' //contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome:   "Pedro",
    idade:  32,
    peso: 90,
    endereco:{
            logradouro: "Rua adolfo pinto",
            numero: 123
    }
}


console.log(saudacao)
console.log(exec())
console.log(cliente) 