//par de chaves representa a criação de um objeto 
const prod1 = {}

/*em JS dá pra criar o objeto de forma dinâmica
Obejto Em JS é uma coleção de chave(identificador, chave no sentido
que o valor tem que ter um identificador único no objeto) e valor
*/
prod1.nome              = 'Celular Ultra Mega'
prod1.preco             = 4546.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

//prod2
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,         
}

console.log(prod2)

//prod3, objs dentro de objetos
const prod3 = {
    nome: 'Camisa Polo',
    preco: 79.90,
        obj: {
            chave:1,
            obj: {
                chave:324 
                    }
        }
}
console.log(prod3)

//o que seria Json
//Json não é a mesma coisa que objeto, é um formato textual
'{"nome":"Camisa Polo", "preco":79.90}'