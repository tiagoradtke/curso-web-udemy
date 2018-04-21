const pout = (a , b) => {console.log(`${b} : ${a}`)}


for (let i= 0; i < 10; i++){
    pout(i,"Valor de Let dentro do loop")
}

pout(i,"Valor de Let Fora do loop")