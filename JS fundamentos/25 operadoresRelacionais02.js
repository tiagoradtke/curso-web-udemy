//operadores relacionais sempre retornam um valor booleano
//existe operadores que servem para ver se além do valor, o tipo da variavel também é o mesmo

console.log("1)", '1' == 1)// comparador valor, não o tipo

console.log("2)", '1' === 1)// comparando o tipo, 

console.log("3)", '3' != 3)//

console.log("4)", '3' !== 3)// 

console.log("5)", 3 < 2)// 

console.log("6)", 3 > 2)// 

console.log("7)", 3 <= 2)// 

console.log("8)", 3 >= 2)// 

const d1 = new Date(0)// data referêcia
const d2 = new Date(0)
const d3 = d1
console.log("", d1 == d2 )// aqui esté se comparando o endereço de memória, nesse caso dá false, por que se está usando variavel de referência, existem diferenças entre valores primitivos e os objetos/funcoes quanto a suas relações com variáveis
console.log("", d1 === d2 )// 

console.log("", d1 == d3 )// 
console.log("", d1 === d3 )// aqui esté se comparando o endereço de memória, nesse caso se dá verdadeiro

console.log("data", d1.getTime )// 
console.log("", d1.getDate == d3.getDate )// 
console.log("", d1.getDate === d3.getDate )

console.log("", undefined == null )
console.log("", undefined === null )



