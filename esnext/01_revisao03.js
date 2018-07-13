// ES8: Object.values/Object.entries
const obj = {a:1, b:2, c:3}
console.log(Object.values(obj)) 
console.log(Object.keys(obj)) 
console.log(Object.entries(obj))

// Melhoris na notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'O gente'   
    }
}
console.log(pessoa.nome, pessoa.ola())

/*
Class internamente é uma função, o extends acaba sendo uma herança por prototype

*/
class Animal{
    constructor(){
        this.animal = "Eu sou um animal"
    }
    
}
class Cachorro extends Animal{
    falar(){
        return 'Au au'
    }
}
console.log(new Cachorro().falar())
console.log(new Cachorro().animal)