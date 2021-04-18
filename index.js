
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./blog.cjs.production.min.js')
} else {
  module.exports = require('./blog.cjs.development.js')
}
