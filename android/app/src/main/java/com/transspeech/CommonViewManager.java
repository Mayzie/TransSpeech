package com.transspeech;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;

import android.graphics.Color;
import android.view.View;
import android.view.ViewGroup.LayoutParams;

public abstract class CommonViewManager<T extends View>  extends SimpleViewManager<T> {
    /*
     * Style props
     */
    @ReactProp(name = ViewProps.HEIGHT)
    public void propSetHeight(View v, int height) {
        LayoutParams currentLP = v.getLayoutParams();
        v.setLayoutParams(new LayoutParams(currentLP.width, height));
    }

    @ReactProp(name = ViewProps.WIDTH)
    public void propSetWidth(View v, int width) {
        LayoutParams currentLP = v.getLayoutParams();
        v.setLayoutParams(new LayoutParams(width, currentLP.height));
    }

    @ReactProp(name = ViewProps.PADDING)
    public void propSetPadding(View v, int padding) {
        v.setPadding(padding, padding, padding, padding);
    }

    @ReactProp(name = ViewProps.PADDING_LEFT)
    public void propSetPaddingLeft(View v, int paddingLeft) {
        int paddingTop = v.getPaddingTop();
        int paddingBottom = v.getPaddingBottom();
        int paddingRight = v.getPaddingRight();

        v.setPadding(paddingLeft, paddingTop, paddingRight, paddingBottom);
    }

    @ReactProp(name = ViewProps.PADDING_TOP)
    public void propSetPaddingTop(View v, int paddingTop) {
        int paddingLeft = v.getPaddingLeft();
        int paddingBottom = v.getPaddingBottom();
        int paddingRight = v.getPaddingRight();

        v.setPadding(paddingLeft, paddingTop, paddingRight, paddingBottom);
    }

    @ReactProp(name = ViewProps.PADDING_RIGHT)
    public void propSetPaddingRight(View v, int paddingRight) {
        int paddingTop = v.getPaddingTop();
        int paddingBottom = v.getPaddingBottom();
        int paddingLeft = v.getPaddingLeft();

        v.setPadding(paddingLeft, paddingTop, paddingRight, paddingBottom);
    }

    @ReactProp(name = ViewProps.PADDING_BOTTOM)
    public void propSetPaddingBottom(View v, int paddingBottom) {
        int paddingTop = v.getPaddingTop();
        int paddingLeft = v.getPaddingLeft();
        int paddingRight = v.getPaddingRight();

        v.setPadding(paddingLeft, paddingTop, paddingRight, paddingBottom);
    }

    @ReactProp(name = ViewProps.BACKGROUND_COLOR)
    public void propSetBackgroundColour(View v, String colour) {
        v.setBackgroundColor(Color.parseColor(colour));
    }


}
