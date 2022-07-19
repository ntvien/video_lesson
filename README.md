## Video Lesson

### Backend

#### Run

    $ yarn start

#### Run dev

    $ yarn run dev

### Frontend

#### Run

    $ cd frontend

    $ npm uninstall -g react-native-cli

    $ Add "server: {port: 8088}" in file metro.config.js

    $ npx react-native run-android --port 8088

    $ npx react-native start

### Facing issue "Failed to install the app"

    $ cd android && ./gradlew clean

    $ chmod +x gradlew

### In the root of your project:

    $ npx react-native start --reset-cache

### Add dependencies on Android

    $ android/app/build.gradle

### Frontend_expo (Expo)

#### Run

    $ cd frontend

    $ yarn start

#### Build file apk

    $ cd frontend

    $ expo build:android -t apk
