import { join } from 'path'
import { config } from './wdio.conf'

// ============
// Specs
// ============
config.specs = ['./tests/features/*.feature']

config.user = process.env.BROWSERSTACK_USERNAME
config.key = process.env.BROWSERSTACK_ACCESS_KEY

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    platformName: 'iOS',
    platformVersion: '15.4',
    deviceName: 'iPhone 13',
    app: 'bs://5ee775fbe778ecd2e00d27dbd7f02cbf3c190e5c',
  },
]

exports.config = config
