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
    app: 'bs://a7fb5916197f45ed8a7a7427e8d578aab9989208',
  },
]

exports.config = config
