/*
 Closure é o escopo criado quando uma função é declarada
 esse escopo permite a função acessar e manipular variáveis externas à função

Contexto léxico em ação!

Closures (fechamentos) são funções que se referem a variáveis livres (independentes).

Em outras palavras, a função definida no closure "lembra" do ambiente em que ela foi criada.

*/


const x = 'global'

function fora(){
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())