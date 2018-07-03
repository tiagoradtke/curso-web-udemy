const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos  = filhas.concat(filhos, [2,4.3,54])
console.log("Array Filhas",filhas)
console.log("Array Filhos",filhos)
console.log("Array resultado do concat",todos)

console.log(['a', 'b'].concat([1,2],[3,4], 5, [[6,7]]))
/*
>Sintaxe
    -arr.concat(valor1, valor2, ..., valorN)
>Parâmetros
    -valorN = Arrays ou valores para concatenar (unir) ao array retornado.
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
*/