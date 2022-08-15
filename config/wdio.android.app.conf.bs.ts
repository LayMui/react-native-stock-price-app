import { join } from 'path'
import { config } from './wdio.conf'

// ============
// Specs
// ============
config.specs = ['./tests/features/*.feature']

config.user = process.env.BROWSERSTACK_USERNAME
config.key = process.env.BROWSERSTACK_ACCESS_KEY
config.app_id_android = process.env.BROWSERSTACK_APP_ID_ANDROID

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
    app: app_id_android
  },
]

exports.config = config
