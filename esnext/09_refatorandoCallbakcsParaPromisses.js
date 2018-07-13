/*
Exemplo Com promisse
http://files.cod3r.com.br/curso-js/turmaA.json
http://files.cod3r.com.br/curso-js/turmaB.json
http://files.cod3r.com.br/curso-js/turmaC.json


https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
-----------------------
-Descrição
-------------------------
O resultado é passado como um array de valores de todas as promises.
 Se alguma coisa passada no array iterável não é uma promise, será convertido para 
 uma usando Promise.resolve. Se qualquer uma das promises passadas rejeitar, 
 a Promise retornada por all imediatamente rejeita com o valor da promise que rejeitou,
  descartando todas as outras promises tendo sido resolvidas ou não.
*/

const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra.toUpperCase()}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })

    })
}

// let nomes = []
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })


Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))

getTurma('D').catch(e => console.log(e.message))

