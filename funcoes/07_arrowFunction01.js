let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a//explicitamente tem o return

console.log(dobro(Math.PI))

let ola  = function () {
    return 'olá'
}

ola = () => 'olá'
ola = _ => 'olá'//possui um param, da pra executar sem passar parametro

console.log(ola())