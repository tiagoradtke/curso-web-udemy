/*
Hoist em inglês significa levantar ou suspender algo através de um aparato mecânico. Em bom português, significa usar o guindaste para elevar um objeto. 
E é isto o que acontece em JavaScript quando declaramos uma variável ou função. Sua declaração é “elevada” para o topo do escopo.
*/

console.log("a +",a)
var a = 2
console.log("a +",a)

//console.log("b =", b)
let b = 2
console.log("b =", b)