const Blockchain = require('./blockchain')

const blockchain = new Blockchain()
blockchain.addBlock({ amount: 4 })
//blockchain.addBlock({ amount: 50 })
//blockchain.addBlock({ amount: 100 })
//blockchain.addBlock({ amount: 150 })

console.log("JSON:"+blockchain.toJSON) 
console.log(blockchain)

console.log(blockchain.isValid())
blockchain.blocks[1].data.amount = 30000
console.log(blockchain.isValid())