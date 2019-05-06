/* eslint-disable @typescript-eslint/no-var-requires */
const pleaseUpgradeNode = require('please-upgrade-node')
const pkg = require('./package.json')

// Node version isn't supported, skip install
pleaseUpgradeNode(pkg, {
  exitCode: 0,
  message(requiredVersion) {
    return (
      'Husky requires Node ' +
      requiredVersion +
      ', skipping Git hooks installation.'
    )
  }
})

// Node version is supported, continue
require('./lib/installer/bin')
