/**
 * @format
 */

import { AppRegistry, FlatList, Image, Platform, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
const setDefaultProps = (Component, defaultProps) => {
    const componentRender = Component.render
    if (!componentRender) {
        Component.defaultProps = defaultProps
        return
    }

    Component.render = (props, ref) => {
        props = {
            ...defaultProps,
            ...props,
            style: [defaultProps.style, props.style],
        }

        return componentRender.call(this, props, ref)
    }
}
setDefaultProps(Text, {
    style: [{ includeFontPadding: false }],
})

setDefaultProps(TextInput, {
    style: [{ includeFontPadding: false }],
})

if (Text.defaultProps) {
    Text.defaultProps.allowFontScaling = false;
} else {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
}
if (TouchableOpacity.defaultProps) {
    TouchableOpacity.defaultProps.activeOpacity = 1;
} else {
    TouchableOpacity.defaultProps = {};
    TouchableOpacity.defaultProps.activeOpacity = 1;
}
if (FlatList.defaultProps) {
    FlatList.defaultProps.showsVerticalScrollIndicator = false;
    FlatList.defaultProps.showsHorizontalScrollIndicator = false;
} else {
    FlatList.defaultProps = {};
    FlatList.defaultProps.showsHorizontalScrollIndicator = false;
    FlatList.defaultProps.showsVerticalScrollIndicator = false;
}

if (ScrollView.defaultProps) {
    ScrollView.defaultProps.showsVerticalScrollIndicator = false;
    ScrollView.defaultProps.showsHorizontalScrollIndicator = false;
} else {
    ScrollView.defaultProps = {};
    ScrollView.defaultProps.showsHorizontalScrollIndicator = false;
    ScrollView.defaultProps.showsVerticalScrollIndicator = false;
}
// Override Text scaling in input fields
if (TextInput.defaultProps) {
    TextInput.defaultProps.allowFontScaling = false;
} else {
    TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false;
}
AppRegistry.registerComponent(appName, () => App);
