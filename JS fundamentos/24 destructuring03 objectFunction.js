function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({}))
console.log(rand({}))

const obj = { max :50 , min: 40}
console.log(rand(obj))
