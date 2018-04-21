console.log(7/0)//tipo infinity

console.log("10"/2)// se divide o valor
console.log("10" + 2)// nesse caso concatena, por que string tem preferência, por causa do '+'

console.log("show" * 2)


/*specificação de ponto flutuante
tipo de imprecisão que podem ser geradas com operações matemáticas
por motivo de performance e por especificações uma soma de 0.1 + 0.7 não dara 8
mas 7.999999999999
*/
console.log(0.1 +  0.7)

/*resolução do problema de imprecisão */
let var1 = +(0.1 + 0.7).toFixed(2)
console.log(var1)

let var2 = +(0.1 + 0.7).toPrecision(4) 
console.log(var2)
