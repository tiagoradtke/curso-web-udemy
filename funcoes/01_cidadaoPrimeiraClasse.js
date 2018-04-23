/*
    No JS função é um dos principais fundamentos do JS
    função em JS é First-Class Objetct (Citizens)
    Highter-order function
    da para tratar a função como um dado, da para passar como parametro, retorno, armazenar em variável
*/

//Forma Literal  
function name1(){}//retorna sempre algum valor, default: undefined

// Forma armanezamento em variável
const name2 = function(){}

// Armazenar em um array
const array = [function(a , b){return a+b}, name2, name1]
console.log(array[0](2 , 3))

//armazenamento em um atributo de objeto
const obj = {}
obj.falar = function() { return 'opa' }
console.log(obj.falar())

//passar função como param
function run(fun){
    fun()
}
run(function(){console.log('função dentro de função')})

// uma função pode retornar/conter função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }

}
soma(2, 3)(4)

const cincoMais = soma(2, 3)
cincoMais(4)