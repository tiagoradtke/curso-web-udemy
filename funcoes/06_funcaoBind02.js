//uso de self
function PessoaSelf(){
    this.idade = 0
    
    const self = this// criação de variavel self
    setInterval(function(){
        self.idade++ 
        console.log(self.idade)

        console.log(self)
    }, 1000)// 
}

new PessoaSelf



//
function Pessoa(){
    this.idade = 0
    
    setInterval(function(){
        this.idade++
        console.log(this.idade)

        console.log(this)
    }.bind(this), 1000)// uso de bind
}

new Pessoa




//
function Pessoa2(){
    this.idade = 0
    
    setInterval(function(){
        this.idade++
        console.log(this.idade)

        console.log(this)
    }, 1000)// sem o bind this, o this idade dentro da função estará associda a função setInternal, de modo que retornaram um NaN
}

new Pessoa2