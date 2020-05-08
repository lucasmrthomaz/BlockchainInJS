var express = require('express');
var app = express();
const API = require('./API')
const Blockchain = require('./blockchain')
const proofWorkStd = require('./proofWork')


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

//Faz o trabalho de proof
//console.log(proofWork.doWork())

//Verifica se eh um bloco valido
console.log(blockchain.isValid())
blockchain.blocks[1].data.amount = 30000
console.log(blockchain.isValid())

