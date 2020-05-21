#Publishing in Android an Expo App

###Prerequisite

In the app.json file configure this properties. [More info](https://docs.expo.io/distribution/building-standalone-apps/)
```json
{
  "expo": {
    "name": "Your App Name",
    "icon": "./path/to/your/app-icon.png",
    "version": "1.0.0",
    "slug": "your-app-slug",
    "android": {
      "package": "com.yourcompany.yourappname",
      "versionCode": 1
    }
  }
}
```

Create account in [Google play console](https://play.google.com/apps/publish/signup/)

Create Expo account [here](https://expo.io/signup)

###Android App Bundle instead APK

####Option 1 Expo generate the keystore

```shell script
expo start
expo build:android -t app-bundle
```

For this option Expo recommend run `expo fetch:android:keystore` and backup your keystore to a safe location.

###Testing the app with Android

Generate apk with Expo

```shell script
expo build:android -t apk
```

Install adb for send our app to the device: https://developer.android.com/studio/releases/platform-tools?hl=es-419.

Enabled Developer options in your mobile. [Help here](https://developer.android.com/studio/debug/dev-options?hl=es-419)

```shell script
adb install app-filename.apk
```

