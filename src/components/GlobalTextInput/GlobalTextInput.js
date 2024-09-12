import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './GlobalTextInputStyle'
import { Colors, Constants } from '../../global'
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant'
const GlobalTextInput = ({
    setValue,
    svg = null,
    externalStyle,
    required = false,
    externalPlaceholder = '',
    placeholderText = '',
    placeholderColor = '#04040433',
    multiline = false,
    keyboardType = 'default',
    maxLength = null,
    onFocus = () => { },
    onBlur = () => { },
    editable = true,
    defaultValue = '',
    error = null
}) => {

    const [inputValue, setInputValue] = React.useState(defaultValue)
    const onChangeText = (text) => {
        setInputValue(text)
        setValue(text)
    }
    return (
        <View style={{ marginBottom: CHANGE_BY_MOBILE_DPI(20), }}>
            {
                externalPlaceholder != ""
                &&
                <Text style={styles.textContainer}>
                    {externalPlaceholder}{required ? <Text style={styles.starContainer}> *</Text> : null}
                </Text>
            }
            <View style={[styles.inputMainContainer, externalStyle, multiline ? { height: Constants.CHANGE_BY_MOBILE_DPI(90) } : {}, error ? styles.error : {}]}>
                <View style={styles.flexContainer}>
                    <TextInput
                        onFocus={onFocus}
                        onBlur={onBlur}
                        editable={editable}
                        multiline={multiline}
                        style={[styles.inputStyle, !editable ? { color: Colors.GRAY_DARK } : {}]}
                        placeholderTextColor={placeholderColor}
                        placeholder={placeholderText}
                        onChangeText={onChangeText}
                        keyboardType={keyboardType}
                        maxLength={maxLength}
                    >{inputValue}</TextInput>
                </View>
            </View>
            {
                error
                &&
                <Text style={styles.errorText}>
                    {error.errorMessage}
                </Text>
            }
        </View>
    )
}

export default GlobalTextInput;
