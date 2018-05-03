function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0
    //Metodo Público
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }

    }
    //metodo publico
    this.getVelocidadeAtual = function(){//this torna a função ou atributo público
        return velocidadeAtual
    }
}


let pout = a => console.log(a)
const uno = new Carro
pout(uno.getVelocidadeAtual())
uno.acelerar()
pout(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
pout(ferrari.getVelocidadeAtual())

pout(typeof Carro)
pout(typeof ferrari)