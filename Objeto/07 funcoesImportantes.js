const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso :13
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]} : ${e[1]}`)
});

Object.entries(pessoa).forEach(([chave, valor])=> {
    console.log(`${chave} : ${valor}`)
});

//
Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable : true,
    writetable: false,
    value: '01/01/2018'
})
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
pessoa.dataNascimento = "01/01/2017"
console.log(pessoa.dataNascimento)

// Object.assing (ECMAScript 2015)
const dest  = {a : 1}
const o1    = {b:2}
const o2    = {c:3 , a:4}
//Objeto gerado pelo assing é conquetanação de todos objetos passados como parametro
//caso haja atributos com nomes iguais, o ultimo subscreve o valor do primeiro.
const obj = Object.assign(dest, o1, o2)
console.log(obj)