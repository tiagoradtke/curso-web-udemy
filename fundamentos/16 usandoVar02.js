//funcão imprimir
const pout = a => console.log(`Impressão :${a} !`)

var numero = 1
{
    var numero = 2
    pout(numero)
}
pout(numero)


/*Fuja do escopo Global, muito mais critico no front end*/