pout = a => console.log(`Let é melhor que var? heheheh: ${a}`)

var numero = 1
{
    let numero = 2
    pout(numero)
}

pout(numero)
//let limita-se no escopo onde é criado

let numero1 = 1
{
    let numero1 = 2
    pout(numero1)
}

pout(numero)

//Escopos
/*
Variaveis definidas com VAR, tem escopo global e tem escopo de função
Variaveis definidas com LET, tem escopo global e tem escopo de função e escopo de bloco


*/