//Cadeia de protótipos (prototype Chain)

/*
é possível adicionar atribuir atributos e valores no Object, contudo isso não é
indicado, por que esse tipo de ação impactará to a estrutura de herança de toda
a aplicação... No entanto não quer dizer que não é possivel em situações muito
específicas 
*/
//exemplo 1
console.log("...Exemplo 1...")
Object.prototype.attr0 = '0'

const avo = {attr1: 'A'}
const pai = {__proto__:avo , attr2: 'B', attr3: 'attr3 do pai'}
const filho = {__proto__:pai , attr3: 'C'}

console.log(filho.attr0)
console.log(filho.attr1)
console.log(filho.attr2)
console.log(filho.attr3)

for(let key in filho){
    filho.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}

//exemplo 2
console.log("...Exemplo 2...")
const carro = {
    velAtual:0,
    velMax:200,
    acelerarMais(delta){
        if(this.velAtual +  delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax:324, //Shadowing(sombreamento)
}
const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

volvo.acelerarMais(250)
console.log(volvo.status())