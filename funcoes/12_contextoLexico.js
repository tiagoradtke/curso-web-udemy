const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
 }
 /*
as funções carregam consigo o contexto onde elas foram escritas, e esse conceito permite o conceito Closures

 */
 
 function exec(){
    const valor = 'Local'
    minhaFuncao()
 }

 exec()