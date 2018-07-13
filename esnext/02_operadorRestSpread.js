/*
Exemplo de REST em 01_revisao02.js
*/

// usar spread com objeto
const funcionario = { nome : 'Maria', salario: 12343.99}
const endereco = {rua:"32", numero:213, cidade:"tall"}
const clone1 = {ativo:true,...funcionario}
const clone2 = {ativo:true,...funcionario,endereco:{...endereco}}

console.log(funcionario)
console.log(clone1)
console.log(clone2)

// usar spred com array
const grupoA= ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela',[...grupoA] ]
console.log(grupoFinal)
grupoFinal.push(...grupoFinal)
console.log('\n',grupoFinal)