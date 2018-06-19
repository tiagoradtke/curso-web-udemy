const pout = a => console.log(`Impressão :${a} !`)

const imprimir = a => console.log(`POO com JS : ${a} !!`)

// Usando a notação literal diferente de json
const obj1= {}
pout(obj1)

// Object em JS
pout(typeof Object)
pout(typeof new Object)
const obj2 = new Object
pout(obj2)

// proprias funções contrutoras
function Produto(nome, preco, desc){
    this.getPrecoDesconto = () =>{return preco *(1-desc)}

}
const produto1 = new Produto("Bandeira", "6.88","0.15")
pout(produto1.nome)// está encapsulado, somente a o objeto ve o atributo "nome"
pout(produto1.preco)// está encapsulado, somente a o objeto ve o atributo "preco"
pout(produto1.desc)// está encapsulado, somente a o objeto ve o atributo "desc"
pout(produto1.getPrecoDesconto())

const produto2 = new Produto("Nootbook", "4353.5434","0.15")
pout(produto2.getPrecoDesconto())

//Função factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 43543, 4)
const f2 = criarFuncionario('Maria', 12343, 1)
pout(f1.getSalario())
pout(f2.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = "ana"
console.log(filha)

// uma função famosa que retorna um Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON", "teste":"teste json"}')
console.log(fromJSON.info)
console.log(fromJSON.teste)