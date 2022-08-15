Running on bs with the command

yarn android.bs.app

```
0-0] 2021-12-07T11:36:44.350Z ERROR @wdio/runner: Error: Failed to create session.
[0-0] [BROWSERSTACK_INVALID_APP_CAP] The app_url/ custom_id/ shareable_id specified in the 'app' capability in your test script is invalid. Please update the 'app' capability with a valid value and try again.

serenityjs-cucumber:

```

work with the built-in WebdriverIO cucumber framework, but not with @serenity-js/cucumber adapter

```

```
[!] Could not find action, lane or variable 'upload_to_browserstack_app_automate'. Check out the documentation for more details: https://docs.fastlane.tools/actions
```


./gradlew androidDependencies

```
+
FAILURE: Build failed with an exception.

* What went wrong:
Received complete event for an unknown operation (id: 33688)

* Try:
Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Exception is:
java.lang.IllegalStateException: Received complete event for an unknown operation (id: 33688)
        at org.gradle.internal.logging.console.ProgressOperations.complete(ProgressOperations.java:53)
        at org.gradle.internal.logging.console.WorkInProgressRenderer.renderNow(WorkInProgressRenderer.java:190)
        at org.gradle.internal.logging.console.WorkInProgressRenderer.onOutput(WorkInProgressRenderer.java:71)
        at org.gradle.internal.logging.console.BuildStatusRenderer.onOutput(BuildStatusRenderer.java:111)
        at org.gradle.internal.logging.console.AbstractUserInputRenderer.onOutput(AbstractUserInputRenderer.java:56)
        at org.gradle.internal.logging.console.ThrottlingOutputEventListener.renderNow(ThrottlingOutputEventListener.java:94)
        at org.gradle.internal.logging.console.ThrottlingOutputEventListener.onOutput(ThrottlingOutputEventListener.java:84)
        at org.gradle.internal.logging.sink.OutputEventRenderer.removeChain(OutputEventRenderer.java:120)
        at org.gradle.internal.logging.sink.OutputEventRenderer.restore(OutputEventRenderer.java:104)
        at org.gradle.internal.logging.services.DefaultLoggingManager$StartableLoggingRouter.stop(DefaultLoggingManager.java:298)
        at org.gradle.internal.logging.services.DefaultLoggingManager.stop(DefaultLoggingManager.java:101)
        at org.gradle.internal.logging.services.DefaultLoggingManager.stop(DefaultLoggingManager.java:38)
        at org.gradle.launcher.cli.DefaultCommandLineActionFactory$WithLogging.execute(DefaultCommandLineActionFactory.java:242)
        at org.gradle.launcher.Main.doAction(Main.java:35)
        at org.gradle.launcher.bootstrap.EntryPoint.run(EntryPoint.java:50)
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
        at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
        at java.base/java.lang.reflect.Method.invoke(Method.java:566)
        at org.gradle.launcher.bootstrap.ProcessBootstrap.runNoExit(ProcessBootstrap.java:60)
        at org.gradle.launcher.bootstrap.ProcessBootstrap.run(ProcessBootstrap.java:37)
        at org.gradle.launcher.GradleMain.main(GradleMain.java:31)
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
        at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
        at java.base/java.lang.reflect.Method.invoke(Method.java:566)
        at org.gradle.wrapper.BootstrapMainStarter.start(BootstrapMainStarter.java:30)
        at org.gradle.wrapper.WrapperExecutor.execute(WrapperExecutor.java:129)
        at org.gradle.wrapper.GradleWrapperMain.main(GradleWrapperMain.java:61)
```


Hidekeyboard on iOS real device issue:
```
for app with pid 12827
    t =   126.77s                 Find: Descendants matching type Button
    t =   126.77s                 Find: Elements matching predicate '"Hide keyboard" IN identifiers'
2022-04-01 17:27:30.021162+0800 WebDriverAgentRunner-Runner[12814:695823] Enqueue Failure: Failed to get matching snapshot: No matches found for Elements matching predicate '"Hide keyboard" IN identifiers' from input {(
    Button, identifier: 'shift', label: 'shift',
    Button, label: 'Next keyboard', value: 简体手写,
    Button, identifier: 'Return', label: 'return',
    Button, label: 'Clear text'
)} /usr/local/lib/node_modules/appium/node_modules/appium-webdriveragent/WebDriverAgentRunner/UITestingUITests.m 39 1
    t =   126.78s         Synthesize event
    t =   126.78s             Failed: Failed to compute hit point for (null): (null)
2022-04-01 17:27:30.029268+0800 WebDriverAgentRunner-Runner[12814:695823] Enqueue Failure: Failed to synthesize event: Failed to compute hit point for (null): (null) /usr/local/lib/node_modules/appium/node_modules/appium-webdriveragent/WebDriverAgentRunner/UITestingUITests.m 39 1
    t =   127.80s Checking `Expect predicate `existsNoRetry == 0` for object Keyboard`
    t =   127.80s     Checking existence of `Keyboard`
    t =   127.80s         Requesting snapshot of accessibility hierarchy for app with pid 12827
    t =   127.84s         Find: Descendants matching type Keyboard
    t =   127.84s     Capturing element debug description
    t =   128.86s Checking `Expect predicate `existsNoRetry == 0` for object Keyboard`
    t =   128.86s     Checking existence of `Keyboard`
    t =   128.87s         Requesting snapshot of accessibility hierarchy for app```

    On lower end processor 2 GHz Quad-Core Intel Core i5
```
    Error: Failed to create session.
[0-0] Unable to connect to "http://localhost:4723/", make sure browser driver is running on that address.
```

Need to use higher end processor 2.4GHz and above



serenityjs + webdriverio + cucumber not working 
```

 ios.app] > react-native-stock-price-app@1.0.0 ios.app
[ios.app] > wdio config/wdio.ios.app.conf.ts
[ios.app] 
[ios.app] 
[ios.app] Execution of 1 workers started at 2022-04-30T09:57:23.116Z
[ios.app] 
[ios.app] 2022-04-30T09:57:23.160Z INFO @wdio/cli:launcher: Run onPrepare hook
[ios.app] 2022-04-30T09:57:24.635Z INFO @wdio/cli:launcher: Run onWorkerStart hook
[ios.app] 2022-04-30T09:57:24.638Z INFO @wdio/local-runner: Start worker 0-0 with arg: config/wdio.ios.app.conf.ts
[ios.app] [0-0] 2022-04-30T09:57:25.206Z INFO @wdio/local-runner: Run worker command: run
[ios.app] [0-0] RUNNING in iOS - /tests/features/SearchStockPrice.feature
[ios.app] [0-0] 2022-04-30T09:57:26.451Z INFO webdriver: Initiate new session using the WebDriver protocol
[ios.app] [0-0] 2022-04-30T09:57:26.521Z INFO webdriver: [POST] http://localhost:4723/session
[ios.app] [0-0] 2022-04-30T09:57:26.522Z INFO webdriver: DATA {
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
[ios.app] [0-0] error: unknown option '--no-backtrace'
[ios.app] [0-0] FAILED in iOS - /tests/features/SearchStockPrice.feature
[ios.app] 2022-04-30T09:57:36.053Z INFO @wdio/cli:launcher: Run onWorkerEnd hook
[ios.app] 2022-04-30T09:57:36.053Z INFO @wdio/cli:launcher: Run onComplete hook
[ios.app] 
[ios.app] Spec Files:    0 passed, 1 failed, 1 total (100% completed) in 00:00:12 
[ios.app] 
[ios.app] 2022-04-30T09:57:36.054Z INFO @wdio/local-runner: Shutting down spawned worker
[ios.app] 2022-04-30T09:57:36.305Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
[ios.app] 2022-04-30T09:57:36.305Z INFO @wdio/local-runner: shutting down
[failsafe] Script 'ios.app' exited with code 1
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
error Command failed with exit code 1.                                            
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command


 ```

 Use wdio.conf.ts from https://github.com/viper3400/serenity-js-cucumber-webdriverio-template/blob/feature-migration-3.x/wdio.conf.ts 
```
 [ios.app] [0-0]     'appium:noReset': false,
[ios.app] [0-0]     'appium:newCommandTimeout': 240
[ios.app] [0-0]   }
[ios.app] [0-0] }
[ios.app] [0-0] 2022-05-05T08:00:07.284Z ERROR @wdio/runner: TypeError: Cannot read property 'CUCUMBER_PUBLISH_ENABLED' of undefined
[ios.app] [0-0]     at isPublishing (/Users/laymui/dev/taiger/react-native-stock-price-app/node_modules/@cucumber/cucumber/src/api/convert_configuration.ts:83:24)
[ios.app] [0-0]     at makePublishConfig (/Users/laymui/dev/taiger/react-native-stock-price-app/node_modules/@cucumber/cucumber/src/api/convert_configuration.ts:67:19)
[ios.app] [0-0]     at convertFormats (/Users/laymui/dev/taiger/react-native-stock-price-app/node_modules/@cucumber/cucumber/src/api/convert_configuration.ts:58:14)
[ios.app] [0-0]     at convertConfiguration (/Users/laymui/dev/taiger/react-native-stock-price-app/node_modules/@cucumber/cucumber/src/api/convert_configuration.ts:35:14)
[ios.app] [0-0]     at loadConfiguration (/Users/laymui/dev/taiger/react-native-stock-price-app/node_modules/@cucumber/cucumber/src/api/load_configuration.ts:38:46)
[ios.app] [0-0]     at Cli.run (/Users/laymui/dev/taiger/react-native-stock-price-app/node_modules/@cucumber/cucumber/src/cli/index.ts:68:30)
[ios.app] [0-0]     at processTicksAndRejections (node:internal/process/task_queues:94:5)
[ios.app] [0-0]     at async Runner.run (/Users/laymui/dev/taiger/react-native-stock-price-app/node_modules/@wdio/runner/build/index.js:152:24)
[ios.app] [0-0]  Error:  Cannot read property 'CUCUMBER_PUBLISH_ENABLED' of undefin
```


Comment out  runner: 'cucumber' at wdio.conf.ts
```
ios.app] 2022-05-12T07:27:33.576Z INFO @wdio/local-runner: Start worker 0-0 with arg: config/wdio.ios.app.conf.ts
[ios.app] [0-0] 2022-05-12T07:27:33.912Z INFO @wdio/local-runner: Run worker command: run
[ios.app] [0-0] 2022-05-12T07:27:34.668Z ERROR @wdio/local-runner: Failed launching test session: Error: Cannot find module 'mocha'
[ios.app] [0-0] Require stack:
```

Issue with imagium integration on 2nd screenshot
this code snippet
  var ID = imagium.getUID()
 var screenshot = driver.saveScreenshot('./company.png');
 imagium.validateScreenshot(ID,  screenshot)
  }

```
3-77311d99eaf3
[0-0] Error: connect ECONNREFUSED 127.0.0.1:80
[0-0]     at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1157:16) {
[0-0]   errno: -61,
[0-0]   code: 'ECONNREFUSED',
[0-0]   syscall: 'connect',
[0-0]   address: '127.0.0.1',
[0-0]   port: 80,
[0-0]   config: {
[0-0]     url: 'undefined/api/GetUID',
[0-0]     method: 'post',
[0-0]     data: '{"TestName":"Webdriverio Integration"}',
[0-0]     headers: {
[0-0]       Accept: 'application/json, text/plain, */*',
[0-0]       'Content-Type': 'application/json',
[0-0]       'User-Agent': 'axios/0.21.4',
[0-0]       'Content-Length': 38
[0-0]     },
[0-0]     transformRequest: [ [Function: transformRequest] ],
[0-0]     transformResponse: [ [Function: transformResponse] ],
[0-0]     timeout: 0,
[0-0]     adapter: [Function: httpAdapter],
[0-0]     xsrfCookieName: 'XSRF-TOKEN',
[0-0]     xsrfHeaderName: 'X-XSRF-TOKEN',
[0-0]     maxContentLength: -1,
[0-0]     maxBodyLength: -1,
[0-0]     validateStatus: [Function: validateStatus],
[0-0]     transitional: {
[0-0]       silentJSONParsing: true,
[0-0]       forcedJSONParsing: true,
[0-0]       clarifyTimeoutError: false
[0-0]     }
[0-0]   },
[0-0]   request: <ref *1> Writable {
[0-0]     _writableState: WritableState {
[0-0]       objectMode: false,
[0-0]       highWaterMark: 16384,
[0-0]       finalCalled: false,
[0-0]       needDrain: false,
[0-0]       ending: false,
[0-0]       ended: false,
[0-0]       finished: false,
[0-0]       destroyed: false,
[0-0]       decodeStrings: true,
[0-0]       defaultEncoding: 'utf8',
[0-0]       length: 0,
[0-0]       writing: false,
[0-0]       corked: 0,
[0-0]       sync: true,
[0-0]       bufferProcessing: false,
[0-0]       onwrite: [Function: bound onwrite],
[0-0]       writecb: null,
[0-0]       writelen: 0,
[0-0]       afterWriteTickInfo: null,
[0-0]       buffered: [],
[0-0]       bufferedIndex: 0,
[0-0]       allBuffers: true,
[0-0]       allNoop: true,
[0-0]       pendingcb: 0,
[0-0]       constructed: true,
[0-0]       prefinished: false,
[0-0]       errorEmitted: false,
[0-0]       emitClose: true,
[0-0]       autoDestroy: true,
[0-0]       errored: null,
[0-0]       closed: false,
[0-0]       closeEmitted: false,
[0-0]       [Symbol(kOnFinished)]: []
[0-0]     },
[0-0]     _events: [Object: null prototype] {
[0-0]       response: [Function: handleResponse],
[0-0]       error: [Function: handleRequestError]
[0-0]     },
[0-0]     _eventsCount: 2,
[0-0]     _maxListeners: undefined,
[0-0]     _options: {
[0-0]       maxRedirects: 21,
[0-0]       maxBodyLength: 10485760,
[0-0]       protocol: 'http:',
[0-0]       path: 'undefined/api/GetUID',
[0-0]       method: 'POST',
[0-0]       headers: [Object],
[0-0]       agent: undefined,
[0-0]       agents: [Object],
[0-0]       auth: undefined,
[0-0]       hostname: null,
[0-0]       port: null,
[0-0]       nativeProtocols: [Object],
[0-0]       pathname: 'undefined/api/GetUID'
[0-0]     },
[0-0]     _ended: false,
[0-0]     _ending: true,
[0-0]     _redirectCount: 0,
[0-0]     _redirects: [],
[0-0]     _requestBodyLength: 38,
[0-0]     _requestBodyBuffers: [ [Object] ],
[0-0]     _onNativeResponse: [Function (anonymous)],
[0-0]     _currentRequest: ClientRequest {
[0-0]       _events: [Object: null prototype],
[0-0]       _eventsCount: 7,
[0-0]       _maxListeners: undefined,
[0-0]       outputData: [],
[0-0]       outputSize: 0,
[0-0]       writable: true,
[0-0]       destroyed: false,
[0-0]       _last: true,
[0-0]       chunkedEncoding: false,
[0-0]       shouldKeepAlive: false,
[0-0]       maxRequestsOnConnectionReached: false,
[0-0]       _defaultKeepAlive: true,
[0-0]       useChunkedEncodingByDefault: true,
[0-0]       sendDate: false,
[0-0]       _removedConnection: false,
[0-0]       _removedContLen: false,
[0-0]       _removedTE: false,
[0-0]       _contentLength: null,
[0-0]       _hasBody: true,
[0-0]       _trailer: '',
[0-0]       finished: false,
[0-0]       _headerSent: true,
[0-0]       _closed: false,
[0-0]       socket: [Socket],
[0-0]       _header: 'POST undefined/api/GetUID HTTP/1.1\r\n' +
[0-0]         'Accept: application/json, text/plain, */*\r\n' +
[0-0]         'Content-Type: application/json\r\n' +
[0-0]         'User-Agent: axios/0.21.4\r\n' +
[0-0]         'Content-Length: 38\r\n' +
[0-0]         'Host: localhost\r\n' +
[0-0]         'Connection: close\r\n' +
[0-0]         '\r\n',
[0-0]       _keepAliveTimeout: 0,
[0-0]       _onPendingData: [Function: nop],
[0-0]       agent: [Agent],
[0-0]       socketPath: undefined,
[0-0]       method: 'POST',
[0-0]       maxHeaderSize: undefined,
[0-0]       insecureHTTPParser: undefined,
[0-0]       path: 'undefined/api/GetUID',
[0-0]       _ended: false,
[0-0]       res: null,
[0-0]       aborted: false,
[0-0]       timeoutCb: null,
[0-0]       upgradeOrConnect: false,
[0-0]       parser: null,
[0-0]       maxHeadersCount: null,
[0-0]       reusedSocket: false,
[0-0]       host: 'localhost',
[0-0]       protocol: 'http:',
[0-0]       _redirectable: [Circular *1],
[0-0]       [Symbol(kCapture)]: false,
[0-0]       [Symbol(kNeedDrain)]: false,
[0-0]       [Symbol(corked)]: 0,
[0-0]       [Symbol(kOutHeaders)]: [Object: null prototype]
[0-0]     },
[0-0]     _currentUrl: 'http:undefined/api/GetUID',
[0-0]     [Symbol(kCapture)]: false
[0-0]   },
[0-0]   response: undefined,
[0-0]   isAxiosError: true,
[0-0]   toJSON: [Function: toJSON],
[0-0]   [Symbol(originalCallSite)]: [ CallSite {} ],
[0-0]   [Symbol(mutatedCallSite)]: [ CallSite {} ]
[0-0] }
[0-0] Error: connect ECONNREFUSED 127.0.0.1:80
[0-0]     at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1157:16) {
[0-0]   errno: -61,
[0-0]   code: 'ECONNREFUSED',
[0-0]   syscall: 'connect',
[0-0]   address: '127.0.0.1',
[0-0]   port: 80,
[0-0]   config: {
[0-0]     url: 'undefined/api/Validate',
[0-0]     method: 'post',
[0-0]     data: '{"StepName":"Step 1","TestRunID":{},"ImageBase64":"[object Promise]"}',
[0-0]     headers: {
[0-0]       Accept: 'application/json, text/plain, */*',
[0-0]       'Content-Type': 'application/json',
[0-0]       'User-Agent': 'axios/0.21.4',
[0-0]       'Content-Length': 69
[0-0]     },
[0-0]     transformRequest: [ [Function: transformRequest] ],
[0-0]     transformResponse: [ [Function: transformResponse] ],
[0-0]     timeout: 0,
[0-0]     adapter: [Function: httpAdapter],
[0-0]     xsrfCookieName: 'XSRF-TOKEN',
[0-0]     xsrfHeaderName: 'X-XSRF-TOKEN',
[0-0]     maxContentLength: -1,
[0-0]     maxBodyLength: -1,
[0-0]     validateStatus: [Function: validateStatus],
[0-0]     transitional: {
[0-0]       silentJSONParsing: true,
[0-0]       forcedJSONParsing: true,
[0-0]       clarifyTimeoutError: false
[0-0]     }
[0-0]   },
[0-0]   request: <ref *1> Writable {
[0-0]     _writableState: WritableState {
[0-0]       objectMode: false,
[0-0]       highWaterMark: 16384,
[0-0]       finalCalled: false,
[0-0]       needDrain: false,
[0-0]       ending: false,
[0-0]       ended: false,
[0-0]       finished: false,
[0-0]       destroyed: false,
[0-0]       decodeStrings: true,
[0-0]       defaultEncoding: 'utf8',
[0-0]       length: 0,
[0-0]       writing: false,
[0-0]       corked: 0,
[0-0]       sync: true,
[0-0]       bufferProcessing: false,
[0-0]       onwrite: [Function: bound onwrite],
[0-0]       writecb: null,
[0-0]       writelen: 0,
[0-0]       afterWriteTickInfo: null,
[0-0]       buffered: [],
[0-0]       bufferedIndex: 0,
[0-0]       allBuffers: true,
[0-0]       allNoop: true,
[0-0]       pendingcb: 0,
[0-0]       constructed: true,
[0-0]       prefinished: false,
[0-0]       errorEmitted: false,
[0-0]       emitClose: true,
[0-0]       autoDestroy: true,
[0-0]       errored: null,
[0-0]       closed: false,
[0-0]       closeEmitted: false,
[0-0]       [Symbol(kOnFinished)]: []
[0-0]     },
[0-0]     _events: [Object: null prototype] {
[0-0]       response: [Function: handleResponse],
[0-0]       error: [Function: handleRequestError]
[0-0]     },
[0-0]     _eventsCount: 2,
[0-0]     _maxListeners: undefined,
[0-0]     _options: {
[0-0]       maxRedirects: 21,
[0-0]       maxBodyLength: 10485760,
[0-0]       protocol: 'http:',
[0-0]       path: 'undefined/api/Validate',
[0-0]       method: 'POST',
[0-0]       headers: [Object],
[0-0]       agent: undefined,
[0-0]       agents: [Object],
[0-0]       auth: undefined,
[0-0]       hostname: null,
[0-0]       port: null,
[0-0]       nativeProtocols: [Object],
[0-0]       pathname: 'undefined/api/Validate'
[0-0]     },
[0-0]     _ended: false,
[0-0]     _ending: true,
[0-0]     _redirectCount: 0,
[0-0]     _redirects: [],
[0-0]     _requestBodyLength: 69,
[0-0]     _requestBodyBuffers: [ [Object] ],
[0-0]     _onNativeResponse: [Function (anonymous)],
[0-0]     _currentRequest: ClientRequest {
[0-0]       _events: [Object: null prototype],
[0-0]       _eventsCount: 7,
[0-0]       _maxListeners: undefined,
[0-0]       outputData: [],
[0-0]       outputSize: 0,
[0-0]       writable: true,
[0-0]       destroyed: false,
[0-0]       _last: true,
[0-0]       chunkedEncoding: false,
[0-0]       shouldKeepAlive: false,
[0-0]       maxRequestsOnConnectionReached: false,
[0-0]       _defaultKeepAlive: true,
[0-0]       useChunkedEncodingByDefault: true,
[0-0]       sendDate: false,
[0-0]       _removedConnection: false,
[0-0]       _removedContLen: false,
[0-0]       _removedTE: false,
[0-0]       _contentLength: null,
[0-0]       _hasBody: true,
[0-0]       _trailer: '',
[0-0]       finished: false,
[0-0]       _headerSent: true,
[0-0]       _closed: false,
[0-0]       socket: [Socket],
[0-0]       _header: 'POST undefined/api/Validate HTTP/1.1\r\n' +
[0-0]         'Accept: application/json, text/plain, */*\r\n' +
[0-0]         'Content-Type: application/json\r\n' +
[0-0]         'User-Agent: axios/0.21.4\r\n' +
[0-0]         'Content-Length: 69\r\n' +
[0-0]         'Host: localhost\r\n' +
[0-0]         'Connection: close\r\n' +
[0-0]         '\r\n',
[0-0]       _keepAliveTimeout: 0,
[0-0]       _onPendingData: [Function: nop],
[0-0]       agent: [Agent],
[0-0]       socketPath: undefined,
[0-0]       method: 'POST',
[0-0]       maxHeaderSize: undefined,
[0-0]       insecureHTTPParser: undefined,
[0-0]       path: 'undefined/api/Validate',
[0-0]       _ended: false,
[0-0]       res: null,
[0-0]       aborted: false,
[0-0]       timeoutCb: null,
[0-0]       upgradeOrConnect: false,
[0-0]       parser: null,
[0-0]       maxHeadersCount: null,
[0-0]       reusedSocket: false,
[0-0]       host: 'localhost',
[0-0]       protocol: 'http:',
[0-0]       _redirectable: [Circular *1],
[0-0]       [Symbol(kCapture)]: false,
[0-0]       [Symbol(kNeedDrain)]: false,
[0-0]       [Symbol(corked)]: 0,
[0-0]       [Symbol(kOutHeaders)]: [Object: null prototype]
[0-0]     },
[0-0]     _currentUrl: 'http:undefined/api/Validate',
[0-0]     [Symbol(kCapture)]: false
[0-0]   },
[0-0]   response: undefined,
[0-0]   isAxiosError: true,
[0-0]   toJSON: [Function: toJSON],
[0-0]   [Symbol(originalCallSite)]: [ CallSite {} ],
[0-0]   [Symbol(mutatedCallSite)]: [ CallSite {} ]
[0-0] }
[0-0] 2022-08-15T05:16:00.061Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
[0-0] 2022-08-15T05:16:00.061Z INFO webdriver: Retrying 1/3
[0-0] 2022-08-15T05:16:00.061Z INFO webdriver: [GET] http://localhost:4723/session/002f3b8b-6fba-4f76-9343-77311d99eaf3/screenshot
[0-0] 2022-08-15T05:16:00.123Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
[0-0] 2022-08-15T05:16:00.123Z INFO webdriver: Retrying 2/3
[0-0] 2022-08-15T05:16:00.123Z INFO webdriver: [GET] http://localhost:4723/session/002f3b8b-6fba-4f76-9343-77311d99eaf3/screenshot
[0-0] 2022-08-15T05:16:00.136Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
[0-0] 2022-08-15T05:16:00.137Z INFO webdriver: Retrying 3/3
[0-0] 2022-08-15T05:16:00.137Z INFO webdriver: [GET] http://localhost:4723/session/002f3b8b-6fba-4f76-9343-77311d99eaf3/screenshot
[0-0] 2022-08-15T05:16:00.196Z ERROR webdriver: Request failed with status 404 due to invalid session id: A session is either terminated or not started
[0-0] /Users/laymui/dev/taiger/react-native-stock-price-app/node_modules/webdriver/build/utils.js:197
[0-0]     return new CustomRequestError(body);
[0-0]            ^
[0-0] invalid session id: A session is either terminated or not started
[0-0]     at getErrorFromResponseBody (/Users/laymui/dev/taiger/react-native-stock-price-app/node_modules/webdriver/build/utils.js:197:12)
[0-0]     at NodeJSRequest._request (/Users/laymui/dev/taiger/react-native-stock-price-app/node_modules/webdriver/build/request/index.js:166:60)
[0-0]     at processTicksAndRejections (node:internal/process/task_queues:96:5)
[0-0]     at async Browser.wrapCommandFn (/Users/laymui/dev/taiger/react-native-stock-price-app/node_modules/@wdio/utils/build/shim.js:137:29)
[0-0]     at async Browser.saveScreenshot (/Users/laymui/dev/taiger/react-native-stock-price-app/node_modules/webdriverio/build/commands/browser/saveScreenshot.js:36:26)
[0-0]     at async Browser.wrapCommandFn (/Users/laymui/dev/taiger/react-native-stock-price-app/node_modules/@wdio/utils/build/shim.js:137:29) {
[0-0]   [Symbol(originalCallSite)]: [
[0-0]     CallSite {},
[0-0]     CallSite {},
[0-0]     CallSite {},
[0-0]     CallSite {},
[0-0]     CallSite {},
[0-0]     CallSite {}
[0-0]   ],
[0-0]   [Symbol(mutatedCallSite)]: [
[0-0]     CallSite {},
[0-0]     CallSite {},
[0-0]     CallSite {},
[0-0]     CallSite {},
[0-0]     CallSite {},
[0-0]     CallSite {}
[0-0]   ]
[0-0] }
[0-0] FAILED in iOS - /tests/features/SearchStockPrice.feature
2022-08-15T05:16:00.251Z INFO @wdio/cli:launcher: Run onWorkerEnd hook
2022-08-15T05:16:00.253Z INFO @wdio/cli:launcher: Run onComplete hook

Spec Files:      0 passed, 1 failed, 1 total (100% completed) in 00:00:20 

2022-08-15T05:16:00.254Z INFO @wdio/local-runner: Shutting down spawned worker
2022-08-15T05:16:00.507Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2022-08-15T05:16:00.508Z INFO @wdio/local-runner: shutting down
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```