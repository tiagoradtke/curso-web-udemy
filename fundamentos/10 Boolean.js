//Aceita mais de um resultado, false ou true, outros valores
let isAtivo = false

console.log(isAtivo)
console.log(typeof isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1

console.log(!!isAtivo)//!! não não alguma coisa, volta para o estado inicial
console.log(typeof !!isAtivo)

//tipos verdadeiros
console.log('Os verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos')
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar')
console.log(!!(''|| null | 0 || " "))// forma de fazer meio que um IF

/*
*por exemplo, se tivermos um nome, que pode ou não vir vazio, podemos usar essa forma de verdade
e falso para verificar
*/
let nome = ""
console.log(nome || "Desconhecido")

nome = "Tiago"
console.log(nome || "Desconhecido")

