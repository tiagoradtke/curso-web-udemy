pout = a => console.log(a)

let contador = 1
while(contador <= 10){
    pout(contador)
    contador++
}
 
pout("for")
for (let cont = 0 ; cont <=10 ; cont++){
    pout(`cont = ${cont}`)

}

const notas = [6.7, 7.4 ,9.8 , 7.7]
let media = 0

for(let i = 0;i < notas.length; i++){
    pout(notas[i])
    media += notas[i]
}
pout(`média das ${notas.length} notas = ${media/notas.length}`)