require('babel-register')

module.exports = {
 networks: {
  development: {
   host: 'localhost',
   port: 8545,
   network_id: '*',
   from: '0xb8aaccb82fced940a02a3b8b241e9521780d5677',
   gas: 4700000
  }
 }
}
