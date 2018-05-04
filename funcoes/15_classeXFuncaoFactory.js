class Pessoa {
    constructor(nome){
        this.nome = nome       
    }
    falar(){        
        if(this.nome == "Tiago"){
            console.log(`Meu nome é ${this.nome}`)
        }else{
            console.log(`Meu nome NÂO é ${this.nome}`)
        }
    }

}

const p1 = new Pessoa('João')
p1.falar()

p1.nome = 'Tiago'
p1.falar()

const criarPessoa = nome =>{
    return{
        falar: () => console.log(`nome : ${nome}`)
    }

}

const p2 = pessoa('João')
p1.falar()