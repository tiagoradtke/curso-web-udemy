const pout = a => console.log(`Impressão... ${a}`) 

function teste1(num){
    if (num > 7)
        pout(num)

    pout('final')//fora do if

    if (num <= 7)
        pout(num)

    pout('final')//fora do if

    if (num == 7)
        pout(num)

    pout('final')//fora do if
}

function teste2(num){
    if (num > 7)
        pout(num)// num sentença de código as chaves são opcionais

    pout('final') //fora do if  
}

//teste1(3)
//teste2(3)

function teste3(num) {
    if(num > 7 ); //cuidado com ; não usar em estruturas de controle

    {
        console.log(num)
    }

}
teste3(6)
teste3(8)
