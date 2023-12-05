class CEP{
    static index(req, res){
        res.json({
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
    })}
}

module.exports = CEP;