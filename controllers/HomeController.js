class HomeController{
    static index(req, res){
        res.json({
            nome: "Rafael",
            sobrenome: "Moura"
        })
    }
}
module.exports = HomeController;