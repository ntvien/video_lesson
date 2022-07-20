## Fix Error

#### Web View

    - Solved this by including classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:1.7.0" in root build.gradle

### Export file apk

    $ cd android && ./gradlew assembleRelease

    OR:

    $ npx react-native run-android --variant=release
