import { join } from 'path'
import { config } from './wdio.conf.bs'

// ============
// Specs
// ============
config.specs = ['./tests/features/*.feature']

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    platformName: 'android',
    platformVersion: '9.0',
    deviceName: 'Google Pixel 3',
    app: 'bs://5ee775fbe778ecd2e00d27dbd7f02cbf3c190e5c',
  },
]

exports.config = config
