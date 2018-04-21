let valor // não inicializada 

console.log(valor)//varável não inicializada , essa váriavel então é definida undefined

/*
O valor null é um literal em JavaScript que representa um valor nulo ou "vazio" (p/ex: que aponta para um objeto inexistente). É um dos valores primitivos do JavaScript.
*/

valor = null// null significa que não tem nenhum valor, significa ausência de apontamento de valor na memória
console.log(valor)

console.log(typeof null)//objeto?

let produto={}
produto.preco = 3.5
console.log(produto.preco)

produto.preco = undefined
console.log(typeof produto.preco)
console.log(!!produto.preco)

produto.preco = null
console.log(typeof produto.preco)

/*tirar atributo de um objeto*/
//delete
console.log(produto)

delete produto.preco

console.log(produto)
