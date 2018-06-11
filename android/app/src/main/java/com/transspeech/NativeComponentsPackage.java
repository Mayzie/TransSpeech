package com.transspeech;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import com.transspeech.RCTCheckBox;
import com.transspeech.RCTButton;

public class NativeComponentsPackage implements ReactPackage {
    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(
                new RCTCheckBox(),
                new RCTButton()
        );
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext  reactContext) {
        return Collections.emptyList();
    }
}
