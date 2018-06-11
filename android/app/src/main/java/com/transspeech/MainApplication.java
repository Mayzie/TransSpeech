package com.transspeech;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.airbnb.android.react.lottie.LottiePackage;
import com.aakashns.reactnativedialogs.ReactNativeDialogsPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return Arrays.<ReactPackage>asList(
            // eg. new VectorIconsPackage()
                new LottiePackage(),
                new NativeComponentsPackage(),
                new ReactNativeDialogsPackage()
        );
    }
 }
