pout = a => console.log(`${a}`)

Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

eNumber = function(num){
    if( typeof num === typeof 1 ){
        return num    
    }else{
        return 100
    }
}

const imprimirResultado = function (nota) {
    if (nota.entre(9,10)){
        pout("Quadro de Honra")
    } else if(nota.entre(7, 8.99)){
        pout('aprovado')
    } else if (nota.entre(4 , 6.99)){
        pout('recuperação')
    } else if (nota.entre(0, 3.99)) {
        pout('reprovado')
    } else{
        pout('nota invalida')
    }//if em cadeia...caso um desse if der verdadeiro, não entra nos seguintes. 

}

pout(eNumber(43))

pout(eNumber("e3w"))

imprimirResultado(321);
imprimirResultado(10);
imprimirResultado(8,99);
imprimirResultado(6,99);
imprimirResultado(6,99);
imprimirResultado(eNumber("dsadasd"));