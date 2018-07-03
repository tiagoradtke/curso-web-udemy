/*
Map serve pra trasnformar um array em outro dependendo da ordenação desejada,
o novo array terá a mesma quantidade de elementos do primeiro
*/

const nums = [1,2,3,4,5]

let resultado = nums.map(function(e){
    return e*2
})

console.log(resultado,nums)

const soma10 = e => e + 10
const triplo = e => 3 * e
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)