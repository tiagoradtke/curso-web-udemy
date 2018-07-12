const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(reponse =>{
    const funcionarios = reponse.data
    //Mulher Chinesa com menor salários  

const mapMulherChinesas = function(valorAtual){
    if(valorAtual.genero == "F" && valorAtual.pais == "China" ){
        return valorAtual
    } 
}
menorSalario = function(a){
    console.log(a.length)
    menorSalario = a[0].salario
    indice = 0
    for (i=0 ; i < a.length;i++){        
        if(menorSalario > a[i].salario){
            console.log(a[i].salario)
            menorSalario = a[i].salario
            indice = i 
        }
    }
    return a[indice]
}

const mulheresChinesas = funcionarios.filter(mapMulherChinesas)
console.log(menorSalario(mulheresChinesas))
})

