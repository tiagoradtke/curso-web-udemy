const produtos = [
    {nome: 'Nootbook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]
/*var newArray = arr.filter(callback[, thisArg])

-callback
    Função é um predicado, para testar cada elemento do array. Retorna true para manter o elemento, false caso contrário, recebendo três argumentos:
    element
    O elemento que está sendo processado no array.
-index
    O índice do elemento atual que está sendo processado no array.
-array
    O  filter do array foi chamado.
-thisArg Optional
    Opcional. Valor a ser usado como this durante a execução do callback.

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro
    */

let caro = function(p){
    //console.log("\ncallback ou element", p )
    return p.preco > 500 && p.fragil == true
}
const caro2 = produto => produto.preco >= 500

let fragil = function(p){
    //console.log("\ncallback ou element", p )
    return p.preco > 500 && p.fragil == true
}
const fragil2 = produto => produto.fragil == true

console.log(produtos.filter(caro).filter(fragil))
console.log(produtos.filter(caro2).filter(fragil2))




/*
let caro =function(p){
    //console.log("\ncallback ou element", p )
    return p.preco > 500 && p.fragil == true
}
*/