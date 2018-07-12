const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === "F"
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ?  func : funcAtual
}
const somaSalarios = function(prevVal,elem){        
    return  prevVal += elem.salario
}

axios.get(url).then(reponse =>{
    const funcionarios = reponse.data
    //Mulher Chinesa com menor salários  
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)     
    const somaTodosSlarios = funcionarios.filter(chineses).filter(mulheres)
    
    soma = 0.0
    for(i = 0;i < funcionarios.length  ;i++){
        soma+=funcionarios[i].salario
    }

  //  console.log("Total Soma Salários",soma)
    let soma01 = funcionarios.reduce(somaSalarios,0);
    console.log("Total Soma Salários",soma01)
    console.log("Total Soma Salários",soma)
   // console.log((76*9)+(201*4)+(234*4))
})

