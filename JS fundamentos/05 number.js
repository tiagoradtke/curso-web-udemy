const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1 , peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 6.7656
const avaliacao2 = 9.7656

console.log(avaliacao1  , avaliacao2)
console.log(Number.isInteger(avaliacao1))
console.log(Number.isInteger(avaliacao2))


let media = (avaliacao1 + avaliacao2)/2
console.log(media)

console.log(media.toFixed(2))
console.log(media.toString())
console.log(media.toString(2))//para binário