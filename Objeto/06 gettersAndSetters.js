//Não suporta sobrecarga de método, somente com GET e SET
const sequencia = {
    _valor: 1, // Conveção que pretende indicar que a variável deve ser privada
    get valor(){
        return this._valor++
    }, 
    set valor(valor){
        if(valor > this.valor){
            this._valor = valor
        }else{

        }
    }   
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)