const escola = "Cod3r"

console.log(escola)


//charAt
console.log(escola.charAt(4)) //retorna a letra da string
console.log(escola.charAt(5)) //retorna valor vazio e não erro

//charCodeAt
console.log(escola.charCodeAt(2))// retorna valor da tabela ascii

//indexOf
console.log(escola.indexOf('C'))// retorna posição da ocorrencia, se não achar retorna -1

//indexOf - extrai uma string de outra nas posições desejadas
console.log(escola.indexOf(1))
console.log(escola.substring(0,3))

//concatenação
console.log('Escola '.concat(escola).concat("!"))
console.log("escola"+escola+escola)

//replace
console.log(escola.replace("C","T" ))
console.log(escola.replace(/\w/g,"T" ))//regex

//split - divide uma string em array usando qualquer separador desejado
console.log('Ana, Pedro, Tiago'.split(","))
console.log('Ana, Pedro, Tiago'.split("a"))








