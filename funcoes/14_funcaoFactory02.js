//
function criarProduto(nome = '', preco = 0){
    let desconto = 0.65
    return {
        nome :  nome,
        preco:  preco,
        desconto : desconto
    }
}
console.log(criarProduto())
console.log(criarProduto('ADM R4', 234.54))

//outro modo de fazer
function criarProduto2(nome = '', preco = 0){
    let desconto = 0.65
    return {
        nome ,
        preco,
        desconto
    }
}