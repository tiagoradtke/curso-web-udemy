//funcão imprimir
const pout = a => console.log(`Impressão :${a} !`)

//var dentro de um bloco de cógido que que não seja uma função, ela ficará visível fora do bloco onde ela foi instanciada
{
    {
        {
            {
             var sera = "será"// em outras linguagens isso estaria visivel somente dentro deste bloco, VAR só tem dois escopos possíveis 
             pout(sera)

             let teste = "teste"
             pout(teste)
            }
        }
    }
}

pout(sera)
//pout(teste) let ocasiona erro
var local = 123

function teste(){
    local = 3
}
teste()
pout(local)
//pout(local) var dentro de funcão fica apenas dentro do escopo da função

/*escopo global
evitar variaveis com escopo global, pois variaveis globais pode ser acessados de todos as funcoes, se essa variavel mudar em algum local, mudara para todos

*/