//
const a = {name: 'tester'}

console.log(a)

const b = a //Objetos - Atribuição por referência, se passa o endereço de memória para b

console.log(b)

b.name = "opa"

console.log(a)

let c = 12

let d = c//Tipos primitivos, cópias por valor

d++

console.log (c)

console.log (d)