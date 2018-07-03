/*
1- 
*/

const alunos1 = [
    { nome : 'João' , nota: 7.3, bolsista : true },
    { nome : 'Maria' , nota: 9.2, bolsista : true },
    { nome : 'João' , nota: 7.3, bolsista : true },
    { nome : 'João' , nota: 7.3, bolsista : false }
]
const alunos2 = [
    { nome : 'João' , nota: 7.3, bolsista : true },
    { nome : 'Maria' , nota: 9.2, bolsista : false },
    { nome : 'João' , nota: 7.3, bolsista : false },
    { nome : 'João' , nota: 7.3, bolsista : false }
]

const bolsista = (a) => a.bolsista
const bolsistas = alunos2.map(bolsista)
console.log(bolsistas)

// Todos os alunos são bolsistas?
const todosAlunosBolsistas = function(acumulador , atual, indice, array){
    return acumulador && atual
}
console.log(alunos2.map(bolsista).reduce(todosAlunosBolsistas))


// Algum aluno é bolsista
const algumAlunoBolsistas = function(acumulador , atual, indice, array){
    return acumulador || atual
}
console.log(alunos2.map(bolsista).reduce(algumAlunoBolsistas))

//função arrow direto na passagem de função
console.log(alunos1.map(a => a.bolsista))