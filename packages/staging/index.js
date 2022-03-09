const serverIo = require('server-io-core')
const { join } = require('path')

serverIo({
  webroot: join(__dirname, 'httpdocs'),
  host: '0.0.0.0'
})
