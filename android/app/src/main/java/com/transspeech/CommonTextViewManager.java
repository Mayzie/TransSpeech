package com.transspeech;

import android.graphics.Color;
import android.view.View;
import android.widget.TextView;

import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;

public abstract class CommonTextViewManager<T extends TextView> extends CommonViewManager<T> {
    /*
     * Style props
     */
    @ReactProp(name = ViewProps.COLOR)
    public void propSetColour(TextView t, String colour) {
        //cb.getBackground().setColorFilter(Color.parseColor(colour), PorterDuff.Mode.MULTIPLY);
        t.setTextColor(Color.parseColor(colour));
    }

    @ReactProp(name = ViewProps.HEIGHT)
    public void propSetHeight(TextView t, int height) {
        t.setHeight(height);
    }

    @ReactProp(name = ViewProps.WIDTH)
    public void propSetWidth(TextView t, int width) {
        t.setWidth(width);
    }

    @ReactProp(name = ViewProps.TEXT_ALIGN)
    public void propSetTextAlign(TextView t, String alignment) {
        switch (alignment) {
            case "center":
                t.setTextAlignment(View.TEXT_ALIGNMENT_CENTER);
                break;
            case "start":
                t.setTextAlignment(View.TEXT_ALIGNMENT_VIEW_START);
                break;
            case "end":
                t.setTextAlignment(View.TEXT_ALIGNMENT_VIEW_END);
                break;
        }
    }

    @ReactProp(name = ViewProps.FONT_SIZE)
    public void propSetFontSIze(TextView t, float fontSize) {
        t.setTextSize(fontSize);
    }

}
