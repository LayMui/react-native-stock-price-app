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