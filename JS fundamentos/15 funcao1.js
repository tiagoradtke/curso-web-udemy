/*
funcão é um bloco de código nomeado, que faz coisas ou não
função recebe parametros de entrada que serão processados e tem um output
*/

//funcao sem retorno

function imprimirSoma(n1, n2, n3){
    console.log(`Soma: ${n1+n2+n3}`)
}

imprimirSoma(43,54,34)

imprimirSoma(43)//è possível passar apenas um parametro, mas poderá gerar erros, nesse caso imprimirá NaN(Not-A-Number), pois será a soma de 43+undefined


//Função com retorno, e com prametro valor padrão
function soma01(a , b = 0){
    return a + b

}

console.log(soma01(32))
//com retorno
function soma(n1,n2){
    return n1 + n2
}

console.log(soma(1 ,5))