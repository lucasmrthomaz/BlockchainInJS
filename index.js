const Blockchain = require('./blockchain')
var express = require('express')
//const proofWorkStd = require('./proofWork')

//Instancia/Inicia um novo Blockchain
const blockchain = new Blockchain()

//Inicia um proof
//const proofWorkstd = new proofWorkStd()

//Adiciona quantos blocos quiser
//blockchain.addBlock({ amount: 4 })
//blockchain.addBlock({ amount: 50 })
//blockchain.addBlock({ amount: 100 })
blockchain.addBlock({ amount: 150 })

//Imprime no console os blocos adicionados ao chain
console.log(blockchain)

//const proofWorkStd = require('./proofWork')

//Faz o trabalho de proof
//proofWork.doWork()

var app = express();

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

//Verifica se eh um bloco valido
console.log(blockchain.isValid())
blockchain.blocks[1].data.amount = 30000
console.log(blockchain.isValid())

