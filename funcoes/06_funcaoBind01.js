const pessoa = {
    saudacao : 'Bom Dia!',
    falar() {
        console.log(this.saudacao)   
    }

}

pessoa.falar()
const falar = pessoa.falar
falar()// nesse caso, o this da função falar, não está se referindo a this do pessoa, mas a outra referêcia
pessoa.falar()

const falarDePessoa = pessoa.falar.bind(pessoa)// função bind método responsável por amarrar certo objeto ao método


falarDePessoa
falar()

/*
Bom dia Pessoal!

Seria mais fácil explicar com um vídeo, mas não posso gravar agora... :(

Em Javascript é possível tratar uma função como um dado, então é possível atribuir uma função para uma variável. E isso é exatamente o que está ocorrendo na linha a seguir:*/

const falar = pessoa.falar
falar() // invocando a função
 /*Quando a função é armazenada na variável falar  e é chamada, a variável this  já não aponta para o objeto pessoa  e por isso o resultado é diferente, pois o this  passa a ser undefined . Em outras palavras, dessa forma a função não está associada à nenhum objeto.

Essa é uma das estranhezas de JS!

No código a seguir, a função falar está sendo invocada, por isso a constante falar irá referenciar o retorno do método, que nesse caso é uma string.*/

const falar = pessoa.falar()
/*
Por último, quando vc faz isso...

const falarDePessoa = pessoa.falar.bind(pessoa)
Está sendo dito para o JS usando o bind  é que o this  sempre vai apontar para pessoa . Então como falarDePessoa  é uma função, o this  não vai mudar mais dentro dela.

*/