/*
This aponsta para module.exports, então é possível esportar algo utilizando o this
*/
console.log(global === this)
console.log(module === this)
console.log(module.exports === this)
console.log(exports === this)

/*
This dentro de uma função, aponta para global
*/
function logThis(){
    console.log("\nDentro de uma função")
    console.log(global === this)
    console.log(module === this)
    console.log(module.exports === this)
    console.log(exports === this)
}

logThis()

/******************************************************************************************/
//
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this
