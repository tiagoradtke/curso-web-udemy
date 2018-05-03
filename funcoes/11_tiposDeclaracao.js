console.log(soma(3,4))
//console.log(sub(3,4)) não funciona
//console.log(mult(3,4)) não funciona

// function declaration(js carrega primeiro as funções )
function soma (x , y){
    return x + y
}

// function expression
const sub = function (x , y) {
    return x - y
}
console.log(sub(3,4))

// named function expression (pouco usada segundo instrutor, única vantagem aparentimente pode aparecer no debug)
const mult = function mult (x , y) {
    return x * y
}
console.log(mult(3,4))