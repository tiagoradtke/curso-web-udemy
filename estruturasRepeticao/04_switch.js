pout = a => console.log(a)
/*
não retorna true ou false
não tem como por range de número

*/
const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 99.99:
            pout('Quadro de Honra')
            break
        case 10:
        case 9:
            pout('Quadro de Honra')
          //  break
        case 8:
        case 7:
            pout('aprovado')  
           // break  
        case 6:
        case 5:
        case 4:
            pout("Recuperação")
          //  break
        case 3:
        case 2:
        case 1:
        case 0:
             pout('REPROVADO')
           //  break
        default:
             pout('inválido')
    }
}

imprimirResultado(99.99)

pout("arredonda para cima")
pout(Math.ceil(7.2))//arredonda para cima
pout(Math.ceil(7.54654645))//arredonda para cima
pout(Math.ceil(0.0001))//arredonda para cima

pout("arredonda para baixo")
pout(Math.floor(7.99))//arredonda para cima
pout(Math.floor(99.99999999))//arredonda para cima
pout(Math.floor(0.99999999))//arredonda para cima