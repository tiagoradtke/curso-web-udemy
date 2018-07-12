const contadorA = require('./08 instanciaUnica')
const contadorB = require('./08 instanciaUnica')

const contadorC = require('./08 instanciaNova')()
const contadorD = require('./08 instanciaNova')()

//Teste instanciaUnica
console.log("Instancia Unica")
contadorA.inc()
contadorA.inc()
console.log(contadorB)
contadorB.inc()
console.log(contadorA)

//Teste instanciaNova
console.log("\nInstancia Nova")
console.log("",contadorC)
console.log("",contadorD)

contadorC.inc()
contadorC.inc()
contadorC.inc()
contadorC.inc()
console.log("",contadorC)
console.log("",contadorD)
contadorD.inc()
contadorD.inc()
console.log("",contadorC)
console.log("",contadorD)
