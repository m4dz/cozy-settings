'use strict'

const merge = require('webpack-merge')

const { production } = require('./config/webpack.vars')

const common = merge(
  require('./config/webpack.base.config'),
  require('./config/webpack.disable-contexts.config'),
  require('./config/webpack.preact.config'),
  require('./config/webpack.cozy-ui.config'),
  require('./config/webpack.pictures.config'),
  require('./config/webpack.copyfiles.config')
)

module.exports = merge(
  common,
  require(production ? './config/webpack.prod.config' : './config/webpack.config.dev')
)
