const alunos = [
    { nome : 'João' , nota: 7.3, bolsista : false },
    { nome : 'Maria' , nota: 9.2, bolsista : false },
    { nome : 'João' , nota: 7.3, bolsista : false },
    { nome : 'João' , nota: 7.3, bolsista : false }
]

const mapNota  = a  => a.nota
const reduceNota = function(acumulador , atual, indice, array){
    console.log("\n........................................................" )
    console.log("Acumulador:",acumulador )
    console.log("Atual:", atual)
    console.log("Indice:", indice)
    console.log("Array:", array)
    return acumulador + atual
}

const resultado = alunos.map(mapNota).reduce(reduceNota)   
console.log("Resultado Reduce",resultado) 



/*Criação de array dinâmico
const numDinamico = () => Math.random()*15
let letiFor = Math.round(numDinamico())
console.log("",letiFor)
let arrayDinamico = []
for(let i = 0; i < letiFor;i++){
    arrayDinamico.push(Number(numDinamico().toFixed(2)))
}

const resultadoArrayDinamico = arrayDinamico.reduce(reduceNota)   
console.log("Resultado Reduce",resultadoArrayDinamico) 

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
array.reduce(callback[, valorInicial])

callback
Função que é executada em cada valor no array, recebe quatro argumentos:

>Acumulador
    - O valor retornado na última invocação do callback, ou o argumento Valor Inicial, se fornecido. (exemplo abaixo).
>valorAtual
    - O elemento atual que está sendo processado no array.
>indice
    - O índice do elemento atual que está sendo processado no array.
>array
    O array ao qual a função reduce() foi chamada.
>valorInicial
    Opcional. Objeto a ser usado como o primeiro argumento da primeira chamada da função callback. Chamar reduce() em uma array vazia sem valor inicial é um erro.

*/