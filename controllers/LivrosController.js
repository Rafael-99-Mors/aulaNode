class LivrosController{
    static index(req, res){
        res.json([
        {
            message: "O senhor dos Anéis",
            autor:"J.R.R.Tolkien", 
            ano: 1999,
            id: 1
        }, 
        {
            
        message: "Harry Poter",
          autor:"J.K.Rowling", 
          ano: 2000,
            id: 2
    }
    ])
    }

    static show(req, res){
        const id = req.params.id
        res.json({
            message: "O senhor dos Anéis",
            autor:"J.R.R.Tolkien", 
            ano: 1999,
            id: id
        })
    }

    static store(req, res){
        res.json({
            nome: req.body.nome,
            autor:req.body.autor,
            ano: req.body.ano,
            id: 3
        })
    }

    static update(req, res){
        res.json({
            nome: req.body.nome,
            autor:req.body.autor,
            ano: req.body.ano,
            id: req.params.id
        })
    }
    static delete(req, res){
        res.json({
            success: "true"
        })
    }
}

module.exports = LivrosController