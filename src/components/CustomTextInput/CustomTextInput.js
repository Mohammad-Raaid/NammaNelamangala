import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './CustomTextInputStyle'
import { Colors, Constants } from '../../global'
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant'
const CustomTextInput = ({
    onChangeText,
    externalStyle,
    placeholderText = '',
    multiline = false,
    keyboardType = 'default',
    maxLength = null,
    onFocus = () => { },
    onBlur = () => { },
    editable = true,
    defaultValue = '',
    error = null,
    placeholderStyle = {},
    Prefix = null
}) => {

    const [inputValue, setInputValue] = React.useState(defaultValue)
    const onChangeTextValue = (text) => {
        setInputValue(text)
        onChangeText(text)
    }
    return (
        <View style={styles.mainContainer}>
            {
                placeholderText != ""
                &&
                <Text style={[styles.textContainer, placeholderStyle]}>
                    {placeholderText}
                </Text>
            }
            <View style={[styles.inputMainContainer, externalStyle, multiline ? { height: Constants.CHANGE_BY_MOBILE_DPI(90) } : {}, error ? styles.error : {}]}>
                {
                    Prefix
                    &&
                    <Prefix />
                }
                <View style={styles.flexContainer}>
                    <TextInput
                        onFocus={onFocus}
                        onBlur={onBlur}
                        selectionColor={Colors.PRIMARY}
                        editable={editable}
                        multiline={multiline}
                        style={styles.inputStyle}
                        onChangeText={onChangeTextValue}
                        keyboardType={keyboardType}
                        maxLength={maxLength}
                    >{inputValue}</TextInput>
                </View>
            </View>
            {
                multiline
                && maxLength
                &&
                <Text style={styles.lengthText}>
                    {inputValue.length} / {maxLength} words
                </Text>
            }
            {
                error
                &&
                <Text style={styles.errorText}>
                    {error.errorMessage}
                </Text>
            }
        </View >
    )
}

export default CustomTextInput;
