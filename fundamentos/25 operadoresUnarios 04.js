let num1 = 1
let num2 = 2

//precedência 
num1++
console.log(num1)

--num1//prioridade maior com prefixo do que sufixo 
console.log(num1)

console.log(++num1 === num2--)// da verdadeiro ou falso? dá verdadeiro, por que?
/* Por que na hora da comparação, o operador unitário do prexixo tem prioridade de ação
*/
console.log(num1 , num2)
console.log(num1 === num2)

// código simples é a melhor opção, fugir de códigos dificeis, isso não acontece de uma hora para outra, demora, as vezes precisa de refatorações de código para melhoria continua 