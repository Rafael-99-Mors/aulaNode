const router = require('express').Router()
const path = require('path')
const SobreController = require('./controllers/SobreController')
const ImageController = require('./controllers/ImageController')
const QuestionController = require('./controllers/QuestionController')
const HomeController = require('./controllers/HomeController')

router.get('/', HomeController.index)

router.get('/imagens', ImageController.index)

router.get ('/perguntas', QuestionController.index)

router.get('/sobre', SobreController.index)

router.get ('/ws/69093415/json/', (req, res) => {res.json({
    "cep": "69093-415",
    "logradouro": "Rua 2",
    "complemento": "",
    "bairro": "Cidade Nova",
    "localidade": "Manaus",
    "uf": "AM",
    "ibge": "1302603",
    "gia": "",
    "ddd": "92",
    "siafi": "1303"
})})

module.exports = router