let comparaComThis = function (param) {
    console.log(this === param)

}

comparaComThis(global)//será true, no browser será windows, que também será verdadeiro

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

console.log('----------------------------------------------')
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThis(obj)//this em arrow aponta sempre para o objeto que ele foi criado
comparaComThisArrow(module.exports)

/*compara = (param) => console.log(this === param)
compara(this)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

compara.bind(this)
compara()

compara.bind(obj)
compara()*/