console.log(typeof Array)
console.log(typeof new Array)
console.log(typeof [])
console.log(typeof [1,3,54,"43"])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log("\n",aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
console.log(aprovados[54])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados[3])
console.log(aprovados[4])
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)
console.log(aprovados.length)

delete aprovados[1]
console.log("\n",aprovados)
console.log(aprovados.length)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento 1', 'Elemento 2')
console.log("\n",aprovados)
 
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(-2, 1)
console.log("\n",aprovados)

/*
- Syntax
    > array.splice(index, howmany, item1, ....., itemX)
- Parameter Values
    index	            Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array
    howmany	            Optional. The number of items to be removed. If set to 0, no items will be removed
    item1, ..., itemX	Optional. The new item(s) to be added to the array
*/

