//ternario 

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
/*

const resultado = nota => {
    nota >= 7 ? 'Aprovado' : 'Reprovado
}
*/
console.log(resultado(7))
console.log(resultado(6.99))
console.log(resultado(6))

const status = resultado(9);
console.log(resultado(status))
