/*
Json é um formato de dados, formato textual
provavelmente o formato mais usado para interoperacionalidade de sistemas

JSON é em formato texto e completamente independente de linguagem,
 pois usa convenções que são familiares às linguagens C e familiares, 
 incluindo C++, C#, Java, JavaScript, Perl, Python e muitas outras. 
 Estas propriedades fazem com que JSON seja um formato ideal de troca de dados.
 https://www.json.org/json-pt.html
*/

const obj = {
    a: 1 ,
    b: 2 ,
    c: 3 ,
    palavra:"trert".toUpperCase(),
    soma(){
        return this.a + this.b + this.c
    }
}
console.log(obj.a, obj.b, obj.c,obj.palavra)
console.log(obj.soma())

console.log(JSON.stringify(obj))

console.log(JSON.parse('{ "a" : 1 , "b" : 2, "c" : 3}'))
console.log(JSON.parse('{ "a" : 1.543 , "b" : "String", "c" : true, "d":{}, "e":[]}'))
