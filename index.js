var express = require('express');
var app = express();
const Blockchain = require('./blockchain')


const blockchain = new Blockchain()

blockchain.addBlock({ amount: 4 })
blockchain.addBlock({ amount: 50 })
blockchain.addBlock({ amount: 100 })
blockchain.addBlock({ amount: 150 })

console.log(blockchain)

console.log(blockchain.isValid())
blockchain.blocks[1].data.amount = 30000
console.log(blockchain.isValid())

app.get('/', function (req, res) {
    const JSON_Object = JSON.stringify(blockchain)
    res.send(blockchain)
});

app.listen(3000, function () {
  console.log('Express rodando na porta 3000!');
});
