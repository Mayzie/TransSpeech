package com.transspeech;

import android.widget.ExpandableListView;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.ViewProps;

public class RCTExpandableListView extends CommonViewManager<ExpandableListView> {
    private final static String REACT_CLASS = "RCTExpandableListView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected ExpandableListView createViewInstance(ThemedReactContext reactContext) {
        ExpandableListView listView = new ExpandableListView(reactContext);

        return listView;
    }
}
