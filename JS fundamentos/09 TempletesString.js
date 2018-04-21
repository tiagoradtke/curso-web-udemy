const nome = "Rebeca"
const concatenacao = 'ola' + nome + '!'

//Template String
let template = `
    Olá
    ${nome}
    !
    \n
    Seja vem vinda
`

console.log(template)

let template2 = `
    Olá ${nome} !
    \n
    Seja vem vinda
`

console.log(template2)

//expressoes
console.log(`1 + 1 = ${1+1}`)

//funções
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up("cuidado")}`)
