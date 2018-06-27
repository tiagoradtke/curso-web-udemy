// toda Função tem um atributo chamado .prototype


console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

console.log(String.prototype)
console.log(Array.prototype)
console.log(Object.prototype)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
    //split(''), quebra a string em array de caracteres
    //reverse(), inverte valores de um array
    //join(''), torna a concatenar valores de uma array em uma string
}
//..
const funcoesTeste = function(array =[1,2,3,4,5], palavra = 'Tiago'){
    console.log("\n...............................................................")
    console.log("array Testes")
    console.log("reverse",array.reverse())
    console.log("join typeof",typeof array.join(''))
    console.log("\nString Testes") 
    console.log("Split String:",palavra.split('')) 
    console.log("Split String e revese():",palavra.split('').reverse()) 
    console.log("Split String e revese() e join('')",palavra.split('').reverse().join(''))
    console.log("typeof Split String e revese() e join('')",typeof palavra.split('').reverse().join(''))
    console.log("...............................................................\n")
} 
//..


console.log("String.prototype:", String.prototype)

console.log('Escola Cod3r'.reverse())

Array.prototype.filter = function(){
    return this[0]
}
console.log("Array.prototype:", Array.prototype)
console.log([1,2,3,54].filter())
console.log(["a",43,"c"].filter())

name = "Tiago Radtke Quiquio"
nameReverse = name.reverse()
console.log(nameReverse)
console.log(nameReverse.reverse())

/*
é possivel subscrever funcões e comportamentos das funcções primárias, mas não se deve fazer
*/
String.prototype.toString = function(){
    return 'Lascou Tudo'
}

console.log('Escola Cod3r'.reverse())


//testes
funcoesTeste()