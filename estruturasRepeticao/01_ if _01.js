//
pout = a => console.log(a)

function soBoaNoticia(nota){
    if (nota >= 7){

    }
    return nota >= 7 ? 'Aprovado' : ''
}

pout(soBoaNoticia(5))

//coisas virarem verdadeiro e falso no JS
pout(!!"")
pout(!!"teste")
pout(!!1)
pout(!!0)


function seForVerdade (valor){
    if(valor){
        pout('verdadeiro')
    }else{
        pout('falso')
    }
}
pout("null")
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('teste')
seForVerdade('')
seForVerdade(1)
seForVerdade(0)
seForVerdade(-1)