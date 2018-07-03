const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
console.log(typeof aprovados)
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1})${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados =  aprovado => console.log("\n",aprovado)
aprovados.forEach(exibirAprovados)

/*
Syntax
array.forEach(function(currentValue, index, arr), thisValue)

https://www.w3schools.com/jsref/jsref_forEach.asp

*/