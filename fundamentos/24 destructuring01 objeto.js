pout = a => console.log(`${a}`)

//novo rescurso do ES2015

const pessoa= {
    nome: 'ana',
    idade: 2 ,
    endereco:{
        logradouro: "rua abc",
        numero : 1000
    }

}

const {nome , idade} = pessoa
console.log(nome,idade)

const  { nome : n , idade : i} = pessoa

console.log(n,i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome , bemHumorada)

const {endereco : {logradouro, numero, cep}} = pessoa
console.log(logradouro ,numero, cep)

//aqui gera erro
//const {conta : {ag,num}} = pessoa
//console.log(ag,num)
