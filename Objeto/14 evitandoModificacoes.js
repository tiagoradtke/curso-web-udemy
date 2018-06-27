// Object.preventExtensions
// Limita a adição de atributos, mas pode excluir atributos existentes
// diferente de freeze, que congela os o objeto 

const produto = Object.preventExtensions(
   {
        nome : "qualquer", preco : 1.99, tag:'Promoção'
    }
)
console.log('Extensível?:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.decricao = 'Borranha escolar Branca'
delete produto.tag
console.log(produto)

//object.seal
// Não permite adicionar novos ou excluir atributos, mas permite alterar valores dos atributos
const pessoa1 = { nome: 'Juliana' , idade: 35}
Object.seal(pessoa1)
console.log('\nSelado?:',Object.isSealed(pessoa1))

pessoa1.sobrenome = 'Silva'
delete pessoa1.nome
pessoa1.idade = 29
console.log(pessoa1) 


/*#############################################################################*/
//04 objetoConst.js freeze()
/*#############################################################################*/
//Object.freeze = selado + valores constantes
console.log("\n Fragmento retirado aula 04 objetoConst.js")
/*
quando se cria um objeto se instancia ele num endereço de memória, 
o endereco de memória permanece inalterado, quando se muda os atributos do objeto
*/
const pessoa = {nome: 'Joao'} 
pessoa.nome = "Pedro"
console.log(pessoa)

//nessa linha abaixo, está se tentando referenciar um outro endereço de memória numa constante. 
//pessoa = { nome: 'Ana'}

Object.freeze(pessoa)//congelando objeto, os seus atributos ficam inalterados
pessoa.nome = "Ana"
pessoa.end = "Rua ABC"
delete pessoa.nome
console.log(pessoa)

//Criando objeto inalterado desde do inicio
const pessoaConstante = Object.freeze({ nome: 'Joao'})
console.log(pessoaConstante.nome)


/*
var fs = require("fs")
var vm = require('vm')

var content = fs.readFileSync(__dirname+"/04 objetoConst.js")
vm.runInThisContext(content)
https://www.scriptol.com/javascript/include.php
*/