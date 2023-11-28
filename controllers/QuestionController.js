const path = require('path')
class QuestionController{
    static index(req, res){
        res.sendFile(path.resolve('perguntas.html'))
    }
}
module.exports = QuestionController