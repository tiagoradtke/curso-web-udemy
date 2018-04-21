//
pout = a => console.log(a)

const notas = [7.6, 7.4, 9.8, 8.1, 7.7]

for (let i in notas){
    pout(`Índice ${i} nota = ${notas[i]}`)
    
}

const pessoa = {
    nome : 'Ana',
    sobrenome: 'Silva',
    idade:26,
    peso:64,
    endereco:{
        rua: "tal",
        numero:4354,
        cep:"34243-543"
    }
}

for(let atributo in pessoa){
    pout(`Índice ${atributo} nota = ${pessoa[atributo]}`)

}