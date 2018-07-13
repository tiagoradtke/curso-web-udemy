/*
Map não aceita repetição nas chaves
map é uma coleção de chave e valor
*/
const tecnologias = new Map()
tecnologias.set('react', {framework:false})
tecnologias.set('Angular', {framework:true})

console.log(tecnologias.react)
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map(
    [
        [function() {}, 'Função'],
        [{}, 'Objeto'],
        [123, 'Número'],
        ['teste', 'Número'],
    ]
)

chavesVariadas.forEach((vl,ch)=>{
    console.log(ch,vl)
})


//has retorna se um elemento está contido no map
console.log(`
has retorna se um elemento está contido no map`)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.has('teste'))
console.log(chavesVariadas.has('Número'))
console.log(chavesVariadas.has({}))

//.delete
console.log(`
delete`)
console.log(chavesVariadas.delete(123))
console.log(chavesVariadas.has(123))

//.size
console.log(`
size`)
console.log(chavesVariadas.size)

//teste de set chaves iguais
console.log(`
chaves iguais?`)
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)
console.log(chavesVariadas.size)


/*https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map*/