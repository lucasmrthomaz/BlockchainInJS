var express = require('express');
var app = express();
const Blockchain = require('./blockchain')
const proofWorkStd = require('./proofWork')

/* express: Ao digitar no browser
localhost:3000 retornar um objeto JSON */
app.get('/', function (req, res) {
    const JSON_Object = JSON.stringify(blockchain)
    res.send(blockchain)
});

/* express: Efetiva a inicilizacao de 
uma nova instancia do express */
app.listen(3000, function () {
  console.log('Express rodando na porta 3000!');
});

module.exports = "API"
