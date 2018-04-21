// Array em JavaScript não tem tamanho padrão, e nem tipagem certa, bem diferente do JAVA
const valores = [1.7, 8.9 , 9.2]
console.log(valores[0], valores[2])
console.log(valores[1])
console.log(valores[8])// se tentar acessar um indice inexistente não gera erro

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores[3] = "serve por strings"
console.log(valores)
console.log(valores.length)

//adicionar valores num array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//retirar ultimo elemento de um array e mostra
console.log(valores.pop())
//outra forma de eliminar um valor de um array
delete valores[4]
console.log(valores)

// array é do tipo objeto
console.log(typeof valores)