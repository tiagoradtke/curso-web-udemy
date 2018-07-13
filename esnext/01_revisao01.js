/*

*/
{
    var a = 2
    let b = 3 //let limita-se no escopo onde é criado
    console.log(b)
}
console.log(a)
//let é criado como escopo de bloco, limitasse seu uso ao bloco criado
//console.log(b) como 

// Template String
const produto = 'Ipad'
console.log(`${produto} é caro`)
console.log(`${produto} 
é 
caro\n`)

// Destructing
const [l,e,...tras] = "Cod3r"
console.log(l,e,tras)

const [x,,y] = [1,2,3] 
console.log(x , y)

const {idade = i, nome} = {nome: 'Ana', idade : 9}
console.log(idade, nome)