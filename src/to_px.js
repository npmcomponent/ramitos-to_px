var type = require('type'),
    interpolate = require('interpolate')

module.exports = function (n) {
  if(type(n) === 'string')
    return n

  if(type(n) === 'number')
    return interpolate('%dpx', n)

  return '0px'
}