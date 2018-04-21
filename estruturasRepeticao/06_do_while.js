pout = a => console.log(a)

const numAleatorio = function(min, max){
    
    if(min > max){ 
        this.max = min
        this.min = max
    }else{
        this.max = max
        this.min = min
    }
    return Math.floor(Math.random() *(max - min) + min)
}

pout(numAleatorio(15,10))

//do while sempre entra pelo menos uma vez no laço de repetição
let valor = 10
do{
valor = numAleatorio(15,2)
pout(valor)
}while(valor != 10)