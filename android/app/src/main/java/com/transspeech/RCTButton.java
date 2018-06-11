package com.transspeech;


import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.facebook.react.uimanager.ViewProps;

import java.util.Map;

import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup.LayoutParams;
import android.widget.Button;
import android.graphics.Color;
import android.graphics.PorterDuff;

public class RCTButton extends CommonTextViewManager<Button> {
    private final static String REACT_CLASS = "RCTButton";

    private final static View.OnClickListener ON_CLICK_LISTENER =
            new View.OnClickListener() {
                public void onClick(View v) {
                    Log.i("BTN", "Touched button");
                    ReactContext reactContext = (ReactContext) v.getContext();
                    reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                            v.getId(),
                            "onPressed",
                            null
                    );
                }
            };

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected Button createViewInstance(ThemedReactContext themedReactContext) {
        Button b = new Button(themedReactContext);
        b.setLayoutParams(new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT));
        //cb.setOnCheckedChangeListener(ON_CHECKED_CHANGE_LISTENER);

        b.setOnClickListener(ON_CLICK_LISTENER);

        return b;
    }

    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder()
                .put(
                        "onPressed",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", "onPress")))
                .build();
    }

    @ReactProp(name = "title")
    public void propSetTitle(Button b, String title) {
        b.setText(title);
    }

    @ReactProp(name = "enabled")
    public void propSetEnabled(Button b, boolean enabled) {
        b.setEnabled(enabled);
    }
}
