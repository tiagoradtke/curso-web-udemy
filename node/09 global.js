//console.log(global)
/*
Não é indicado colocar atributos/objetos/funções diretamente no global, 
os módulos servem a esses propósito. Contudo em algumas ocasições não há problemas
acredito que tudo depende de saber o que se está fazendo. 
*/

global.MinhaApp = {
    saudacao(){
        return 'Estou em todos os lugares!'
    },
    nome :  'Sistema Legal'
}