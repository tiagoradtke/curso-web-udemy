const fabricantes = ["mercedes", "audi", "BMW"]

function imprimir (nome , indice){
    console.log(`${indice +1}. ${nome}`)

}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(a) {console.log(a)})
fabricantes.forEach(a => console.log(a))//callback nada mais é do que chamar uma função a cada evento, nesse caso cada evento é a chamada de cada elemento do array chamado pelo foreach