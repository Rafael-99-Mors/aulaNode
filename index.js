const express = require('express')
const routes = require('./routes')
const app = express()

app.listen(3000, () => {console.log('Servidor iniciado com sucesso')})

app.use('/', routes)