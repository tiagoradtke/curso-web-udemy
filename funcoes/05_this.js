//this, é uma forma de referêncial do objeto atual da execução
//Em JS o tis pode variar dependendo de como a função é chamada

function f1() {console.log(this)}
f1()

//quando se cria um função com o function em JS o this pode variar

// funcões criadas com arrow function o this nunca vai variar