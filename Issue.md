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

 [ios.app] [0-0] error: unknown option '--no-backtrace'
 ```