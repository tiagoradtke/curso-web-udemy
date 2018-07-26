const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))// comando que serve para prover/servir os arquivos estáticos
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload')
    },
    filename: function (req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }

})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) =>{
    upload(req, res, err =>{
        if(err){
            return res.end("Ocorreu um erro")
        }
        res.end('Concluído com sucesso')
    } )
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id :4
    })
})

app.get('/parOuImpar', (req, res)=>{
    /*
        Dentro do express existem formas de receber os dados do front
        req.body
        req.query
        req.params
    */
    const par = parseInt(req.query.numero) % 2 === 0 
    console.log(par)
    res.send({
        resultado: par ? 'par': 'impar'
    })
})

// app.get('/teste', (req, res) => res.send('ok'))
app.listen(8080, ()=>console.log('Executando'))
