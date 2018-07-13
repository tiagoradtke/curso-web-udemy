/*
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise

-Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.
*/

function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(frase)//Resolve aceita apenas um retorno de parametros
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que Legal')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))