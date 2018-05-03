const notas = [7.7 , 6.5, 5.2, 8.9 , 3.6 , 7.1 , 9.0]

// sem uso de callback
let notasBaixas = []

for(let i in notas){
    if (notas[i] > 7){
         notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com Callback
notasBaixas = notas.filter(function(nota) {return nota < 7})
console.log(notasBaixas)

notasBaixas = notas.filter(a => a > 7)//usando função arrow
console.log(notasBaixas)


notasBaixas = notas.filter(a => a > 7)//usando função arrow
console.log(notasBaixas)