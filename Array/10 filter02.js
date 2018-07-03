Array.prototype.filter2 = function(callback){
    const args = []
    for (i = 0 ; i < this.length ; i++ ){
        if(callback(this[i], i, this) ){
            args.push(this[i])
        }
              
    }
    return args
}
const produtos = [
    {nome: 'Nootbook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

const caro2 = produto => produto.preco >= 500
const fragil2 = produto => produto.fragil == true
console.log(produtos.filter2(caro2).filter2(fragil2))



//console.log(produtos.filter2(caro).filter2(fragil))
//console.log(produtos.filter(caro2).filter(fragil2))