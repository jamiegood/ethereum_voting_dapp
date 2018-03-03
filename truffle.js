require('babel-register')

module.exports = {
 networks: {
  development: {
   host: 'localhost',
   port: 8545,
   network_id: '*',
   from: '0x3e55ee01c6cfdafd4ca01ebd834fdb3a39ceeb86',
   gas: 470000
  }
 }
}
