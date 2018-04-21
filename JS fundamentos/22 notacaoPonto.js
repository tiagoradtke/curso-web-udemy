const pout = a => console.log(`impressão ${a}`)


console.log(Math.ceil(6.1))

const any1 = {}
any1.name = "bola"
//any1['name'] = "bola2"
pout(any1)
pout(any1.name)

function Obj(nome){
    this.nome = nome;//

    this.exec = function(){
        pout("exec")
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
pout(obj2.nome)
pout(obj3.nome)

obj2.exec()
obj3.exec()

pout(null > 0)
pout(null < 0)
pout(null == 0)
pout(null >= 0)
pout(null <= 0)