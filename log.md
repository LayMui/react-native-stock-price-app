```
yarn test:ios
yarn run v1.22.4                                                                  
$ failsafe clean ios.app test:report                                              
[clean] 
[clean] > react-native-stock-price-app@1.0.0 clean
[clean] > rimraf target && rm -fr reporter/*.html && rm -fr reporter/json rm -fr reporter/*json
[clean] 
[failsafe] Script 'clean' exited with code 0
[ios.app] 
[ios.app] > react-native-stock-price-app@1.0.0 ios.app
[ios.app] > wdio config/wdio.ios.app.conf.ts
[ios.app] 
[ios.app] 
[ios.app] Execution of 1 workers started at 2022-04-28T02:51:00.975Z
[ios.app] 
[ios.app] 2022-04-28T02:51:00.994Z INFO @wdio/cli:launcher: Run onPrepare hook
[ios.app] 2022-04-28T02:51:02.431Z INFO @wdio/cli:launcher: Run onWorkerStart hook
[ios.app] 2022-04-28T02:51:02.433Z INFO @wdio/local-runner: Start worker 0-0 with arg: config/wdio.ios.app.conf.ts
[ios.app] [0-0] 2022-04-28T02:51:02.956Z INFO @wdio/local-runner: Run worker command: run
[ios.app] [0-0] 2022-04-28T02:51:04.074Z INFO wdio-multiple-cucumber-html-reporter: The 'reportFilePerRetry' was not set, it has been set to the default 'true'
[ios.app] [0-0] RUNNING in iOS - /tests/features/SearchStockPrice.feature
[ios.app] [0-0] 2022-04-28T02:51:04.609Z INFO webdriver: Initiate new session using the WebDriver protocol
[ios.app] [0-0] 2022-04-28T02:51:04.676Z INFO webdriver: [POST] http://localhost:4723/session
[ios.app] [0-0] 2022-04-28T02:51:04.676Z INFO webdriver: DATA {
[ios.app] [0-0]   capabilities: {
[ios.app] [0-0]     alwaysMatch: {
[ios.app] [0-0]       browserName: '',
[ios.app] [0-0]       platformName: 'iOS',
[ios.app] [0-0]       'appium:deviceName': 'iPhone 13',
[ios.app] [0-0]       'appium:platformVersion': '15.4',
[ios.app] [0-0]       'appium:orientation': 'PORTRAIT',
[ios.app] [0-0]       'appium:automationName': 'XCUITest',
[ios.app] [0-0]       'appium:app': '/Users/laymui/dev/taiger/react-native-stock-price-app/tests/apps/stockprice.app.zip',
[ios.app] [0-0]       'appium:noReset': false,
[ios.app] [0-0]       'appium:newCommandTimeout': 240
[ios.app] [0-0]     },
[ios.app] [0-0]     firstMatch: [ {} ]
[ios.app] [0-0]   },
[ios.app] [0-0]   desiredCapabilities: {
[ios.app] [0-0]     browserName: '',
[ios.app] [0-0]     platformName: 'iOS',
[ios.app] [0-0]     'appium:deviceName': 'iPhone 13',
[ios.app] [0-0]     'appium:platformVersion': '15.4',
[ios.app] [0-0]     'appium:orientation': 'PORTRAIT',
[ios.app] [0-0]     'appium:automationName': 'XCUITest',
[ios.app] [0-0]     'appium:app': '/Users/laymui/dev/taiger/react-native-stock-price-app/tests/apps/stockprice.app.zip',
[ios.app] [0-0]     'appium:noReset': false,
[ios.app] [0-0]     'appium:newCommandTimeout': 240
[ios.app] [0-0]   }
[ios.app] [0-0] }
[ios.app] [0-0] 2022-04-28T02:51:11.243Z INFO webdriver: COMMAND findElement("accessibility id", "stockTickerSymbolSearchInput")
[ios.app] [0-0] 2022-04-28T02:51:11.244Z INFO webdriver: [POST] http://localhost:4723/session/4904b9d9-f2c0-4f35-b35e-607ea3a79162/element
[ios.app] [0-0] 2022-04-28T02:51:11.244Z INFO webdriver: DATA { using: 'accessibility id', value: 'stockTickerSymbolSearchInput' }
[ios.app] [0-0] 2022-04-28T02:51:11.325Z INFO webdriver: RESULT {
[ios.app] [0-0]   error: 'no such element',
[ios.app] [0-0]   message: 'An element could not be located on the page using the given search parameters.',
[ios.app] [0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[ios.app] [0-0]     '    at XCUITestDriver.doNativeFind (/usr/local/Cellar/appium/1.22.3/libexec/lib/node_modules/appium/node_modules/appium-xcuitest-driver/lib/commands/find.js:130:11)\n' +
[ios.app] [0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:94:5)\n' +
[ios.app] [0-0]     '    at XCUITestDriver.findNativeElementOrElements (/usr/local/Cellar/appium/1.22.3/libexec/lib/node_modules/appium/node_modules/appium-xcuitest-driver/lib/commands/find.js:90:10)\n' +
[ios.app] [0-0]     '    at XCUITestDriver.findElOrEls (/usr/local/Cellar/appium/1.22.3/libexec/lib/node_modules/appium/node_modules/appium-xcuitest-driver/lib/commands/find.js:23:12)\n' +
[ios.app] [0-0]     '    at XCUITestDriver.findElOrElsWithProcessing (/usr/local/Cellar/appium/1.22.3/libexec/lib/node_modules/appium/node_modules/appium-base-driver/lib/basedriver/commands/find.js:33:12)\n' +
[ios.app] [0-0]     '    at XCUITestDriver.findElement (/usr/local/Cellar/appium/1.22.3/libexec/lib/node_modules/appium/node_modules/appium-base-driver/lib/basedriver/commands/find.js:53:10)'
[ios.app] [0-0] }
[ios.app] [0-0] 2022-04-28T02:51:11.334Z INFO webdriver: COMMAND findElement("accessibility id", "stockTickerSymbolSearchInput")
[ios.app] [0-0] 2022-04-28T02:51:11.336Z INFO webdriver: [POST] http://localhost:4723/session/4904b9d9-f2c0-4f35-b35e-607ea3a79162/element
[ios.app] [0-0] 2022-04-28T02:51:11.336Z INFO webdriver: DATA { using: 'accessibility id', value: 'stockTickerSymbolSearchInput' }
[ios.app] [0-0] 2022-04-28T02:51:11.387Z INFO webdriver: RESULT {
[ios.app] [0-0]   error: 'no such element',
[ios.app] [0-0]   message: 'An element could not be located on the page using the given search parameters.',
[ios.app] [0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[ios.app] [0-0]     '    at XCUITestDriver.doNativeFind (/usr/local/Cellar/appium/1.22.3/libexec/lib/node_modules/appium/node_modules/appium-xcuitest-driver/lib/commands/find.js:130:11)\n' +
[ios.app] [0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:94:5)\n' +
[ios.app] [0-0]     '    at XCUITestDriver.findNativeElementOrElements (/usr/local/Cellar/appium/1.22.3/libexec/lib/node_modules/appium/node_modules/appium-xcuitest-driver/lib/commands/find.js:90:10)\n' +
[ios.app] [0-0]     '    at XCUITestDriver.findElOrEls (/usr/local/Cellar/appium/1.22.3/libexec/lib/node_modules/appium/node_modules/appium-xcuitest-driver/lib/commands/find.js:23:12)\n' +
[ios.app] [0-0]     '    at XCUITestDriver.findElOrElsWithProcessing (/usr/local/Cellar/appium/1.22.3/libexec/lib/node_modules/appium/node_modules/appium-base-driver/lib/basedriver/commands/find.js:33:12)\n' +
[ios.app] [0-0]     '    at XCUITestDriver.findElement (/usr/local/Cellar/appium/1.22.3/libexec/lib/node_modules/appium/node_modules/appium-base-driver/lib/basedriver/commands/find.js:53:10)'
[ios.app] [0-0] }
[ios.app] [0-0] 2022-04-28T02:51:11.836Z INFO webdriver: COMMAND findElement("accessibility id", "stockTickerSymbolSearchInput")
[ios.app] [0-0] 2022-04-28T02:51:11.836Z INFO webdriver: [POST] http://localhost:4723/session/4904b9d9-f2c0-4f35-b35e-607ea3a79162/element
[ios.app] [0-0] 2022-04-28T02:51:11.837Z INFO webdriver: DATA { using: 'accessibility id', value: 'stockTickerSymbolSearchInput' }
[ios.app] [0-0] 2022-04-28T02:51:11.914Z INFO webdriver: RESULT {
[ios.app] [0-0]   'element-6066-11e4-a52e-4f735466cecf': '18000000-0000-0000-437D-010000000000',
[ios.app] [0-0]   ELEMENT: '18000000-0000-0000-437D-010000000000'
[ios.app] [0-0] }
[ios.app] [0-0] 2022-04-28T02:51:11.917Z INFO webdriver: COMMAND isElementDisplayed("18000000-0000-0000-437D-010000000000")
[ios.app] [0-0] 2022-04-28T02:51:11.918Z INFO webdriver: [GET] http://localhost:4723/session/4904b9d9-f2c0-4f35-b35e-607ea3a79162/element/18000000-0000-0000-437D-010000000000/displayed
[ios.app] [0-0] 2022-04-28T02:51:11.969Z INFO webdriver: RESULT true
[ios.app] [0-0] 2022-04-28T02:51:11.969Z INFO webdriver: COMMAND findElement("accessibility id", "stockTickerSymbolSearchInput")
[ios.app] [0-0] 2022-04-28T02:51:11.970Z INFO webdriver: [POST] http://localhost:4723/session/4904b9d9-f2c0-4f35-b35e-607ea3a79162/element
[ios.app] [0-0] 2022-04-28T02:51:11.970Z INFO webdriver: DATA { using: 'accessibility id', value: 'stockTickerSymbolSearchInput' }
[ios.app] [0-0] 2022-04-28T02:51:12.042Z INFO webdriver: RESULT {
[ios.app] [0-0]   'element-6066-11e4-a52e-4f735466cecf': '18000000-0000-0000-437D-010000000000',
[ios.app] [0-0]   ELEMENT: '18000000-0000-0000-437D-010000000000'
[ios.app] [0-0] }
[ios.app] [0-0] 2022-04-28T02:51:12.047Z INFO webdriver: COMMAND elementClear("18000000-0000-0000-437D-010000000000")
[ios.app] [0-0] 2022-04-28T02:51:12.047Z INFO webdriver: [POST] http://localhost:4723/session/4904b9d9-f2c0-4f35-b35e-607ea3a79162/element/18000000-0000-0000-437D-010000000000/clear
[ios.app] [0-0] 2022-04-28T02:51:12.116Z INFO webdriver: COMMAND elementSendKeys("18000000-0000-0000-437D-010000000000", "<Screenshot[base64]>")
[ios.app] [0-0] 2022-04-28T02:51:12.116Z INFO webdriver: [POST] http://localhost:4723/session/4904b9d9-f2c0-4f35-b35e-607ea3a79162/element/18000000-0000-0000-437D-010000000000/value
[ios.app] [0-0] 2022-04-28T02:51:12.116Z INFO webdriver: DATA { text: 'Aapl' }
[ios.app] [0-0] 2022-04-28T02:51:12.850Z INFO webdriver: COMMAND isKeyboardShown()
[ios.app] [0-0] 2022-04-28T02:51:12.850Z INFO webdriver: [GET] http://localhost:4723/session/4904b9d9-f2c0-4f35-b35e-607ea3a79162/appium/device/is_keyboard_shown
[ios.app] [0-0] 2022-04-28T02:51:12.984Z INFO webdriver: RESULT true
[ios.app] [0-0] 2022-04-28T02:51:12.985Z INFO webdriver: COMMAND findElement("-ios predicate string", "label == "stockNameText"")
[ios.app] [0-0] 2022-04-28T02:51:12.985Z INFO webdriver: [POST] http://localhost:4723/session/4904b9d9-f2c0-4f35-b35e-607ea3a79162/element
[ios.app] [0-0] 2022-04-28T02:51:12.985Z INFO webdriver: DATA { using: '-ios predicate string', value: 'label == "stockNameText"' }
[ios.app] [0-0] 2022-04-28T02:51:13.139Z INFO webdriver: RESULT {
[ios.app] [0-0]   'element-6066-11e4-a52e-4f735466cecf': '13000000-0000-0000-437D-010000000000',
[ios.app] [0-0]   ELEMENT: '13000000-0000-0000-437D-010000000000'
[ios.app] [0-0] }
[ios.app] [0-0] 2022-04-28T02:51:13.143Z INFO webdriver: COMMAND touchPerform(<object>)
[ios.app] [0-0] 2022-04-28T02:51:13.143Z INFO webdriver: [POST] http://localhost:4723/session/4904b9d9-f2c0-4f35-b35e-607ea3a79162/touch/perform
[ios.app] [0-0] 2022-04-28T02:51:13.143Z INFO webdriver: DATA { actions: [ { action: 'tap', options: [Object] } ] }
[ios.app] [0-0] 2022-04-28T02:51:13.454Z INFO webdriver: COMMAND findElement("accessibility id", "stockTickerSymbolSearchBtn")
[ios.app] [0-0] 2022-04-28T02:51:13.454Z INFO webdriver: [POST] http://localhost:4723/session/4904b9d9-f2c0-4f35-b35e-607ea3a79162/element
[ios.app] [0-0] 2022-04-28T02:51:13.454Z INFO webdriver: DATA { using: 'accessibility id', value: 'stockTickerSymbolSearchBtn' }
[ios.app] [0-0] 2022-04-28T02:51:13.619Z INFO webdriver: RESULT {
[ios.app] [0-0]   'element-6066-11e4-a52e-4f735466cecf': '19000000-0000-0000-437D-010000000000',
[ios.app] [0-0]   ELEMENT: '19000000-0000-0000-437D-010000000000'
[ios.app] [0-0] }
[ios.app] [0-0] 2022-04-28T02:51:13.623Z INFO webdriver: COMMAND isElementDisplayed("19000000-0000-0000-437D-010000000000")
[ios.app] [0-0] 2022-04-28T02:51:13.623Z INFO webdriver: [GET] http://localhost:4723/session/4904b9d9-f2c0-4f35-b35e-607ea3a79162/element/19000000-0000-0000-437D-010000000000/displayed
[ios.app] [0-0] 2022-04-28T02:51:13.710Z INFO webdriver: RESULT true
[ios.app] [0-0] 2022-04-28T02:51:13.710Z INFO webdriver: COMMAND findElement("accessibility id", "stockTickerSymbolSearchBtn")
[ios.app] [0-0] 2022-04-28T02:51:13.710Z INFO webdriver: [POST] http://localhost:4723/session/4904b9d9-f2c0-4f35-b35e-607ea3a79162/element
[ios.app] [0-0] 2022-04-28T02:51:13.710Z INFO webdriver: DATA { using: 'accessibility id', value: 'stockTickerSymbolSearchBtn' }
[ios.app] [0-0] 2022-04-28T02:51:13.860Z INFO webdriver: RESULT {
[ios.app] [0-0]   'element-6066-11e4-a52e-4f735466cecf': '19000000-0000-0000-437D-010000000000',
[ios.app] [0-0]   ELEMENT: '19000000-0000-0000-437D-010000000000'
[ios.app] [0-0] }
[ios.app] [0-0] 2022-04-28T02:51:13.865Z INFO webdriver: COMMAND touchPerform(<object>)
[ios.app] [0-0] 2022-04-28T02:51:13.865Z INFO webdriver: [POST] http://localhost:4723/session/4904b9d9-f2c0-4f35-b35e-607ea3a79162/touch/perform
[ios.app] [0-0] 2022-04-28T02:51:13.865Z INFO webdriver: DATA { actions: [ { action: 'tap', options: [Object] } ] }
[ios.app] [0-0] 2022-04-28T02:51:14.629Z INFO webdriver: COMMAND deleteSession()
[ios.app] [0-0] 2022-04-28T02:51:14.629Z INFO webdriver: [DELETE] http://localhost:4723/session/4904b9d9-f2c0-4f35-b35e-607ea3a79162
[ios.app] [0-0] PASSED in iOS - /tests/features/SearchStockPrice.feature
[ios.app] 2022-04-28T02:51:15.830Z INFO @wdio/cli:launcher: Run onWorkerEnd hook
[ios.app] 2022-04-28T02:51:15.830Z INFO @wdio/cli:launcher: Run onComplete hook
[ios.app] 
[ios.app]  "spec" Reporter:
[ios.app] ------------------------------------------------------------------
[ios.app] [iPhone 13 iOS 15.4 #0-0] Running: iPhone 13 on iOS 15.4 executing /Users/laymui/dev/taiger/react-native-stock-price-app/tests/apps/stockprice.app.zip
[ios.app] [iPhone 13 iOS 15.4 #0-0] Session ID: 4904b9d9-f2c0-4f35-b35e-607ea3a79162
[ios.app] [iPhone 13 iOS 15.4 #0-0]
[ios.app] [iPhone 13 iOS 15.4 #0-0] » /tests/features/SearchStockPrice.feature
[ios.app] [iPhone 13 iOS 15.4 #0-0] Search Company StockPrice
[ios.app] [iPhone 13 iOS 15.4 #0-0] In order to know the stock price
[ios.app] [iPhone 13 iOS 15.4 #0-0] As a trader Jan
[ios.app] [iPhone 13 iOS 15.4 #0-0] Jan wants to see the stock price in real time
[ios.app] [iPhone 13 iOS 15.4 #0-0]
[ios.app] [iPhone 13 iOS 15.4 #0-0] Able to view stock price with a valid company
[ios.app] [iPhone 13 iOS 15.4 #0-0]    ✓ Given Jan is at the stock price app
[ios.app] [iPhone 13 iOS 15.4 #0-0]    ✓ When he want to search for company "Aapl"
[ios.app] [iPhone 13 iOS 15.4 #0-0]    ✓ Then he is able to see the stock price displayed
[ios.app] [iPhone 13 iOS 15.4 #0-0]
[ios.app] [iPhone 13 iOS 15.4 #0-0] 3 passing (4.6s)
[ios.app] 
[ios.app] 
[ios.app] Spec Files:    1 passed, 1 total (100% completed) in 00:00:14 
[ios.app] 
[ios.app] 2022-04-28T02:51:15.831Z INFO @wdio/local-runner: Shutting down spawned worker
[ios.app] 2022-04-28T02:51:16.084Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
[ios.app] 2022-04-28T02:51:16.085Z INFO @wdio/local-runner: shutting down
[failsafe] Script 'ios.app' exited with code 0
[test:report] 
[test:report] > react-native-stock-price-app@1.0.0 test:report
[test:report] > serenity-bdd run --features ./tests/features
[test:report] 
[test:report] Spawning: /Library/Java/JavaVirtualMachines/jdk-11.0.4.jdk/Contents/Home/bin/java -Dserenity.compress.filenames=true -DLOG_LEVEL=warn -Dlogback.configurationFile=/Users/laymui/dev/taiger/react-native-stock-price-app/node_modules/@serenity-js/serenity-bdd/resources/logback.config.xml -jar node_modules/@serenity-js/serenity-bdd/cache/serenity-cli-3.1.0.jar --features ./tests/features --destination target/site/serenity --source target/site/serenity --project react-native-stock-price-app
[test:report] -------------------------------
[test:report] SERENITY COMMAND LINE INTERFACE
[test:report] -------------------------------
[test:report] Loading test outcomes from target/site/serenity
[test:report] Writing aggregated report to target/site/serenity
[test:report] 
[test:report] Report generation done
[failsafe] Script 'test:report' exited with code 0
✨  Done in 32.22s.                                    
```
