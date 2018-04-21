pout = a => console.log(a) 
//destruction
const [a , b , c , d] = [2 , 5 , 1 , 15]

//operador binário, existe dois operandos
const soma = a + b + c + d
pout(soma)

const subt = d - b

const multiplicacao = a * b

const divisao = d / a 

const modulo = a % 2

pout([soma, subt, multiplicacao, divisao, modulo])

pout(-divisao)//operador unário

