Array.prototype.map2 = function(callback){
    let arr = []
    for (let i = 0; i < this.length; i++){
        arr.push(callback(this[i], i , this ))
    }
    return arr
}

Array.prototype.forEach2 = function(callback){
    console.log("teste", this)
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}


const carrinho = [
    '{"nome": "Borranha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 3.45}',
    '{"nome": "Caneta", "preco": 3.45}'
]

/*Exemplo*/
const paraObjeto = json => JSON.parse(json)
const returnPrecos = e => e.preco
const resultado = carrinho.map2(paraObjeto).map2(returnPrecos)
console.log("\n Json convertido, depois só precos \n", resultado)