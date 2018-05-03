const soma = function (x , y){
    return x + y

} //Função anônima é uma função sem nome ¬¬

const div   = (x , y) => {if(y != 0) {return x / y}else{return "divisor igual a 0"} }
const mult  = (x , y) => {return x * y}
const sub   = (x , y) => {return x - y} 
//const mod   = (x , y) => {if(y != 0) {return x % y}else{return "divisor igual a 0"} }

const imprimirResultado = function (a , b , operacao = soma) {
    console.log(operacao(a , b))
}

imprimirResultado(3, 4)

imprimirResultado(0, 4, div)

imprimirResultado(-54, 4, sub)

imprimirResultado(3,4, (x , y) => x * y)

imprimirResultado(34, 3, function (x , y){if(y != 0) {return x % y}else{return "divisor igual a 0"}} )

const pessoa = {
    falar : function (){
        console.log("teste de função dentro do atributo de um objeto (chave:valor)")
    }

}

pessoa.falar()