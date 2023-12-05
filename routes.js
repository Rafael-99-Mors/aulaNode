const router = require('express').Router()
const path = require('path')
const SobreController = require('./controllers/SobreController')
const ImageController = require('./controllers/ImageController')
const QuestionController = require('./controllers/QuestionController')
const HomeController = require('./controllers/HomeController')
const CEP = require('./controllers/CEPController')
const LivrosController = require('./controllers/LivrosController')

router.get('/', HomeController.index)

router.get('/imagens', ImageController.index)

router.get ('/perguntas', QuestionController.index)

router.get('/sobre', SobreController.index)

router.get ('/ws/69093415/json/',CEP)

router.get('/livros', LivrosController.index)

router.get('/livros/:id', LivrosController.show)

router.post('/livros', LivrosController.store)

router.put('/livros/:id', LivrosController.update)

router.delete("/livros/:id", LivrosController.delete)

module.exports = router