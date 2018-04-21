pout = a => console.log(`Você foi ${a}`)

const imprimirResultado = function(nota) {
    if(nota>=7){
        pout('aprovado')
    }else{
        pout(`reprovado`)
    }

}
imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(2)
imprimirResultado("problemas com linguagens fracamente tipadas?")

pout()
pout()
pout("forma simplificada, quando tem apenas duas sentenças ")
//forma simplificada, quando tem apenas duas sentenças 
const imprimirResultado2 = function(nota) {
    if(nota>=7) 
        pout('aprovado')
    else 
        pout(`reprovado`)
}
imprimirResultado2(10)
imprimirResultado2(7)
imprimirResultado2(2)
imprimirResultado("problemas com linguagens fracamente tipadas?")