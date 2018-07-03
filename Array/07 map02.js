const carrinho = [
    '{"nome": "Borranha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 3.45}',
    '{"nome": "Caneta", "preco": 3.45}'
]

let retornarPreco = e => e.split(",")[1]

let carrinhoPrecos = carrinho.map(retornarPreco)
console.log(carrinhoPrecos)

console.log("\n")

/*Exemplo*/
const paraObjeto = json => JSON.parse(json)
const returnPrecos = e => e.preco
console.log("\n Json convertido, depois só precos \n", carrinho.map(paraObjeto).map(returnPrecos))


/*Soma dos preço utilizando foreach com função*/
let somaArray = 0
carrinho.map(paraObjeto).map(returnPrecos).forEach(function(nome){
    somaArray += nome
})

console.log(`\n Soma dos preços igual a ${somaArray}`)