var type = require('component-type'),
    interpolate = require('ramitos-interpolate')

module.exports = function (n, pos) {
  if(type(n) === 'string')
    return n

  if(type(n) === 'number')
    return interpolate('%dpx', (pos && n < 0) ? 0 : n)

  return '0px'
}