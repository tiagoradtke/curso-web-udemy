//browser 
//códigos feitos no browser
//objeto windows
window
this === window // igual ao window, this pode contudo variar dependendo do contexto

//variavel criada com let/const e var browser
/*
var fica em escopo grobal, pode ser subscrito varias vezes
let e const não iram diretamente para o scopo global(window) 

*/
//browser
const f2 = () => console.log(this === windows) 
f2
this.f2
window.f2

var a = 2
window.a
a

var a = 54
window.a
a

//formas de fugir do escopo global
let pessoa = {nome : "ana", falar : function() {return `Eu sou ${this.nome}`}}
pessoa.falar()
console.log(pessoa)
console.log(pessoa.falar())

pessoa.verificarEscopo = function() {return this === windows}//verifica o "apontamento" do this
//this se refere ao escopo do objeto

// no Node
let a = 3

global.a = a
global.a = 6
this.a = 9
console.log("A",a)
console.log("this.a",this.a)
console.log("global.a",global.a)

console.log(typeof global.a)
console.log(typeof a)

var a = 3.5

global.a = a
global.a = 6.5
this.a = 9.5
console.log(a)
console.log(this.a)
console.log(global.a)

a = "lucas"
global.a = " é uma "
this.a = " cachorra"
console.log(a, global.a, this.a)