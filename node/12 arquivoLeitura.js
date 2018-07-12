/*
Módulo File System já vem instalado no node.js
*/
const fs = require('fs')
const caminho = __dirname + '/12 arquivo.json'

//sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono...
fs.readFile(caminho, 'utf-8',(err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

/*para arquivos json existe formas mais simples de acessar*/
const config = require('./12 arquivo.json')
console.log(config.db)//executande antes por que é sincrono

//Leitura pasta
fs.readdir(__dirname, (err, arquivos)=>{
    console.log('conteudo da pasta....')
    console.log(arquivos)
})


/*
> https://www.w3schools.com/nodejs/nodejs_filesystem.asp
> https://imasters.com.br/desenvolvimento/node-js-6-dicas-do-modulo-file-system
> https://nodejs.org/api/fs.html
*/