//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

// v e v  -> v
// v e f  -> v
// f e f  -> v

// v ou ?  -> v // em "OU" basta um dar verdadeiro não lógica, que não verifica os outros
// f ou v  -> v
// f ou f  -> f

//v xor f -> v // no XOR, as sentenças não podem ser ambas do false, ou true, tem que serem diferentes
//f xor v -> v
//v xor v -> f
//f xor f -> f

//!v -> f
//!f -> v

const f = false
const v = true

// Operador AND
console.log(v && v )
console.log(v && f)
console.log(f && f)

// Operador OR
console.log(v || f)
console.log(f || v)
console.log(f || f)

//operador XOR
console.log(v ^ f)
console.log(f ^ v)
console.log(f ^ f)
console.log(v ^ v)

//operador !
console.log(!v)
console.log(!f)

console.log(!!v)
console.log(!!f)

//problema prático
//dois trabalhos
console.log('Problema prático')
/*
Qual diferença entre | e &  e || e &&? Bitwise operators
| e & - faz comparação por bit

*/

function compras(trabalho1 , trabalho2){
    const comprarSorvete = trabalho1 || trabalho2// tomar soverte tem um condição, aceiteção de qualquer ums dos dois trabalho, nesse caso, se o trabalho1 for aceito, a segunda condição nem é realizada.
    const comprarTV50    = trabalho1 && trabalho2// ambas tem que serem verdadedeiras para que se possa comprar a tv, se o primeiro for falso, nem olha a segunda operação, pois não há necessidade. 
    //const comprarTV32    = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTV32   = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}// recurso novo ECMA2015, não precisa fazer: "cSorvete :comprarSorvete", ele automaticamente já cria o par chave = valor quando voce apenas põe a variavel.
}

console.log(compras(true, true))
console.log(compras(false, true))
console.log(compras(true , false))
console.log(compras(false , false))