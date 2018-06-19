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