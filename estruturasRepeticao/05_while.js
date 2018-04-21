pout = a => console.log(a)

function getInteiroAleatorioEntre(min, max){
    const valor = Math.random()*(max - min) +min
    return Math.floor(valor)
}

let opcao = 0
let  controle = 0

while(opcao != 10){
    opcao = getInteiroAleatorioEntre(-1,11)
    pout(opcao)   
    if(controle == 100){
        break    
    }
    controle++
}
pout("controle")
pout(controle)


