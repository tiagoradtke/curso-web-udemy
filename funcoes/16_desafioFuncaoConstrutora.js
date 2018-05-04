
function Pessoa(nome){
    return {
        nome,
        falar(){        
            if(this.nome == "Tiago"){
                console.log(`Meu nome é ${this.nome}`)
            }else{
                console.log(`Meu nome NÂO é ${this.nome}`)
            }
        }
    }

}

p1 = Pessoa('Tiago')
p1.nome
console.log(p1.nome)
p1.falar()

const p2 = new Pessoa('nome')
p2.falar()


function Pessoa2(nome){
    this.nome = nome
    this.falar = function(){
        if(this.nome == "Tiago"){
            console.log(`Meu nome é ${this.nome}`)
        }else{
            console.log(`Meu nome NÂO é ${this.nome}`)
        }

    }
    this.escrever = a => console.log(a)
}
p12 = new Pessoa2('Lucas')
p12.escrever(p12.nome+"teste")
