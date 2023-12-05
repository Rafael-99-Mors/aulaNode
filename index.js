const express = require('express')
const routes = require('./routes')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(3000, () => {console.log('Servidor iniciado com sucesso')})

app.use('/', routes)