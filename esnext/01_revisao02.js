// Arrow Function
const soma = (a , b) => a + b
const subtr = (a, b) => a - b
const div   = (a, b) => a / b
const multi = (a , b) => a * b
const imprimirArray = (arrg) => arrg.forEach((element,i) => console.log('imprimirArray',element, "indice=", i))

let a = 24
let b = 2

console.log(soma(a,b))
console.log(subtr(a,b)) 
console.log(div(a,b))
console.log(multi(a,b))
imprimirArray([a,b])

/* Arrow Function (this)

Numa função tradicional é possível mudar a apotamento do this, atráves de apply, bind etc
contudo numa função arrow isso não é possivel, this sempre apontará
para o exports do módulo onde a função arrow se encontra
*/
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

/*
Parametro default
*/
function log(texto = 'Node'){
    console.log(texto)
}
log()
log("Sou mais forte")

/*
Operador Rest
*/

function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
log(total(2,4,5,65,87.4))