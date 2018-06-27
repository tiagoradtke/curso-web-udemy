//Função construtura 
function Aula(nome , videoID){
    this.nome = nome
    this.videoID = videoID
}

/*
Operador new: novo objeto criado, e tambem aponta pro objetoCriado.protoype
*/
const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 435)
console.log(aula1, aula2)

//Sumulando o new
function novo(f, ...params) {
    //...params- indicada conjunto de valores, array
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula , 'Bem Vindo',123)
const aula4 = novo(Aula , 'Até Breve',435)
console.log(aula3, aula4)

//error!!!!!!!!!!!!!!!
const aula5 = novo(Aula , ['Bem Vindo',123])
const aula6 = novo(Aula ,['Até Breve',435])
console.log(aula5, aula6)