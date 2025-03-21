# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# react-native-reanimated
-keep class com.swmansion.reanimated.** { *; }
-keep class com.facebook.react.turbomodule.** { *; }

# Hermes
-keep class com.facebook.hermes.unicode.** { *; }
-keep class com.facebook.jni.** { *; }

# Keep native methods
-keepclassmembers class * {
    native <methods>;
}

# Keep important React Native classes
-keep class com.facebook.react.bridge.** { *; }
-keep class com.facebook.react.uimanager.** { *; }
-keep class com.facebook.react.animated.** { *; }
-keep class com.facebook.react.ReactActivity { *; }
-keep class com.facebook.react.ReactActivityDelegate { *; }
-keep class com.facebook.react.ReactRootView { *; }

# Keep JavaScript interfaces
-keepattributes JavascriptInterface
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# AsyncStorage
-keep class com.reactnativecommunity.asyncstorage.** { *; }

# React Native Paper
-keep class com.reactnativepaper.** { *; }
-keep class io.callstack.react.opentypescript.** { *; }

# Collapsible
-keep class com.reactnativecollapsible.** { *; }

# Slider
-keep class com.reactnativecommunity.slider.** { *; }

# ImagePicker
-keep class expo.modules.imagepicker.** { *; }

# Keep all components
-keep class **.components.** { *; }

# Keep all screens
-keep class **.screens.** { *; }

# Keep all utils
-keep class **.utils.** { *; }

# Remove debug logs in release
-assumenosideeffects class android.util.Log {
    public static *** d(...);    
    public static *** v(...);    
    public static *** i(...);    
}

# Add any project specific keep options here:
