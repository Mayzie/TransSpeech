package com.transspeech;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.util.Map;

import android.graphics.Color;
import android.widget.CheckBox;
import android.widget.TextView;
import android.widget.CompoundButton;
import android.util.DisplayMetrics;

public class RCTCheckBox extends CommonTextViewManager<CheckBox> {
    private final static String REACT_CLASS = "RCTCheckBox";

    private final static CompoundButton.OnCheckedChangeListener ON_CHECKED_CHANGE_LISTENER =
            new CompoundButton.OnCheckedChangeListener() {
                @Override
                public void onCheckedChanged(CompoundButton compoundButton, boolean b) {
                    WritableMap event = Arguments.createMap();
                    event.putBoolean("isChecked", b);
                    ReactContext reactContext = (ReactContext) compoundButton.getContext();
                    reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                            compoundButton.getId(),
                            "checkChanged",
                            event
                    );
                }
            };

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected CheckBox createViewInstance(ThemedReactContext themedReactContext) {
        CheckBox cb = new CheckBox(themedReactContext);

        // Add checkbox padding.
        DisplayMetrics metrics = new DisplayMetrics();
        themedReactContext.getCurrentActivity().getWindowManager().getDefaultDisplay().getMetrics(metrics);
        final float scale = metrics.density;
       /* cb.setPadding(cb.getPaddingLeft() + (int)(30.0f * scale + 0.5f),
                cb.getPaddingTop(),
                cb.getPaddingRight(),
                cb.getPaddingBottom());
                */
        
        cb.setOnCheckedChangeListener(ON_CHECKED_CHANGE_LISTENER);

        return cb;
    }

    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder()
                .put(
                        "checkChanged",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", "onCheckedChange")))
                .build();
    }

    @ReactProp(name = "title")
    public void propSetTitle(CheckBox checkBox, String title) {
        checkBox.setText(title);
    }

    @ReactProp(name = "checked")
    public void propSetChecked(CheckBox checkBox, boolean checked) {
        checkBox.setOnCheckedChangeListener(null);
        checkBox.setChecked(checked);
        checkBox.setOnCheckedChangeListener(ON_CHECKED_CHANGE_LISTENER);
    }

    @ReactProp(name = "enabled")
    public void propSetEnabled(CheckBox cb, boolean enabled) {
        cb.setEnabled(enabled);
    }

}
