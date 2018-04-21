// tentar evitar o maximo o uso de break e continue, preferir outras alternativas e estrturar para não desviar fluxos por break e continue
pout = a => console.log(a)

const nums = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9, 10]

for (let x in nums){
    if(x == 5){
        break
    } 
    pout(`ìndice = ${x} // número =  ${nums[x]}`)
}


pout("continue")

for (let y in nums){
    if (y%2 == 0 ){    
        continue
    }    
    pout(`ìndice = ${y} // número =  ${nums[y]}`)
}

pout("continue")
for (y in nums){
    if (y%2 != 0 ){    
        continue
    }    
    pout(`ìndice = ${y} // número =  ${nums[y]}`)
}

//rótulo 
externo:
for (a in nums){
    for(b in nums){
        pout(`a = ${a} &&  b = ${b}`)
        if(a == 2 && b == 3){
            break externo// se o break não tivesse o externo, pararia só oi fluxo do for b no momento a =2 e b 3, o rotulo servir para indicar o for anterior, no caso o for A parar parar a execução
        } 
    }
}
/*
Segundo o professor Leonardo Moura não é indicado o uso desses artificios como o rótulo, segundo ele lembra muito a época do GOTO

externo:for (a in nums){
    for(b in nums){
        pout(`a = ${a} &&  b = ${b}`)
        if(a == 2 && b == 3){
            break externo// se o break não tivesse o externo, pararia só oi fluxo do for b no momento a =2 e b 3, o rotulo servir para indicar o for anterior, no caso o for A parar parar a execução
        } 
    }
}

*/