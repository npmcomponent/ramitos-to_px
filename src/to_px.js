var type = require('type'),
    interpolate = require('interpolate')

module.exports = function (n, pos) {
  if(type(n) === 'string')
    return n

  if(type(n) === 'number')
    return interpolate('%dpx', (pos && n < 0) ? 0 : n)

  return '0px'
}